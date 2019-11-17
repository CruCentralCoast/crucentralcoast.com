import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../../components/MyLayout';
import Staff from '../../components/staff/staff'

const styles = () => ({
  '@global': {
    body: {
      backgroundImage: 'url("/img/Bishop-peak_blue.jpg")',
      backgroundRepeat: 'no-repeat',
      minWidth: '1170px',
    },
    'p.about': {
      marginTop: '30pt',
      textAlign: 'center',
      font: {
        size: '14pt',
        family: 'FreightSansProSemiBold',
      },
      color: '#666062',
    },
    'p.mission': {
      textAlign: 'center',
      font: {
        size: '13pt',
        family: 'FreightSansProItalic',
      },
      color: '#dd7d1b',
    },
  },
  middle: {
    paddingTop: '15pt',
    height: '175pt',
    backgroundColor: '#f5f5f5',
  },
  column: {
    float: 'left',
    width: '33.3%',
  },
  tabs: {
    marginBottom: '20px',
  },
  indicator: {
    display: 'none',
  },
  futureTab: {
    borderRadius: '30px 0px 0px 30px',
    backgroundColor: '#f0efef',
  },
  selectedFuture: {
    backgroundColor: '#f9b625',
    color: '#f0efef',
  },
  pastTab: {
    borderRadius: '0px 30px 30px 0px',
    backgroundColor: '#f0efef',
  },
  selectedPast: {
    backgroundColor: '#f9b625',
    color: '#f0efef',
  },
});

export default withStyles(styles)(() => (
  <Layout>
    <Staff />
  </Layout>
));
