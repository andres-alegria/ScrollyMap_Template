const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmht5r4ew000l01s2axp92n6s',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,

  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Shifting Sands',
    subtitle:
      'Kerala’s 2016 ban on river sand mining was meant to save its waterways and lifelines. However, it had an unintended consequence.',
    date: 'November 11, 2025',
    social: [
      {
        name: 'X',
        src: 'x.svg',
        href: 'https://x.com/mongabayindia',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/mongabayindia/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://india.mongabay.com',
    },
  ],
  alignment: 'left',
  footer: 'Produced by Kartik Chandramouli | Cartography by Andrés Alegría | Copy edits by Divya Kilikar | Banner image by AP Photo',
 
  chapters: [
    
    // chapter 00
    {
      id: 'chapter 0',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "The construction industry is Kerala’s largest consumer of river sand. Rampant sand mining led to falling groundwater levels, disrupted stream flows, and weakened bridges. <b>In June 2015, the Kerala government banned sand mining</b> in 6 rivers and restricted it in 5 others.",
        location: {
        center: [75.126410, 12.462606],
        zoom: 11.2,
        pitch: 66,
        bearing: 63.2,
      },
      
       images: [
        {
          src: 'photo0.jpg',
          position: 'top',
          title: 'Chandragiri River',
        },
      ],
      mapAnimation: 'easeTo',
      onChapterEnter: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
            {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
        ],
    },


    // chapter 1
    {
      id: 'chapter 1',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "After the ban on river sand mining, miners turned to the hills of the Western Ghats, crushing quarried hard rock to produce manufactured sand, also known as <b>m-sand</b>. It is considered a sustainable alternative to natural sand.",
       legend: [
        {
          title: 'Western Ghats',
          border: '#c48399',
        },
        {
          title: 'Kerala state',
          fromLayer: 'kerala-solid',
        },
      ],
      location: {
        center: [75.75, 10.75],
        zoom: 6.25,
        pitch: 25,
        bearing: 0,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.8,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
          {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.8,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
        ],
    },


    // chapter 2
    {
      id: 'chapter 2',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "72 legal quarries lie within 10 km of 20 protected areas in the Western Ghats, one of the world’s most biodiverse regions. <b>Most expanded after the ban</b>.",
             legend: [
        {
          title: 'Legal sand quarries',
          fromLayer: 'Kerela_quarries',
        },
        {
          title: 'Protected Areas',
          fromLayer: 'Kerela_PAs',
        },
         ],
      sources: 'Ashok L, et al. (2025)',
      
 location: {
        center: [75.75, 10.25],
        zoom: 6.75,
        pitch: 25,
        bearing: 0,
      },
       images: [
        {
          src: 'photo2.jpg',
          position: 'top',
          title: 'Mountains of Western Ghats',
          author: '',
        },
           ],
        mapAnimation: 'easeTo',
      rotateAnimation: false,
      onChapterEnter: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
          {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
           {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    
    },


    // chapter 3a
    {
      id: 'chapter 3a',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "<b>Malabar Wildlife Sanctuary</b> has the highest number of quarries —15— within its 10 km buffer zone.",
             legend: [
        {
          title: 'Legal sand quarries',
          fromLayer: 'Kerela_quarries',
        },
           {
          title: 'Protected Areas',
          fromLayer: 'Kerela_PAs',
        },
         ],
         images: [
        {
          src: 'photo5.jpg',
          position: 'top',
          title: 'Malabar Trogon',
          author: '',
        },
               ],
        location: {
        center: [75.90, 11.60],
        zoom: 10.25,
        pitch: 70.0,
        bearing: 60,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs_Text',
          opacity: 1,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
      onChapterExit: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
           {
          layer: 'Kerela_PAs_Text',
          opacity: 1,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    
    },
    
    
   
     // chapter 3b
    {
      id: 'chapter 3b',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "Located at less than 3 km from the <b>Malabar Wildlife Sanctuary</b>, this quarry expanded from about 13.6 ha in 2016, to more than 19 ha in 2021, making it one of the largest legal sand quarries in Kerala.",
        location: {
        center: [75.816, 11.635],
        zoom: 13.55,
        pitch: 50,
        bearing: 35,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 1,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.2,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
      onChapterExit: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
           {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 1,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.2,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    
    },
  
     
     // chapter 3c
    {
      id: 'chapter 3c',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "A quarry in <b>2014</b> measuring 0.5 ha.<br/><br/>Source: Planet Labs PBC",

        location: {
        center: [75.862938, 11.50543],
        zoom: 15.8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'OneQuarries',
          opacity: 1,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 1,
        },
      ],
        onChapterExit: [
              {
          layer: 'OneQuarries',
          opacity: 1,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
           {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 1,
        },
      ],
    
    },
    
    
     // chapter 3d
    {
      id: 'chapter 3d',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "By <b>2021</b>, two separate quarries had emerged, together covering about 5 ha.<br/><br/>Source: Mapbox Satellite",
        location: {
        center: [75.862938, 11.50543],
        zoom: 15.8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 1,
        },
           {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 0,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 0,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 0,
        },
        {
          layer: 'kerala-solid',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    
    },
  
  
    // chapter 4
    {
      id: 'chapter 4',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "The <b>Silent Valley National Park</b>, home to the endangered lion-tailed macaque, has three quarries just 4 kilometres from its boundary.",
           legend: [
        {
          title: 'Legal sand quarries',
          fromLayer: 'Kerela_quarries',
        },
        {
          title: 'Protected Areas',
          fromLayer: 'Kerela_PAs',
        },
         ],
      location: {
        center: [76.4542, 11.1527],
        zoom: 10.25,
        pitch: 70.0,
        bearing: 60,
      },
       images: [
        {
          src: 'photo3a.jpg',
          position: 'top',
          title: 'Lion-tailed macaque',
          author: '',
        },
           ],
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
          {
          layer: 'Kerela_PAs_Text',
          opacity: 1,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
                  {
          layer: 'Kerela_PAs_Text',
          opacity: 1,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    
    },
   
      
    // chapter 5
    {
      id: 'chapter 5',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "Some protected areas, such as the <b>Aralam Wildlife Sanctuary</b>, have quarries 1 kilometre from their boundary. Blasting increases noise and dust pollution, posing risks to both wildlife and humans.",
      legend: [
        {
          title: 'Legal sand quarries',
          fromLayer: 'Kerela_quarries',
        },
        {
          title: 'Protected Areas',
          fromLayer: 'Kerela_PAs',
        },
         ],
      location: {
        center: [75.90, 12.01],
         zoom: 10.25,
        pitch: 70.0,
        bearing: 90,
      },
        images: [
        {
          src: 'photo4.jpg',
          position: 'top',
          title: 'Aralam Wildlife Sanctuary',
          author: '',
        },
           ],
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
                {
          layer: 'Kerela_PAs_Text',
          opacity: 1,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
                  {
          layer: 'Kerela_PAs_Text',
          opacity: 1,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    },
       
 
 // chapter 6
    {
      id: 'chapter 6',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "This story, based on the study by Ashok L, <i>et al.</i> (2025), doesn’t factor in illegal quarrying in the Western Ghats.",
     location: {
        center: [76.0, 10.25],
        zoom: 7.0,
        pitch: 5.0,
        bearing: 0,
      },
   images: [
        {
          src: 'Graph.jpg',
          position: 'top',
          title: 'Rise in quarrying',
          author: ' ',
        },
           ],      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
          {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
        onChapterExit: [
              {
          layer: 'OneQuarries',
          opacity: 0,
        },
        {
          layer: 'TwoQuarries',
          opacity: 0,
        },
           {
          layer: 'Kerela_PAs_Text',
          opacity: 0,
        },
         {
          layer: 'Kerela_quarries',
          opacity: 1,
        },
        {
          layer: 'Distance_lines',
          opacity: 0,
        },
        {
          layer: 'waterway',
          opacity: 0.2,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },
        {
          layer: 'Kerela_PAs',
          opacity: 0.75,
        },
        {
          layer: 'Western Ghats Line',
          opacity: 1,
        },
        {
          layer: 'Western Ghats Solid',
          opacity: 0,
        },
        {
          layer: 'kerala-line',
          opacity: 1,
        },
        {
          layer: 'kerala-solid',
          opacity: 0.25,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },
        {
          layer: 'Kerela_2014',
          opacity: 0,
        },
      ],
    },

   

  ],
};
