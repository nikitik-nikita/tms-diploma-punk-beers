import { createUseStyles } from 'react-jss';

const beersStyles = (theme) => ({
  Root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
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
});

export default createUseStyles(beersStyles, { name: 'Beers', index: 301 });
