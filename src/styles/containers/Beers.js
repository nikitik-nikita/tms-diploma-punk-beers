import { createUseStyles } from 'react-jss';

const beersStyles = (theme) => ({
  Root: {
    display: 'grid',
    // gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateColumns: 'repeat(auto-fit, minmax(30.3%, 1fr))',
    gridColumnGap: '20px',
    gridRowGap: '20px',
    padding: '20px 0',
  },
  Beers__table__information: {
    boxShadow: '0px 0px 3px 0px #000000',
    borderRadius: '4px',
    backgroundColor: theme.palette.background.paper,
  },
  beer__cell: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
  },
  beer__img__wrap: {
    width: '150px',
    height: '100px',
    textAlign: 'center',
  },
  beer__img: {
    maxHeight: '100%',
  },
  beer__text: {
    marginLeft: '23px',
    display: 'flex',
    flexDirection: 'column',
    height: '97px',
  },
  beer__text__title: {
    marginBottom: '18px',
    color: theme.palette.text.main,
  },
  beer__text__description: {
    font: {
      weight: theme.typography.fontWeightRegular,
      size: theme.typography.fontSizeNormal,
    },
    display: '-webkit-box',
    maxWidth: '200px',
    '-webkit-line-clamp': '4',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  // CardBeer
  Root__Card: {
    gridTemplateColumns: '1fr',
    gridColumnGap: 'unset',
    gridRowGap: 'unset',
    padding: '20px 0 5px 0px',
  },
  beer__img__wrap__Card: {
    width: '250px',
    height: '200px',
  },
  beer__text__Card: {
    marginLeft: 'unset',
    height: 'unset',
  },
  beer__text__title__Card: {
    fontSize: '18px',
  },
  beer__text__description__Card: {
    font: {
      weight: theme.typography.fontWeightRegular,
      size: '14px',
    },
    maxWidth: '400px',
    '-webkit-line-clamp': 'unset',
    overflow: 'unset',
    textOverflow: 'unset',
  },

  favourites__button__Card: {
    alignSelf: 'start',
    justifySelf: 'end',
  },
});

export default createUseStyles(beersStyles, { name: 'Beers', index: 301 });
