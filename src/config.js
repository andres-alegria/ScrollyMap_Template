const { VITE_MAPBOX_ACCESS_TOKEN } = import.meta.env;

// This config.js is a working demo covering every feature of the template:
// every camera mode, the track-animation engine (with an SVG marker), and
// every stage type. Replace the content below with your own story — the
// schema (chapters, legend, onChapterEnter/Exit, stages) stays the same.
export default {
  style: 'mapbox://styles/mongabay/cmktmslps004z01se8n68atf5',

  accessToken: VITE_MAPBOX_ACCESS_TOKEN,

  theme: 'mongabay',

  intro: {
    title: 'ScrollyMap Template',
    subtitle: 'A demo covering every feature — replace this with your own story.',
    date: 'July 2026',

    social: [
      {
        name: 'X',
        src: 'x.svg',
        href: 'https://x.com/mongabay',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/mongabay/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://news.mongabay.com',
    },
  ],
  alignment: 'left',
  footer: 'Built with the ScrollyMap template.',

  // Chapter camera behavior
  //
  // Per chapter you can set:
  //   mapAnimation: 'flyTo' | 'easeTo' | 'jumpTo'
  //
  // The camera method is applied to the chapter.location object.
  // If omitted, it defaults to 'flyTo'.
  //
  // Track animation note:
  // If you use onChapterEnter -> { callback: 'trackAnimation.start', options: { camera: ... } }
  // and camera is NOT 'chapter', the chapter system will *not* move the camera (to avoid conflicts).

  chapters: [
    {
      id: 'PlainText01',
      type: 'stage',
      stage: 'PlainText',
      html: `
        <h2>Placeholder heading</h2>
        <p>
          <strong>Placeholder bold</strong> — placeholder regular text, demonstrating the
          <em>PlainText</em> stage. This is where you'd introduce the story before the
          first map chapter.
        </p>
      `,
    },

    {
      id: 'PlainText02',
      type: 'stage',
      stage: 'PlainText',
      html: `
        <h2>PlainText with an image</h2>
        <p>
          The same <em>PlainText</em> stage also accepts an optional <code>image</code>
          prop — useful for a photo or figure alongside a block of story text.
        </p>
      `,
      image: { src: '/demo-placeholder.svg', alt: 'Demo placeholder image' },
    },

    {
      id: 'FlyTo',
      alignment: 'left',
      title: 'flyTo',
      description: 'Cinematic, animated camera movement — the default mode.',
      location: { center: [-10, 20], zoom: 2.5, pitch: 0, bearing: 0 },
      mapAnimation: 'flyTo',
      legend: [
        { title: 'Example area', color: '#e66d6d', border: '#f6bcb3' },
        { title: 'Example reserve', color: '#006a54' },
      ],
    },

    {
      id: 'EaseTo',
      alignment: 'right',
      title: 'easeTo',
      description: 'A smoother, less dramatic camera move than flyTo.',
      location: { center: [20, -10], zoom: 3, pitch: 30, bearing: 20 },
      mapAnimation: 'easeTo',
    },

    {
      id: 'JumpTo',
      alignment: 'left',
      title: 'jumpTo',
      description: 'An instant camera cut, with no animation at all.',
      location: { center: [40, 10], zoom: 3.5, pitch: 0, bearing: 0 },
      mapAnimation: 'jumpTo',
    },

    {
      id: 'TrackAnimation',
      alignment: 'right',
      title: 'Track animation',
      description:
        'The optional track-animation engine, drawing a line progressively with a rotating SVG marker at its head.',
      location: { center: [-15, 1], zoom: 3.5, pitch: 0, bearing: 0 },
      onChapterEnter: [
        {
          callback: 'trackAnimation.start',
          options: {
            trackFile: '/data/tracks/demo-track.geojson',
            speed: 2,
            camera: 'chapter',
            line: { color: '#03755e', width: 3, opacity: 0.9 },
            marker: {
              type: 'svg',
              svg: '/demo-marker.svg',
              size: 1.5,
              color: '#03755e',
              borderColor: '#ffffff',
              borderWidth: 2,
            },
          },
        },
      ],
      onChapterExit: [{ callback: 'trackAnimation.resume' }],
    },

    {
      id: 'GalleryHorizontalScroll01',
      type: 'stage',
      stage: 'GalleryHorizontalScroll',
    },

    {
      id: 'GalleryFilter01',
      type: 'stage',
      stage: 'GalleryFilter',
      heading: 'Filterable gallery — click a category to filter',
    },

    {
      id: 'PlainImage01',
      type: 'stage',
      stage: 'PlainImage',
      src: '/demo-placeholder.svg',
      alt: 'Demo placeholder image',
      height: '80vh',
      caption: 'A caption rendered below a full-width image.',
    },
  ],
};
