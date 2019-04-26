import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MusicNote from '@material-ui/icons/MusicNoteRounded';
import purple from '@material-ui/core/colors/purple';
import {createMuiTheme} from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const darkpurple = purple[700];

const theme = createMuiTheme({
    palette:{
        primary: purple
    }
})

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    marginRight: 5,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <MusicNote />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Gminor
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
