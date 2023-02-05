const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  // console.log(request.url);
  let mediaFile = '';
  let contentType = '';

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/party.mp4':
      mediaFile = '../client/party.mp4';
      contentType = 'video/mp4';
      mediaHandler.getParty(request, response, mediaFile, contentType);
      break;
    case '/page2':
      htmlHandler.getIndex2(request, response);
      break;
    case '/bling.mp3':
      mediaFile = '../client/bling.mp3';
      contentType = 'audio/mpeg';
      mediaHandler.getParty(request, response, mediaFile, contentType);
      break;
    case '/page3':
      htmlHandler.getIndex3(request, response);
      break;
    case '/bird.mp4':
      mediaFile = '../client/bird.mp4';
      contentType = 'video/mp4';
      mediaHandler.getParty(request, response, mediaFile, contentType);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  // console.log(`Listening on 127.0.0.1:${port}`);
});
