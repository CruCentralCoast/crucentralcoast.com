import * as React from 'react';

export default (props) => {
  return (
    <div>
      <img src="/img/landing/cru-central-coast.png" id="CCC" />

      <p className="tagline">
        A family of ministries giving every student and faculty on California's Central Coast the
        opportunity to hear the Good News of Jesus Christ
      </p>
      <div className="holder">
        <a href="/slo">
          <img src="/img/landing/slo-cru.png" className="ministry" />
        </a>
        <a href="https://slo.crucentralcoast.com">
          <img src="/img/landing/cuesta-cru.png" className="ministry" />
        </a>
        <a href="https://www.facebook.com/groups/epicslo/">
          <img src="/img/landing/epic.png" className="ministry" />
        </a>
        <a href="https://www.facebook.com/groups/calpolydestino/">
          <img src="/img/landing/destino.png" className="ministry" />
        </a>
        <a href="https://www.facebook.com/greekrowcalpolyslo/">
          <img src="/img/landing/greek-row.png" className="ministry" />
        </a>
        <a href="https://www.facebook.com/calpolyaia">
          <img src="/img/landing/athletes.png" className="ministry" />
        </a>
        <a href="http://facultycommonsslo.com/">
          <img src="/img/landing/faculty-commons.png" className="ministry" />
        </a>
        <a href="https://www.facebook.com/brandedchristiansinagriculture">
          <img src="/img/landing/branded.png" className="ministry" />
        </a>
        <a href="https://www.facebook.com/groups/385306844974162/">
          <img src="/img/landing/cuesta-north.png" className="ministry" />
        </a>
        <a href="https://www.facebook.com/CRUatHancock">
          <img src="/img/landing/hancock.png" className="ministry" />
        </a>
        <a href="https://www.facebook.com/groups/229636323901336/">
          <img src="/img/landing/cru-high.png" className="ministry" />
        </a>
        <img src="/img/landing/choose.png" className="ministry" id="choose" />
      </div>
      <style jsx>{`
      /*
        Created on : Jan 24, 2015, 9:07:07 PM
        Author     : kylereis
      */

      @font-face {
        font-family: "FreightSansProLight";
        src: url('../fonts/FreigSanProLig.otf') format('opentype');
      }

      @media (min-width: 1300px) {
        .holder {
          width: 1212px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media (min-width: 1000px) and (max-width: 1299px){
        .holder {
          width: 912px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media (min-width: 700px) and (max-width: 999px){
        .holder {
          width: 612px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media (max-width: 699px) {
        .holder {
          width: 300px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      }

      #CCC {
        height: 200px;
        display: block;
        margin-top: 10pt;
        margin-left: auto;
        margin-right: auto;
      }

      p.tagline {
        padding-top: 7pt;
        padding-bottom: 7pt;
        margin-top: 10pt;
        margin-bottom: 20pt;
        margin-right: 8%;
        margin-left: 8%;
        text-align: center;
        font-family: "FreightSansProLight";
        font-size: 14pt;
        color: #ffffff;
        border-top-color: #ffffff;
        border-top-width: 1pt;
        border-top-style: solid;
        border-bottom-color: #ffffff;
        border-bottom-width: 1pt;
        border-bottom-style: solid;
      }

      .ministry {
        /* display: table; */
        margin-bottom: 20pt;
        /* margin-left: auto; */
        /* margin-right: auto; */
      }

      #choose {
        margin-left: 40pt;
        /* width: 280px; */
      }

      @media (min-width: 1440px) {
        p.tagline {
          width: 1200px;
          padding-top: 7pt;
          padding-bottom: 7pt;
          margin-top: 10pt;
          margin-bottom: 20pt;
          margin-right: auto;
          margin-left: auto;
          text-align: center;
          font-family: "FreightSansProLight";
          font-size: 14pt;
          color: #ffffff;
          border-top-color: #ffffff;
          border-top-width: 1pt;
          border-top-style: solid;
          border-bottom-color: #ffffff;
          border-bottom-width: 1pt;
          border-bottom-style: solid;
        }

        .holder {
          width: 1230px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      }
    `}</style>
    <style jsx global>{`
      body {
        background-color: #959595;
      }
      @media (min-width: 1300px) {
        body {
          background-image: url("../img/landing/Bishop-peak_gray.jpg");
          background-repeat: no-repeat;
          background-size: 100%;
          background-origin: content-box;
        }
      }
      @media (min-width: 700px) {
        body {
          background-image: url("../img/landing/Bishop-peak_gray.jpg");
          background-repeat: no-repeat;
        }
      }
    `}</style>
    </div>
  );
};
