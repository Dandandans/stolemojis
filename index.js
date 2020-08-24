const fs = require('fs');

const DIR = 'stolemoji/';

let preamble = `
  # stolemoji
  Stolemojis never die.
  
`;

fs.readdir(DIR, (err, files) => {
  if (err) {
    console.log(err);
  }
  files
    .filter((file) => !/(^|\/)\.[^/.]/g.test(file))
    .sort()
    .forEach((file) => {
      preamble += `<img src="stolemoji/${file}" height="128" width="128" title="${file}" alt="${file}" hspace="10" vspace="10"/>`;
    });

  fs.writeFile('./README.md', preamble, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('Let me tell you, champion, you did it.');
  });
});
