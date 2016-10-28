import React, { PropTypes } from 'react'

const Contact = ({ onClick }) => (
  <div className='contact'>
    <span
      className='contact-email'
      onClick={() => onClick()}
    >
      magdalenecarson@gmail.com
    </span>
  </div>
)

Contact.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Contact
