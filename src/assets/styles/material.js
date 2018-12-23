const drawerWidth = 260;

const transition = {
  transition: 'all 0.1s cubic-bezier(0.685, 0.0473, 0.346, 1)'
};

const container = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto'
};

const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em'
};

const primaryColor = '#9c27b0';
const infoColor = '#00acc1';
const warningColor = '#ff9800';
const dangerColor = '#f44336';
const successColor = '#4caf50';

const primaryBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)'
};

export {
  drawerWidth,
  transition,
  container,
  boxShadow,
  defaultFont,
  primaryColor,
  infoColor,
  warningColor,
  dangerColor,
  successColor,
  primaryBoxShadow
};
