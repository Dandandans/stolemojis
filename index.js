const fs = require("fs").promises;
const path = require("path");

const DIR = "stolemoji/";
const README_PATH = "./README.md";

async function generateReadme() {
	let preamble = `
  # stolemoji
  Stolemojis never die.
  
`;

	try {
		let files = await fs.readdir(DIR);
		files = files.filter((file) => !/(^|\/)\.[^/.]/g.test(file)).sort();

		for (const file of files) {
			preamble += `<img src="${path.join(DIR, file)}" height="64" width="64" title="${file}" alt="${file}" hspace="10" loading="lazy" />`;
		}

		await fs.writeFile(README_PATH, preamble);
		console.log("Let me tell you, champion, you did it.");
	} catch (err) {
		console.error("You got boomed.", err);
	}
}

generateReadme();
