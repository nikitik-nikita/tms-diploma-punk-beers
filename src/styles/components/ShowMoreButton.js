import { createUseStyles } from 'react-jss';

const ShowMoreButtonStyles = (theme) => ({
  Root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px 0',
  },
  showMoreButton: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    backgroundColor: theme.palette.action.active,
    padding: '.7em 1.5em',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '0 solid black',
    boxShadow: '0px 0px 3px 0px #000000',

    '&:hover': {
      backgroundColor: theme.palette.action.inActive,
    },
  },
});

export default createUseStyles(ShowMoreButtonStyles, { name: 'ShowMoreButton', index: 312 });
