import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css'

function Avatar({size, src}) {
  return (
<img src={src} alt="avatar" className={`avatar-sb storybook-avatar--${size}`} />  )
}

export default Avatar;

Avatar.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    src: PropTypes.string.isRequired
}