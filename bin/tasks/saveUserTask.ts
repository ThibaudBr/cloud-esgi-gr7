var fs = require('fs');

fs.writeFile('file.txt', 'I am cool!',  function() {

  console.log("File created!");
});
