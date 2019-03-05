const express = require('express');
const router = express.Router(); // eslint-disable-line

// slo specific routes
router.get('/', function(req, res) {
  const links = [
    {
      name: 'Cru Press Green',
      href: 'http://www.crupressgreen.com',
      desc: 'Get resources for Bible studies, discipleship, new believers, and more.',
    },
    {
      name: 'National Cru Resources',
      href: 'http://www.cru.org/training-and-growth/index.htm',
      desc: 'Information for training and growth from the home office in Orlanda, FL.',
    },
    {
      name: 'MeetTheProf',
      href: 'http://meettheprof.com/university/california-polytechnic-state-university-san-luis-obispo/',
      desc: 'Find local professors who are following Christ.',
    },
    {
      name: 'Sermons',
      href: 'sermons',
      desc: 'Listen to recordings of past meetings.',
    },
    {
      name: 'Live Stream',
      href: 'https://www.youtube.com/user/slocrusade/videos',
      desc: 'Watch the weekly meeting live.',
    },
  ];

  const pdfPath = '/resources/pdf/';

  const downloads = [
    {
      type: 'Articles',
      resources: [
        {
          name: 'Annotated Send Model',
          href: pdfPath + 'Annotated_Send_Model.pdf',
        },
        {
          name: 'Biblical Career Principals',
          href: pdfPath + 'Biblical_Career_Principals_By_Navigator.pdf',
        },
        {
          name: 'Discerning God\'s Will',
          href: pdfPath + 'Discerning_Gods_Will_by_Youth_Specialties.pdf',
        },
        {
          name: 'Discipleship "How To"',
          href: pdfPath + 'Discipleship_Howto.pdf',
        },
        {
          name: 'Keith Davy\'s Guidance Letter',
          href: pdfPath + 'Keith_Davy_Guidance_Letter.pdf',
        },
        {
          name: 'Live Life on a Mission: The 5 Things',
          href: pdfPath + '5_Things_College.pdf',
        },
        {
          name: 'Practical Steps to Guidance',
          href: pdfPath + 'Practical_Steps_to_Guidance.pdf',
        },
      ],
    },
    {
      type: 'Studies',
      resources: [
        {
          name: 'Discerning God\'s Will',
          href: pdfPath + 'Discerning_Gods_Will_Bible_Study.pdf',
        },
        {
          name: 'Prayer',
          href: pdfPath + 'Bible_Study_On_Prayer.pdf',
        },
      ],
    },
  ];

  const guides = [
    {
      type: 'Prayer',
      resources: [
        {
          name: 'Lectio Divina',
          href: pdfPath + 'Lectio_Divina.pdf',
        },
        {
          name: 'Prayer of Examen',
          href: pdfPath + 'Prayer_of_Examen.pdf',
        },
        {
          name: '6 Vital Questions about Prayer',
          href: 'http://www.cru.org/training-and-growth/devotional-life/7-steps-to-fasting/07-six-vital-questions-prayer.htm',
        },
        {
          name: 'The Purpose of Prayer',
          href: 'http://www.cru.org/training-and-growth/classics/10-basic-steps/4-prayer/index.htm',
        },
      ],
    },
    {
      type: 'Fasting',
      resources: [
        {
          name: 'Abiding Through Fasting',
          href: pdfPath + 'Abiding_Through_Fasting.pdf',
        },
        {
          name: 'Prayer and Fasting',
          href: pdfPath + 'Prayer_and_Fasting.pdf',
        },
        {
          name: 'Your Guide to Fasting and Prayer',
          href: 'http://www.cru.org/training-and-growth/devotional-life/7-steps-to-fasting/01-personal-guide.htm',
        },
        {
          name: '7 Basic Steps to Fasting and Prayer',
          href: 'http://www.cru.org/training-and-growth/devotional-life/personal-guide-to-fasting/01-message-from-bill-bright.htm',
        },
        {
          name: 'What is the Purpose of Fasting?',
          href: 'http://www.desiringgod.org/interviews/what-is-the-purpose-of-fasting',
        },
        {
          name: 'Hunger for God',
          href: 'http://www.desiringgod.org/seminars/hunger-for-god-session-3',
        },
        {
          name: 'Book: Celebration of Discipline by Richard J Foster',
          href: 'http://www.amazon.com/Celebration-Discipline-Path-Spiritual-Growth/dp/0060628391',
        },
      ],
    },
  ];
  res.render('slo/resources', {
    page: 'resources',
    links: links,
    downloads: downloads,
    guides: guides,
  });
});

module.exports = router;
