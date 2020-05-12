const fs = require('fs');

const DIR = 'stolemoji/';
// function notBlocked(filename) {
//   return !EXCLUDE.includes(filename);
// }

let preamble = `
  # stolemoji
  Slackmojis never die. Only people die.
`;

fs.readdir(DIR, (err, files) => {
  files
    .filter((file) => !/(^|\/)\.[^/.]/g.test(file))
    .sort()
    .forEach((file) => {
      preamble += `![${file}](/${DIR}${file})\n`;
    });

  fs.writeFile('./README.md', preamble, (err) => {
    if (err) {
      return console.error(err);
    }

    console.log('The readme was saved!');
  });
});
