const fs = require('fs');
const request = require('request');

const req = request.get(
  {
    url: 'https://api.figma.com/v1/images/DoS7E7LzdboGbdMAN9tDu1Xf',
    headers: {
      'X-Figma-Token': '15587-d15f8f57-cd23-4df2-940b-bedeb9cc1263'
    },
    qs: {
      ids: '1:1067',
      format: 'svg',
      svg_include_id: true
    }
  }
, function(error, response, body) {
  body = JSON.parse(body);
  if (body.err !== null) return;
  request.get({
    url: body.images['1:1067']
  }, function(error, response, body) {
    console.log(body)
  })
})
