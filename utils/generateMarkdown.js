// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badge = '';
      if(license === "MIT") {
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
      } else if(license === "GPL") {
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
      }else if(license === "Apache") {
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
      }else if(license === "Boost") {
        badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'
      }else {
        badge = ''
      }
      return badge;
                
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseLink = '';
        if(license === "MIT"){
            licenseLink = ''
        }else if( license ==="GPL") {
            licenseLink = '(https://www.gnu.org/licenses/gpl-3.0)'
        }else if( license ==="Apache") {
            licenseLink = '(https://opensource.org/licenses/Apache-2.0)'
        }else if( license === "Boost") {
            licenseLink = '(https://www.boost.org/LICENSE_1_0.txt)'
        }else {
            licenseLink =''
        }
        return licenseLink;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title}
 
 ##Description
 ${data.description}

##Table of Contents

-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contribution](#contribution)
-[Testing](#tests)
-[Questions]

##Installation

;
}

//module.exports = generateMarkdown;
