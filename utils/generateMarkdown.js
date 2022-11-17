// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    
        case "GPL v3":
           return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    
        case "Apache":
          return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    
        case "Boost":
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        default:
          return "";
      }
                
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title}
 
 ## Description
 ${data.description}

## Table of Contents

-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contribution](#contribution)
-[Testing](#tests)
-[Questions]

## Installation

### You must install the following:
### ${data.installation}

## Usage

###${data.usage}

## License

### ${renderLicenseBadge}


## Contribution

### ${data.contribution}

## Testing

### ${data.tests}

## Questions

### If you have any questions please contact me at:
### Github: https://github.com/${data.github}
### or
### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
