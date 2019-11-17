import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../../components/MyLayout';

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
    <div className="container">
      {/* {{!-- TODO: once the integration with the events from firebase is done add the slider again --}}
    {{!-- <div class="slider-wrapper theme-default hidden-xs">
        <div id="slider" class="nivoSlider">
            <a href="<?php echo base_url(); ?>">
                <!--<img src="/img/slides/Banner1_SLOCRU.png"/> -->
            </a>
            <?php
                for ($i = 0; $i < count($events); $i++) {
                    if (property_exists($events[$i], "image")) {
                        echo '<a href="' . base_url() . 'events#' . $events[$i]->_id .'"><img src="' . $events[$i]->bannerImageLink . '"/></a>';
                    }
                }
            ?>
        </div>
    </div> --}} */}
    </div>
    <div className="container middle">
      <div className="column">
        <div className="text">
          <p className="about">WHAT IS CRU?</p>
          <p className="mission" id="line1">A caring community passionate about</p>
          <p className="mission" id="line2">connecting people to Jesus Christ.</p>
          <div className="learn-more-button">
            <a href="/about">
              <p className="learn-more">You can learn more here</p>
            </a>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="text">
          <p className="meeting">CRU WEEKLY MEETING</p>
          <p className="meeting-info" id="line1">
            <span className="time">Tuesdays at 8pm</span>
            {' '}
(doors open at 7:30pm)
          </p>
          <p className="meeting-info" id="line2">Mountainbrook Community Church</p>
          <p className="break" />
          <p className="address">1775 Calle Joaquin, San Luis Obispo, CA 93405</p>
        </div>
      </div>
      <div className="column">
        <div className="directions-button">
          <a
            href="https://www.google.com/maps/place/1775+Calle+Joaquin,+San+Luis+Obispo,+CA+93405/@35.2417196,-120.6880619,1463m/data=!3m1!1e3!4m2!3m1!1s0x80ecf0cab0fe565d:0x85364dfc5018da90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="button">GET DIRECTIONS</p>
          </a>
        </div>
        <div className="livestream-button">
          <a href="https://www.youtube.com/user/slocrusade/videos" target="_blank">
            <p className="button">WATCH THE MEETING</p>
          </a>
        </div>
      </div>
    </div>

    <div className="container bottom">
      <div className="wrap">
        <a href="leadership">
          <img src="/img/placeholders/leadership.jpg" className="holder" id="holder1" />
        </a>
      </div>
      <div className="wrap">
        <a href="missions">
          <img src="/img/image-holder2.png" className="holder" id="holder2" />
        </a>
      </div>
      <div className="wrap">
        <a href="https://www.facebook.com/groups/1810897575812604/" target="_blank">
          <img src="/img/image-holder3.jpg" className="holder" id="holder3" />
        </a>
      </div>
    </div>
  </Layout>
));
