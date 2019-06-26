const fs = require('fs');
const request = require('request');
const fsExtra = require('fs-extra');

//remove this for oAuth before merging into master
const headers = {
  'X-Figma-Token': '15587-d15f8f57-cd23-4df2-940b-bedeb9cc1263'
};

const writeDir = './static_components';

const getDocument = () => new Promise(resolve => {
  request.get(
    {
      url: 'https://api.figma.com/v1/files/DoS7E7LzdboGbdMAN9tDu1Xf',
      headers
    }
  , function(error, response, body) {
    resolve(JSON.parse(body));
  })
});

const getSvgUrls = ids => new Promise(resolve => {
  request.get(
    {
      url: 'https://api.figma.com/v1/images/DoS7E7LzdboGbdMAN9tDu1Xf',
      headers,
      qs: {
        //ids expect a comma-seperated string
        ids: ids.join(","),
        format: 'svg',
        svg_include_id: true
      }
    }
  , function(error, response, body) {
    const {images} = JSON.parse(body);
    //image urls come back as a key:value hash
    const urls = Object.keys(images).map(key => {
      return images[key];
    });
    resolve(urls)
  })
});

const getSvg = url => new Promise(resolve => {
  request.get({url}, function(error, response, body) {
    resolve(body);
  });
});

getDocument().then(response => {
  const artboards = response
    .document
    .children
    .find(child => child.name == 'Exports')
    .children;

  const artboardIds = artboards
    .map(({id}) => id);

  getSvgUrls(artboardIds).then(urls => {
    Promise.all(
      urls.map(url => getSvg(url))
    ).then(svgs => {

      //delete everything in the write directory
      fsExtra.emptyDirSync(writeDir)

      svgs.map((svg, index) => {
        fs.writeFileSync(
          `${writeDir}/${artboards[index].name}.svg`,
          svg
        );
      })
    })
  });
});
