# Sprites Alternatives
Most of the usable sprites alternative (created by grunt).

For this test I used icons from [IcoMoon](https://github.com/Keyamoon/IcoMoon-Free)

## Setup
1. For this test to work you have to install some dependencies:
* grunt-cli (`npm i -g grunt-cli`)
* [Compass](http://compass-style.org/install/) - optional
  * Can be skipped if you don't want to see sprites

2. Run `npm i`
3. Run `grunt` or `grunt no-sprites`
4. Go to public directory and start php server

       cd public/
       php -S localhost:8080

Then you can reach the page by going to [localhost:8080](http://localhost:8080)

## Used techniques

#### Sprites
* [grunt-contrib-compass](https://www.npmjs.com/package/grunt-contrib-compass)
  * Not scalable icons
* [grunt-pngmin](https://www.npmjs.com/package/grunt-pngmin)
  * Is used in project but does nothing. Compass already compresses file. Should be removed.

#### SVG
* Simple img tags
  * A lot of requests.
  * Easy sizing.
  * Comes with predefined colors.
* [grunt-svg-sprite](https://www.npmjs.com/package/grunt-svg-sprite)
  * Also look at [grunt-iconizr](https://www.npmjs.com/package/grunt-iconizr) (add png fallback).
  * CSS mode:
    * may be hard to scale icons (will require css zoom and a fallback to transform: scale).
  * Symbol mode:
    * Will require (SVG for Everybody)[https://github.com/jonathantneal/svg4everybody] for IE9-11.
    * Markup somewhat strange. Also link to SVG file is needed in html.
    * Very easy to scale icons.
    * Could be replaced with [grunt-svgstore](https://www.npmjs.com/package/grunt-svgstore).

#### Font
* [grunt-webfont](https://www.npmjs.com/package/grunt-webfont)
  * IE8+
  * Can only be colored 1 color.