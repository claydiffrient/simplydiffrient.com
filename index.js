const http2 = require("http2");
const fs = require("fs");
const path = require("path");
const mime = require("mime-types");

const {
  HTTP2_HEADER_PATH,
  HTTP2_HEADER_METHOD,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_INTERNAL_SERVER_ERROR
} = http2.constants;

// /**
//  * Static HTTP Server
//  *
//  * Create a static file server instance to serve files
//  * and folder in the './public' folder
//  */

// // modules
// var static = require("node-static"),
//   port = 8080,
//   http = require("http");

// // config
// var file = new static.Server("./public", {
//   cache: 31536000,
//   gzip: true
// });

// // serve
// http
//   .createServer(function(request, response) {
//     request
//       .addListener("end", function() {
//         file.serve(request, response);
//       })
//       .resume();
//   })
//   .listen(port);
