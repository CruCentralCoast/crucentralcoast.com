import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

export default function SpacingGrid() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg" style={{backgroundColor: 'black'}}>
      <Typography component="div" style={{color:'white', height: '100px', borderTop: '3px solid #FFF', borderBottom: '3px solid #FFF', marginBottom:'10px'}} variant='h2' align='center'>
        help1
      </Typography>
      <Grid container className={classes.root} spacing={2} component={'div'} direction={'row'}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2, 3, 4].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </React.Fragment>
  );
}




