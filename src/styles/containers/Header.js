import { createUseStyles } from 'react-jss';

const headerStyles = (theme) => ({
  Root: {
    width: '100%',
    background: theme.palette.background.header,
  },
  Header__container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    color: theme.palette.text.header,
  },
  Header__nav: {
    display: 'flex',
  },
  Header__nav_elements: {
    marginRight: '10px',
    '&:hover': {
      color: '#00ffaf',
    },
  },
  favourites: {
    '&:hover': {
      color: '#00ffaf',
    },
  },
});

export default createUseStyles(headerStyles, { name: 'Header', index: 300 });
