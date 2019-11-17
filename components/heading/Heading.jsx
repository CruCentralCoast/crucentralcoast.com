import * as React from 'react';
import PropTypes from 'prop-types';
// import logo from '../../static/cru_logo.png';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';

const drawerWidth = 155;

const styles = style => ({
  header: {
    textAlign: 'center',
    width: '100%',
  },

  headerToolbar: {
    paddingLeft: '200px',
    paddingRight: '200px',
  },

  headerMenu: {
    paddingLeft: '200px',
    paddingRight: '200px',
  },

  // logo: {
  //   marginLeft: '20px',
  // },

  headerLogo: {
    float: 'left',
    height: '30px',
    cursor: 'pointer',
  },

  headerBody: {
    height: '60px',
  },

  title: {
    color: '#666062',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  menuToolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...style.mixins.toolbar,
  },

  content: {
    flexGrow: 1,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    padding: '20px',
  },
});

const Heading = (props) => {
  const { classes, children } = props;

  return (
    <div className={classes.header}>
      <AppBar
        color="default"
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar className={classes.headerToolbar}>
          <div className={classes.logo}>
            <a href="/"><img src="/static/cru_logo.png" className={classes.headerLogo} alt="logo" /></a>
          </div>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        {/* this div is used to make sure the content is below the AppBar */}
        <div className={classes.menuToolbar} />
        {children}
      </main>
    </div>
  );
};

// Heading.propTypes = {
//   classes: PropTypes.shape({
//     // TODO: finish adding fields
//   }).isRequired,
//   children: PropTypes.instanceOf(React.ReactNode).isRequired,
// };

export default withStyles(styles)(Heading);
