import { createUseStyles } from 'react-jss';

const beerImageStyles = {
  beer__img__wrap: {
    width: '150px',
    height: '100px',
    textAlign: 'center',
  },
  beer__img: {
    // maxWidth: '100%',
    maxHeight: '100%',
  },
};

export default createUseStyles(beerImageStyles, { name: 'BeerImage', index: 308 });
