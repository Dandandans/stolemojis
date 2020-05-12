const fs = require('fs');

const DIR = 'stolemoji/';

let preamble = `
  # stolemoji
  Slackmojis never die. Only people die.
  
`;

fs.readdir(DIR, (err, files) => {
  if (err) {
    console.log(err);
  }
  files
    .filter((file) => !/(^|\/)\.[^/.]/g.test(file))
    .sort()
    .forEach((file) => {
      preamble += `![${file}](/${DIR}${file})\n`;
    });

  fs.writeFile('./README.md', preamble, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('Let me tell you, champion, you did it. ');
  });
});
