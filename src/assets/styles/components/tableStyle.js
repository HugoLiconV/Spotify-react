import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont
} from '../material';

const tableStyle = theme => ({
  warningTableHeader: {
    color: warningColor
  },
  primaryTableHeader: {
    color: primaryColor
  },
  dangerTableHeader: {
    color: dangerColor
  },
  successTableHeader: {
    color: successColor
  },
  infoTableHeader: {
    color: infoColor
  },
  roseTableHeader: {
    color: roseColor
  },
  grayTableHeader: {
    color: grayColor
  },
  table: {
    marginBottom: '0',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderSpacing: '0',
    borderCollapse: 'collapse'
  },
  root: {
    padding: '4px 0'
  },
  tableHeadCell: {
    color: 'inherit',
    ...defaultFont,
    fontSize: '1em'
  },
  tableCell: {
    ...defaultFont,
    lineHeight: '1.42857143',
    padding: '10px'
  },
  tableResponsive: {
    width: '100%',
    overflowX: 'auto'
  }
});

export default tableStyle;
