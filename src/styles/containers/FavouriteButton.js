import { createUseStyles } from 'react-jss';

const favouriteButton = (theme) => ({
  wrapFavouriteButton: {
    position: 'relative',
    bottom: '60px',
    right: '8px',
    width: 0,
    height: 0,
  },
  favouriteButton: {
    fill: theme.palette.background.default,
    stroke: theme.palette.action.active,
    strokeWidth: '30px',
    width: '12px',
    height: '12px',
    cursor: 'pointer',

    '&:hover': {
      fill: theme.palette.action.active,
    },

    '&$active': {
      fill: theme.palette.action.active,
    },
  },
  active: {},
});

export default createUseStyles(favouriteButton, { name: 'FavouriteButton', index: 303 });
