module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-bemo');

  grunt.initConfig({
    bemo: {
      scaffold: {
        sassRoot:   "source/assets/stylesheets",
        sassExt:    "sass",
      },
      webfonts: {
        src:        "source/assets/fonts/svg",
        fontDest:   "source/assets/fonts",
        sassDest:   "source/assets/stylesheets/variables/_icon-glyphs.scss"
      },
      sprites: {
        src:        "source/assets/images/sprites",
        imageDest:  "source/assets/images/sprites-{{density}}.png",
        sassDest:   "source/assets/stylesheets/variables/_sprites.scss"
      }
    }
  });
};

