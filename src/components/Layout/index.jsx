import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100vw',
  },
}));

function Layout({ children }) {
  const classes = useStyles();
  return (
    <>
      <head>
        <title>Teste</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <div className={classes.root}>
        <div>topbar</div>
        <div>navbar</div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Layout;
