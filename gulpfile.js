const gulp = require("gulp");
const glob = require("glob");
const Svgo = require("svgo");
const fs = require("fs");

/*
  todo: this should be more in the 'gulp' way,
  instead of just using it to watch files and
  run node stuff
*/

const svgoOpts = {
  plugins: [
    {
      inlineStyles: false
    }, {
      convertStyleToAttrs: false
    }, {
      removeViewBox: false
    }, {
      removeDimensions: false
    }
  ]
};

const getStyles = (name) => new Promise(resolve => {
  const path = `./styles/${name}.css`;

  if (!fs.existsSync(path)) resolve(null);
  fs.readFile(path, "utf8", (err, data) => {
    resolve(data);
  })
});

const getSvg = (name) => new Promise(resolve => {
  const path = `./svg/${name}.svg`;

  if (!fs.existsSync(path)) resolve(null);
  fs.readFile(path, "utf8", (err, data) => {
    resolve(data);
  })
});

const inlineStyles = (done) => {
  let allStyles = "";

  glob("svg/*.svg", (err, files) => {
    files.map(filePath => {
      const fileName = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
      Promise.all([getStyles(fileName), getSvg(fileName)]).then(([styles, svg]) => {
        const concat = styles ? svg.replace(/\<\/svg\>/, `<style>${styles}</style></svg>`) : svg;
        new Svgo(svgoOpts).optimize(concat).then(result => {
          fs.writeFileSync(`./dist/${fileName}.svg`, result.data)
        })
      });
    });
  });

  return done();
};

gulp.task("watch", () => gulp.watch("./styles/*.css", inlineStyles));
gulp.task("inlineStyles", inlineStyles);
