import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '19e840f2724e80bfa4c6c1ca122294dd',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Profile',
  domain: 'Comeat and Am7',
  author: 'Eta Onion',

  // open graph metadata (optional)
  description: 'Next.js Notion Site',
  
  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'chosmh5',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://img.notionusercontent.com/s3/prod-files-secure%2Fcab14d63-3cd3-4303-832e-dd5ec5b25cad%2Ff764b255-ae1e-4978-9644-bdbf5a89f1a6%2FNorthern_cardinal_Christopher_Moorman.jpeg/size/w=300?exp=1749958505&sig=b3-YGb9zlvqATVXHvwDheUm5NDKpEY4UxZXpM9APQAQ&id=1c9840f2-724e-80d2-a9ca-e3f4ce776c7e&table=block',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Profile',
      pageId: '19e840f2724e80bfa4c6c1ca122294dd',
    },
    {
      title: 'Profile',
      pageId: '19e840f2724e80bfa4c6c1ca122294dd',
      menuPage: true,
    },
  ],

  // -------- custom configs (2skydev) -------------

  // date-fns format string
  dateformat: 'yyyy년 MM월 dd일',

  // post page - hidden properties
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: true,
});
