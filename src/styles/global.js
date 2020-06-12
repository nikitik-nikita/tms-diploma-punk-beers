const globalStyles = (theme) => ({
  '*': {
    margin: 0,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.fontSizeGlobal,
    boxSizing: 'border-box',
    outline: 'none',
  },
  body: {
    overflow: 'auto',
    background: theme.palette.background.default,
  },
  a: {
    color: theme.palette.text.header,
    textDecoration: 'none',
  },
  input: {
    width: '400px',
    height: '35px',
    borderStyle: 'none',
    borderRadius: '3px 0 0 3px',
    fontSize: theme.typography.fontSizeInput,
    fontWeight: theme.typography.fontWeightRegular,
    paddingLeft: '8px',
    boxShadow: '0px 0px 3px 0px #000000 inset',
    '&:hover': {
      boxShadow: '0px 0px 5px 0px #000000 inset',
    },
    '&:focus': {
      boxShadow: '0px 0px 5px 0px #000000 inset',
    },
  },
  '.container': {
    maxWidth: '901px',
    margin: '0 auto',
    width: '100%',
  },
  '.button__search': {
    position: 'relative',
    right: '30px',
    fontFamily: theme.typography.buttonSearch.fontFamily,
    fontWeight: theme.typography.buttonSearch.fontWeightRegular,
    fontSize: theme.typography.buttonSearch.fontSizeInput,
    border: 'none',
    borderRadius: '0 3px 3px 0',
    backgroundColor: theme.palette.background.elements,
    height: '35px',
    width: '70px',
    color: theme.palette.text.primary,
    padding: 0,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.background.elementsHover,
    },
  },
  '.button__clear_search': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    position: 'relative',
    cursor: 'pointer',
    color: theme.palette.action.inActive,
    background: 'none',
    right: '32px',
    height: '35px',
    '&:hover': {
      color: theme.palette.text.main,
    },
  },
  '.search__error': {
    display: 'flex',
    color: theme.palette.text.primary,
    background: theme.palette.background.header,
    justifyContent: 'center',
    fontSize: '-webkit-xxx-large',
  },
});

export default globalStyles;
