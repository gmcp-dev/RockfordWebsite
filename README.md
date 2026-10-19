# Rockford Website

Official website of **Rockford**, an alternative multiplayer server for **GTA V**.
Built by [gmcp-dev](https://github.com/gmcp-dev) on request of [Rockford.is](https://rockford.is).

## Description

Rockford is an alternative multiplayer server for GTA V where players can enjoy a unique
and personalized experience, with an active community and regular events. This repository
contains the source code of the project's website: landing page, presentation of the
server's activities and jobs, exclusive vehicles, and useful guides for the community.

## Features

- Home page introducing the server.
- "About the game" section with a presentation video.
- Carousel of activities and jobs (trucker, robber, gunsmith, mechanic, police,
  farmer, garbage collector) with required level.
- Exclusive vehicles gallery with lightbox.
- Useful community guides (voice chat, roleplay, gameplay).
- Fixed navbar with animations and back-to-top button.
- Responsive design based on Bootstrap 5.

## Technologies

- HTML5 / CSS3
- [Bootstrap 5](https://getbootstrap.com/)
- [jQuery 3.7](https://jquery.com/)
- [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/)
- [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/)
- [WOW.js](https://wowjs.uk/) + [Animate.css](https://animate.style/)
- [Font Awesome](https://fontawesome.com/)

## Project structure

```
RockfordWebsite/
├── index.html
├── favicon.ico
├── assets/
│   ├── css/        # Styles (Bootstrap, Owl, Lightbox, FontAwesome, style.css)
│   ├── js/         # Scripts (jQuery, Owl, Lightbox, WOW, index.js)
│   ├── fonts/      # Fonts (Font Awesome)
│   └── images/     # Images and graphic assets
├── package.json
└── node_modules/   # Dependencies (ignored by git)
```

## Local usage

No build step is required. Just open `index.html` in a browser or serve the folder
with any static server:

```bash
# Example with Python
python -m http.server 8000

# Example with Node (npx)
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Development

The dependencies listed in `package.json` can be installed with:

```bash
npm install
```

> Note: third-party files (Bootstrap, jQuery, etc.) are already included in `assets/`,
> so installation is optional for local development.

## Contributing

Contributions are welcome. Check [CONTRIBUTING.md](CONTRIBUTING.md) to learn about the
workflow, code conventions, and how to submit a pull request.

## License

This project is distributed under the [MIT](LICENSE) license.

## Disclaimer

Grand Theft Auto and Grand Theft Auto V are registered trademarks of Take-Two
Interactive Software. This project is not affiliated with or endorsed by Take-Two
Interactive Software. All user-generated content belongs to its respective owners.