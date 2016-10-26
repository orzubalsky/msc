import React, { PropTypes } from 'react'

const Contact = ({ onClick }) => (
  <div className='contact'>
    <a
      className='contact-email'
      href='mailto:magdalenecarson@gmail.com'
      onClick={() => onClick()}
    >
      magdalenecarson@gmail.com
    </a>
  </div>
)

Contact.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Contact
