export let siteMetadata = {
  title: 'Ram Krishna 🌟',
  author: 'Ram Krishna',
  fullName: 'Ram Krishna Singh',
  headerTitle: "Ram's 0 & 1 🌟",
  footerTitle: "Ram's 0 & 1 🌟",
  description: "Ram's coding journey and his blogs",
  language: 'en-us',
  siteUrl: 'https://rkscodes.com',
  siteRepo: 'https://github.com/rkscodes/ram_portfolio',
  siteLogo: '/static/images/sitelogo.png',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/sitelogo.png',
  email: 'rkscodes@gmail.com',
  github: 'https://github.com/rkscodes',
  twitter: 'https://twitter.com/rkscodes',
  // facebook: 'https://facebook.com/hta218',
  // youtube: 'https://www.youtube.com/@hta218_',
  linkedin: 'https://www.linkedin.com/in/rkscodes',
  locale: 'en-US',
  analyticsURL: 'https://www.analytics.rkscodes.com',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '6eff844c-2bea-4431-9d9d-fad8ccfa0411', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'rkscodes',
    twitter: 'rkscodes',
    linkedin: 'rkscodes',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
