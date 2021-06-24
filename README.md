# Cru Central Coast website

## NOTE: This project is being archived since we have switched from a completely custom site to using a hosted site builder

This project contains the code for both crucentralcoast.com and slo.crucentralcoast.com

## Getting started with Dev

 - clone repository
 - navigate to the repository and run `npm install` (If you don't have npm installed you need to do that)
 - configure [localhost for subdomains](https://stackoverflow.com/questions/19016553/add-subdomain-to-localhost-url)
 - add the PORT to your environment
 - add the FIREBASE_CONFIG to your environment (if you don't have this reach out to a team lead or Kyle on slack)
 - run `npm run dev-start` or `npm run start`

## Tech

We currently use express.js for routing and handelbars for templating. We are using firebase for data storage and custom models for data loading. We would like to see the site move to using React.js and possibly Redux.
