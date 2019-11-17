import * as React from 'react';
import { db } from '../../src/firebase/firebaseSetup.js';
import * as moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Grid, Tabs, Tab } from '@material-ui/core';
// import StaffModel from '../../src/models/Staff'

const styles = style => ({
  root: {
    flexGrow: 1,
  },
  progress: {
    margin: style.spacing(2),
  },
  tabs: {
    marginBottom: '20px',
  },
  indicator: {
    display: 'none',
  },
  futureTab: {
    borderRadius: "30px 0px 0px 30px",
    backgroundColor: '#f0efef',
  },
  selectedFuture: {
    backgroundColor: '#f9b625',
    color: '#f0efef',
  },
  pastTab: {
    borderRadius: "0px 30px 30px 0px",
    backgroundColor: '#f0efef',
  },
  selectedPast: {
    backgroundColor: '#f9b625',
    color: '#f0efef',
  },
});

class Staff extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      past: [],
      future: [],
      showPast: false,
      tab: 0,
      showEvent: false,
      eventID: '',
      loading: true,
    };

    // db.collection('events').get().then(((querySnapshot) => {
    //   // TODO: add movement filter
    //   let data = [];
    //   let past = [];
    //   let future = [];
    //   let now = moment();
    //   querySnapshot.forEach((doc) => {
    //     let temp = new EventModel(doc);
    //     if (now.isBefore(temp.end) || temp.start.isAfter(now)) {
    //       future.push(temp);
    //     } else {
    //       past.push(temp);
    //     }
    //   });
    //   this.setState({
    //     past: past,
    //     future: future,
    //     loading: false,
    //   });
    // }).bind(this));
  }

  render() {
    const { classes } = this.props;
    let data = [];

    return (
      <div>
        <Grid container spacing={3} component={'div'} direction={'row'}>
            {/* contents get loaded here */}
        </Grid>
      </div>

    );
  }
}

export default withStyles(styles)(Staff);
