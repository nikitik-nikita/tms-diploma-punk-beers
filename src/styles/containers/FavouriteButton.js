import { createUseStyles } from 'react-jss';

const favouriteButton = (theme) => ({
  wrapFavouriteButton: {
    alignSelf: 'start',
    justifySelf: 'end',
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
