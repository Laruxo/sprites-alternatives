# Alternative icons solutions benchmark
For this test I used icons from [IcoMoon](https://github.com/Keyamoon/IcoMoon-Free)


## Sprites
Uses compass
#### Links
* [grunt-contrib-compass](https://www.npmjs.com/package/grunt-contrib-compass)
  * Not scalable icon (looks blurry when scaled zoom or scale)
* [grunt-pngmin](https://www.npmjs.com/package/grunt-pngmin)
  * This does nothing. Compass already compresses file.

## SVG

#### Links
* Simple img tags
  * A lot of requests
  * Easy sizing
  * Comes with predefined colors
* [grunt-svg-sprite](https://www.npmjs.com/package/grunt-svg-sprite)
  * Also look at [grunt-iconizr](https://www.npmjs.com/package/grunt-iconizr) for png fallback
  * CSS mode:
    * may be hard to scale icons (will require css zoom and a fallback to transform: scale())
  * Symbol mode:
    * Will require (SVG for Everybody)[https://github.com/jonathantneal/svg4everybody] for IE8-11
    * Markup somewhat strange. Also link to SVG file is needed in html.
    * Very easy to scale icons
    * Could be replaced with [grunt-svgstore](https://www.npmjs.com/package/grunt-svgstore)

## Icon font

#### Links
* [grunt-webfont](https://www.npmjs.com/package/grunt-webfont)
  * IE8+
  * Can only be colored 1 color