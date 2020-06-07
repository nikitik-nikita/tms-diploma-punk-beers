import { createUseStyles } from 'react-jss';

const logoStyles = (theme) => ({
  logo: {
    color: theme.palette.text.header,
    fontSize: theme.typography.fontSizeLogo,
  },
});

export default createUseStyles(logoStyles, { name: 'Logo', index: 304 });
