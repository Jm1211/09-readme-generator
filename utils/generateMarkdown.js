
// TODO: Create a function to generate markdown for README
function generateMarkdown(
    title,
    description,
    installation,
    usage,
    credits,
    license,
    contribution,
    tests,
    github,
    email
) {
 return `# ${title}

 
 ## Description
 ${description}

## Table of Contents

-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)
-[Contribution](#contribution)
-[Testing](#tests)
-[Questions](#questions)

## Installation

### You must install the following:
 ${installation}

## Usage

${usage}

## Credits

${credits}

## License

 [![license](https://img.shields.io/badge/license-${license}-blue.svg)](https://shileds.io/)


## Contribution

${contribution}

## Testing

 ${tests}

## Questions

### If you have any questions please contact me at:
### Github: https://github.com/${github}
### or
### Email: ${email}
`;
}

module.exports = generateMarkdown;
