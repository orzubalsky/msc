import _ from 'underscore';

function workById(works, id) {
    return _.chain(works)
        .filter(w => w.id === id)
        .first()
        .value();
}

function parent(works, work) {
    return _.chain(works)
        .filter(w => work.parent && w.id === work.parent)
        .first()
        .value();
}

export function allParents(works) {
    return _.chain(works)
        .filter(w => _.isUndefined(w.parent))
        .sortBy('order')
        .value();
}

export function collectionForFocused(state) {
    let collection = [];
    let focused = state.focused;

    if (!_.isEmpty(focused)) {
        // add focused item to collection
        collection.push(focused);

        if (focused.parent) {
            // the focused item is a child, concat siblings
            collection = collection.concat(collectionForSibling(state.works, focused));

            // add parent to collection
            collection.push(parent(state.works, focused));
        } else {
            // the focused item is the parent, concat children
            collection = collection.concat(collectionForParent(state.works, focused));
        }
    }

    // return an ordered array without duplicates
    return _.chain(collection)
        .uniq()
        .sortBy('order')
        .value();
}

export function collectionFirst(state, work) {
    let collection = collectionForWork(state.works, work);

    return _.chain(collection)
        .sortBy('order')
        .first()
        .value();
}

export function collectionLast(state, work) {
    let collection = collectionForWork(state.works, work);

    return _.chain(collection)
        .sortBy('order')
        .last()
        .value();
}

export function collectionForWork(works, work) {
    let collection = [work];
    collection = collection.concat(collectionForParent(works, work));
    return _.sortBy(collection, 'order');
}

export function collectionForParent(works, work) {
    return _.filter(works, w => w.parent === work.id)
}

export function collectionForSibling(works, work) {
    return _.filter(works, w => work.parent && w.parent === work.parent)
}

export function collectionNext(state, currentItem) {
    let collection = collectionForFocused(state);
    let index = findIndex(state, currentItem);

    if (index === _.size(collection) - 1) {
        // current item is a parent
        let currentParent = currentItem;

        if (currentItem.parent) {
            // current item is a child
            currentParent = workById(state.works, currentItem.parent);
        }

        let parents = allParents(state.works);
        let parentIndex = _.findIndex(parents, currentParent);

        if (parentIndex === _.size(parents) - 1) {
            // return first work in first parent
            return collectionFirst(state, parents[0]);
        }

        // return first work in next parent
        return collectionFirst(state, parents[parentIndex+1]);
    }

    // return next work in current parent
    return collection[index+1];
}

export function collectionPrevious(state, currentItem) {
    let collection = collectionForFocused(state);
    let index = findIndex(state, currentItem);

    if (index === 0) {
        // current item is a parent
        let currentParent = currentItem;

        if (currentItem.parent) {
            // current item is a child
            currentParent = workById(state.works, currentItem.parent);
        }

        let parents = allParents(state.works);
        let parentIndex = _.findIndex(parents, currentParent);

        if (parentIndex === 0) {
            // return last work in last parent
            return collectionLast(state, _.last(parents));
        }

        // return last work in previous parent
        return collectionLast(state, parents[parentIndex-1]);
    }

    // return previous work in current parent
    return collection[index-1];
}

export function findIndex(state, work) {
    let collection = collectionForFocused(state);

    if (!_.isEmpty(work)) {
        return _.findIndex(collection, work);
    }

    return -1;
}

export function findParentIndex(state, work) {
    let parents = allParents(state.works);
    let currentParent = work;

    if (!_.isEmpty(work)) {
        if (work.parent) {
            // current item is a child
            currentParent = workById(state.works, work.parent);
        }

        return _.findIndex(parents, currentParent);
    }

    return -1;
}