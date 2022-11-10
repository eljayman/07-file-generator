function renderFile(
  name,
  description,
  installation,
  usage,
  contribution,
  test
) {
  return `
# ${name}

## Description
${description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## How to Contribute
${contribution}

## Tests
${test}

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  `;
}
module.exports = { renderFile };
