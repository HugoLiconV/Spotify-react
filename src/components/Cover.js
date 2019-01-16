import React, { PureComponent } from 'react';
const style = {
  width: '100%',
  backgroundColor: 'rgb(255, 255, 255)',
  boxShadow: 'rgba(118, 143, 255, 0.1) 0px 16px 24px 0px',
  borderRadius: '4.5px'
};

class Cover extends PureComponent {
  render() {
    const { src, title, width } = this.props;
    const overrideWidth = width ? width : style.width;
    return <img src={src} alt={title} style={{ ...style, width: overrideWidth }} />;
  }
}

export default Cover;
