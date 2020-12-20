const settings = {
  "name": "averytan-webapp",
  "state": {
    "frontity": {
      "url": "https://averytan.com",
      "title": "The Beginnings of a personal website",
      "description": "Avery Tan, a personal/professional blog"
    }
  },
  "packages": [
    {
      name: 'igmoweb-theme',
      state: {
        theme: {
          topBannerPage: '/hola',
          menu: [
            [ 'Home', '/' ],
            [ 'About us', '/abouting-us-anout/' ],
            [ 'Blog', '/most-glorious-leader-having-powers-beyond-imagination/' ],
          ],
          codeMenu: [
            [ 'What is Code', '/category/what-is-code' ],
            [ "Please don't code", '/category/please-dont-code/' ],
          ],
          featured: {
            showOnList: true,
            showOnPost: false,
          },
        },
      },
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/vis1na.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
