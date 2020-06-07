const fontFamily = '"Open Sans", sans-serif';
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 600;
const fontWeightBold = 700;
const fontSizeSmall = '9px';
const fontSizeNormal = '12px';
const fontSizeGlobal = '16px';
const fontSizeInput = '16px';
const fontSizeLogo = '30px';

export default {
  typography: {
    fontSizeInput,
    fontFamily,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    fontSizeSmall,
    fontSizeNormal,
    fontSizeGlobal,
    fontSizeLogo,
    buttonSearch: {
      fontFamily,
      fontWeightRegular,
      fontSizeInput,
    },
  },
  palette: {
    action: {
      active: '#00d1b2',
      inActive: '#808080',
      hoverActive: '#00d1b2',
      hoverInActive: '#6f6f6f',
    },
    background: {
      modal: 'rgba(0, 0, 0, 0.5)',
      default: '#ffffff',
      paper: '#ffffff',
      elements: '#3273dc',
      elementsHover: '#4288fb',
      header: '#00d1b2',
    },
    text: {
      primary: '#ffffff',
      header: '#f5f5f7',
      main: '#000000',
    },
  },
};
