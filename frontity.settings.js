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
          topBannerPage: '/hello-world',
          menu: [
            [ 'Home', '/' ],
            [ 'About me', '/about/' ],
            // [ 'Blog', '/secret/' ],
          ],
          codeMenu: [
            [ "My Jam", '/jam/' ],
            // [ "What I'm watching", '/secret/' ],
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
          // "homepage":"/home",
          "api": "https://public-api.wordpress.com/wp/v2/sites/vis1na.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
