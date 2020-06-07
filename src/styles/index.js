import { createUseStyles } from 'react-jss';

import globalStyles from 'styles/global';

const rootStyles = (theme) => ({
  '@global': {
    ...globalStyles(theme),
  },
});

export default createUseStyles(rootStyles, { name: 'Root', index: 100 });
