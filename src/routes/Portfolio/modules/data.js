const baseDir = 'img/portfolio/'

const initialData = {
  headerInteractedWith: false,
  workHovered: false,
  documentHeight: 0,
  focused: {},
  works: [
    { id: 2,
      order: 102,
      url: `${baseDir}trains/peaceful.jpg`,
      thumbnail: `${baseDir}trains/train_square.jpg`
    },
    { id: 3,
      order: 101,
      parent: 2,
      url: `${baseDir}trains/waiting.jpg`
    },
    { id: 42,
      order: 103,
      parent: 2,
      url: `${baseDir}trains/tunnel.jpg`
    },
    { id: 4,
      order: 104,
      parent: 2,
      url: `${baseDir}trains/superman.jpg`
    },
    { id: 28,
      order: 200,
      url: `${baseDir}voting.jpg`,
      thumbnail: `${baseDir}voting_square.jpg`
    },
    { id: 32,
      order: 301,
      url: `${baseDir}akavishu/01.jpg`,
      thumbnail: `${baseDir}akavishu/01_square.jpg`
    },
    { id: 33,
      order: 302,
      url: `${baseDir}akavishu/02.jpg`,
      parent: 32
    },
    { id: 34,
      order: 303,
      url: `${baseDir}akavishu/03.jpg`,
      parent: 32
    },
    { id: 35,
      order: 304,
      url: `${baseDir}akavishu/04.jpg`,
      parent: 32
    },
    { id: 1,
      order: 401,
      url: `${baseDir}seasons/weather.jpg`,
      thumbnail: `${baseDir}seasons/leaves_square.jpg`
    },
    { id: 36,
      order: 402,
      parent: 1,
      url: `${baseDir}seasons/summerfall.jpg`
    },
    { id: 37,
      order: 403,
      parent: 1,
      url: `${baseDir}seasons/leaves.jpg`
    },
    { id: 38,
      order: 500,
      url: `${baseDir}costume.jpg`,
      thumbnail: `${baseDir}costume_square.jpg`
    },
    { id: 7,
      order: 601,
      url: `${baseDir}posters/01_sfr.jpg`,
      thumbnail: `${baseDir}posters/posters_square.jpg`
    },
    { id: 8,
      order: 602,
      parent: 7,
      url: `${baseDir}posters/02_felice.jpg`
    },
    { id: 9,
      order: 603,
      parent: 7,
      url: `${baseDir}posters/03_spring.jpg`
    },
    { id: 11,
      order: 701,
      url: `${baseDir}calendar_2016/2016_June-2016.jpg`,
      thumbnail: `${baseDir}calendar_2016/2016_square.jpg`,
      text: '2016 CALENDAR'
    },
    { id: 12,
      order: 702,
      parent:11,
      url: `${baseDir}calendar_2016/2016_August-2016.jpg`
    },
    { id: 13,
      order: 703,
      parent:11,
      url: `${baseDir}calendar_2016/2016_September-2016.jpg`
    },
    { id: 14,
      order: 704,
      parent:11,
      url: `${baseDir}calendar_2016/2016_October-2016.jpg`
    },
    { id: 15,
      order: 801,
      url: `${baseDir}calendar_2015/2015_April-2015.jpg`,
      thumbnail: `${baseDir}calendar_2015/2015_square.jpg`,
      text: '2015 CALENDAR'
    },
    { id: 16,
      order: 802,
      parent:15,
      url: `${baseDir}calendar_2015/2015_June-2015.jpg`
    },
    { id: 17,
      order: 803,
      parent:15,
      url: `${baseDir}calendar_2015/2015_October-2015.jpg`
    },
    { id: 18,
      order: 804,
      parent:15,
      url: `${baseDir}calendar_2015/2015_December-2015.jpg`
    },
    { id: 19,
      order: 901,
      url: `${baseDir}calendar_2014/2014_February-2014.jpg`,
      thumbnail: `${baseDir}calendar_2014/2014_square.jpg`,
      text: '2014 CALENDAR'
    },
    { id: 20,
      order: 902,
      parent: 19,
      url: `${baseDir}calendar_2014/2014_May-2014.jpg`
    },
    { id: 21,
      order: 903,
      parent: 19,
      url: `${baseDir}calendar_2014/2014_july--2014.jpg`
    },
    { id: 22,
      order: 904,
      parent: 19,
      url: `${baseDir}calendar_2014/2014_september--2014.jpg`
    },
    { id: 23,
      order: 1001,
      url: `${baseDir}calendar_2012/2012_january--2012.jpg`,
      thumbnail: `${baseDir}calendar_2012/2012_square.jpg`,
      text: '2012 CALENDAR'
    },
    { id: 24,
      order: 1002,
      parent: 23,
      url: `${baseDir}calendar_2012/2012_february.jpg`
    },
    { id: 25,
      order: 1003,
      parent: 23,
      url: `${baseDir}calendar_2012/2012_march.jpg`
    },
    { id: 26,
      order: 1004,
      parent: 23,
      url: `${baseDir}calendar_2012/2012_june.jpg`
    },
    { id: 27,
      order: 1005,
      parent: 23,
      url: `${baseDir}calendar_2012/2012_october--2012.jpg`
    },
    { id: 5,
      order: 1101,
      url: `${baseDir}food/sandwich.jpg`,
      thumbnail: `${baseDir}food/food_square.jpg`
    },
    { id: 6,
      order: 1102,
      parent: 5,
      url: `${baseDir}food/octoberfest.jpg`
    },
    { id: 40,
      order: 1200,
      url: `${baseDir}halloween.jpg`,
      thumbnail: `${baseDir}halloween_square.jpg`
    },
    { id: 30,
      order: 1301,
      url: `${baseDir}sports/baseball.jpg`,
      thumbnail: `${baseDir}sports/sports_square.jpg`
    },
    { id: 31,
      order: 1302,
      parent: 30,
      url: `${baseDir}sports/football.jpg`
    },
    { id: 29,
      order: 1400,
      url: `${baseDir}opera.jpg`,
      thumbnail: `${baseDir}opera_square.jpg`
    }
  ]
}

export default initialData
