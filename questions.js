
module.exports = [
    {
        name: 'Title',
        message: 'Name your code here.'
    },
    {
        type: 'list',
        message: 'What license type will this app utilize?',
        name: 'License',
        choices: [
            {name: "Apache",
            value:[
                '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                'The Apache License is a permissive free software license written by the Apache Software Foundation. It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties.'
            ]}, 
             {name: "MIT",
            value:[
                '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
                'The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility. The MIT license is compatible with many copyleft licenses, such as the GNU General Public License (GPL); MIT licensed software can be re-licensed as GPL software, and integrated with other GPL software, but not the other way around. The MIT license also permits reuse within proprietary software, provided that either all copies of the licensed software include a copy of the MIT License terms and the copyright notice, or the software is re-licensed to remove this requirement. MIT-licensed software can also be re-licensed as proprietary software, which distinguishes it from copyleft software licenses.'
            ]}, 
            {name: "LGPLv3",
            value:[
                '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                'The GNU Lesser General Public License (LGPL) is a free-software license published by the Free Software Foundation (FSF). The license allows developers and companies to use and integrate a software component released under the LGPL into their own (even proprietary) software without being required by the terms of a strong copyleft license to release the source code of their own components. However, any developer who modifies an LGPL-covered component is required to make their modified version available under the same LGPL license. For proprietary software, code under the LGPL is usually used in the form of a shared library, so that there is a clear separation between the proprietary and LGPL components.'
            ]}, 
            {name: "GPLv3",
            value:['[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
            'The GNU General Public License (GNU GPL or simply GPL) is a series of widely used free software licenses that guarantee end users the freedom to run, study, share, and modify the software.[7] The licenses were originally written by Richard Stallman, former head of the Free Software Foundation (FSF), for the GNU Project, and grant the recipients of a computer program the rights of the Free Software Definition.[8] The GPL series are all copyleft licenses, which means that any derivative work must be distributed under the same or equivalent license terms. '
             ]},
        ],},
    {
        name: 'Description',
        message: 'Describe your app or code here.'
    },
    {
        name: 'Installation',
        message: 'Enter Installation requirements.'
    },
    {
        name: 'Usage',
        message: 'How does is work?',
    },
    {
        name: 'Test',
        message: 'How to test',
    },
    {
        name: 'Contributing',
        message: 'Who helped made dis?',
    },
    {
        name: 'Github',
        message: 'Enter GitHub username?',
    },
    {
        name: 'Email',
        message: 'Enter email?',
    },
    
    
    
]