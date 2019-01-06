import React from 'react'
const style = {
  width: '100%',
  backgroundColor: 'rgb(255, 255, 255)',
  boxShadow: 'rgba(118, 143, 255, 0.1) 0px 16px 24px 0px',
  padding: '10px',
  borderRadius: '4.5px'
}
const Cover = ({ src }, title) => {
  return <img src={src} alt={title} style={style} />
}

export default Cover
