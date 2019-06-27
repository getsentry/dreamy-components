const gulp = require("gulp");
const glob = require("glob");
const concat = require('gulp-concat');
const Svgo = require("svgo");
const fs = require("fs");

/*
  todo: this should be more in the 'gulp' way,
  instead of just using it to watch files and
  run node stuff
*/

const inlineStyles = (done) => {
  glob("svg/*.svg", (err, files) => {
    files.map(f => {
      const cssFilePath = f.replace(/\.svg$/, ".css").replace(/^svg\//, "styles/");
      if (!fs.existsSync(cssFilePath)) return;
      const cssFile = fs.readFileSync(cssFilePath, "utf8");
      const svgFile = fs.readFileSync(f, "utf8");
      const concat = svgFile.replace(/\<\/svg\>/, `<style>${cssFile}</style></svg>`)
      new Svgo({plugins: [{inlineStyles: false}, {convertStyleToAttrs: false}, {removeViewBox: false}, {removeDimensions: false}]}).optimize(concat).then(result => {
        fs.writeFileSync(`./svg/${f.substring(f.lastIndexOf('/')+1)}`, result.data)
      })
    });
  })
  return done();
};

gulp.task("watch", () => gulp.watch("./styles/*.css", inlineStyles));
gulp.task("inlineStyles", inlineStyles);
