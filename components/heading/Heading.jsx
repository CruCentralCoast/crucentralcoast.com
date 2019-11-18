import * as React from "react";
import PropTypes from "prop-types";
// import logo from '../../static/cru_logo.png';
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons/";

const drawerWidth = 155;

const styles = style => ({
  header: {
    textAlign: "center",
    width: "100%"
  },

  headerToolbar: {
    paddingLeft: "20px",
    paddingRight: "200px"
  },

  headerMenu: {
    paddingLeft: "200px",
    paddingRight: "200px"
  },

  // logo: {
  //   marginLeft: '20px',
  // },

  headerLogo: {
    float: "left",
    position: "fixed",
    top: "-2px",
    margin: "20px",
    height: "67px",
    cursor: "pointer"
  },

  headerBody: {
    height: "60px"
  },

  title: {
    color: "#666062",
    marginLeft: "auto",
    marginRight: "auto"
  },

  headerSocial: {
    display: "flex",
    flexDirection: "row-reverse",
    marginRight: "40px",
    marginTop: "20px"
  },

  socialIcons: {
    marginLeft: "4px",
    marginRight: "4px",
    color: "#d1d3d4",
    fontSize: "27px"
  },

  backToCru: {
    margin: "5px",
    fontSize: "11px",
    textDecoration: "none",
    color: "#666062"
  },

  menuToolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...style.mixins.toolbar
  },

  content: {
    flexGrow: 1,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    padding: "20px"
  }
});

const Heading = props => {
  const { classes, children } = props;

  return (
    <div className={classes.header}>
      <AppBar color="default" position="fixed" className={classes.appBar}>
        <div className={classes.headerSocial}>
          <a href="https://www.youtube.com/user/slocrusade" target="_blank">
            <YouTube className={classes.socialIcons}></YouTube>
          </a>

          <a href="https://twitter.com/CruCalPolySLO" target="_blank">
            <Twitter className={classes.socialIcons}></Twitter>
          </a>

          <a href="https://www.instagram.com/crucalpolyslo/" target="_blank">
            <Instagram className={classes.socialIcons}></Instagram>
          </a>

          <a href="https://www.facebook.com/CruCalPolySLO/" target="_blank">
            <Facebook className={classes.socialIcons}></Facebook>
          </a>

          <a className={classes.backToCru} href="/">
            &#8592; back to Cru Central Coast
          </a>
        </div>
        <Toolbar className={classes.headerToolbar}>
          <div className={classes.logo}>
            <a href="/">
              <img
                src="/static/cru_logo.png"
                className={classes.headerLogo}
                alt="logo"
              />
            </a>
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
