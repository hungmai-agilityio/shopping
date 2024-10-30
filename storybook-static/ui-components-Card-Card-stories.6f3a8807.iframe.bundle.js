(self.webpackChunkshopping=self.webpackChunkshopping||[]).push([[7056],{"./src/ui/components/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CommentCard:()=>CommentCard,ContactCard:()=>ContactCard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/ui/components/Card/index.tsx").A,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{photo:{description:"Image to render for the avatar",control:{type:"text"}},name:{description:"Name of the person",control:{type:"text"}},variant:{description:"Type of card - `comment` or `contact`",control:{type:"radio"}},role:{description:"Commentator's position (used only for `comment` variant)",control:{type:"text"}},comment:{description:"Comment content (used only for `comment` variant)",control:{type:"text"}},desc:{description:"Description text (used only for `contact` variant)",control:{type:"text"}},mail:{description:"Email of the contact (used only for `contact` variant)",control:{type:"text"}},phone:{description:"Phone number of the contact (used only for `contact` variant)",control:{type:"text"}},width:{description:"Avatar width (default: 32)",control:{type:"number"}},height:{description:"Avatar height (default: 32)",control:{type:"number"}}}},CommentCard={args:{photo:"https://i.ibb.co/f9kLWFd/comment-2.webp",name:"User",variant:_constants__WEBPACK_IMPORTED_MODULE_0__.ZE.COMMENT,role:"Client",comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},ContactCard={args:{photo:"/call.svg",name:"Jane Smith",variant:_constants__WEBPACK_IMPORTED_MODULE_0__.ZE.CONTACT,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",mail:"jane.smith@xyz.com",phone:"(021) 123456789"}},__namedExportsOrder=["CommentCard","ContactCard"];CommentCard.parameters={...CommentCard.parameters,docs:{...CommentCard.parameters?.docs,source:{originalSource:"{\n  args: {\n    photo: 'https://i.ibb.co/f9kLWFd/comment-2.webp',\n    name: 'User',\n    variant: TYPE.COMMENT,\n    role: 'Client',\n    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'\n  }\n}",...CommentCard.parameters?.docs?.source}}},ContactCard.parameters={...ContactCard.parameters,docs:{...ContactCard.parameters?.docs,source:{originalSource:"{\n  args: {\n    photo: '/call.svg',\n    name: 'Jane Smith',\n    variant: TYPE.CONTACT,\n    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',\n    mail: 'jane.smith@xyz.com',\n    phone: '(021) 123456789'\n  }\n}",...ContactCard.parameters?.docs?.source}}}},'./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Mada","arguments":[{"weight":["400","700"],"subsets":["latin"]}],"variableName":"mada"}':module=>{if(!document.getElementById("id-87a2b0")){const fontDeclarations="/* arabic */\n@font-face {\n  font-family: 'Mada';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/mada/v19/7Auwp_0qnzeSfTfGLQjUwkQ1OQ.woff2) format('woff2');\n  unicode-range: U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+102E0-102FB, U+10E60-10E7E, U+10EC2-10EC4, U+10EFC-10EFF, U+1EE00-1EE03, U+1EE05-1EE1F, U+1EE21-1EE22, U+1EE24, U+1EE27, U+1EE29-1EE32, U+1EE34-1EE37, U+1EE39, U+1EE3B, U+1EE42, U+1EE47, U+1EE49, U+1EE4B, U+1EE4D-1EE4F, U+1EE51-1EE52, U+1EE54, U+1EE57, U+1EE59, U+1EE5B, U+1EE5D, U+1EE5F, U+1EE61-1EE62, U+1EE64, U+1EE67-1EE6A, U+1EE6C-1EE72, U+1EE74-1EE77, U+1EE79-1EE7C, U+1EE7E, U+1EE80-1EE89, U+1EE8B-1EE9B, U+1EEA1-1EEA3, U+1EEA5-1EEA9, U+1EEAB-1EEBB, U+1EEF0-1EEF1;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Mada';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/mada/v19/7Auwp_0qnzeSfTzGLQjUwkQ1OQ.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Mada';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/mada/v19/7Auwp_0qnzeSfTLGLQjUwkQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* arabic */\n@font-face {\n  font-family: 'Mada';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/mada/v19/7Auwp_0qnzeSfTfGLQjUwkQ1OQ.woff2) format('woff2');\n  unicode-range: U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+102E0-102FB, U+10E60-10E7E, U+10EC2-10EC4, U+10EFC-10EFF, U+1EE00-1EE03, U+1EE05-1EE1F, U+1EE21-1EE22, U+1EE24, U+1EE27, U+1EE29-1EE32, U+1EE34-1EE37, U+1EE39, U+1EE3B, U+1EE42, U+1EE47, U+1EE49, U+1EE4B, U+1EE4D-1EE4F, U+1EE51-1EE52, U+1EE54, U+1EE57, U+1EE59, U+1EE5B, U+1EE5D, U+1EE5F, U+1EE61-1EE62, U+1EE64, U+1EE67-1EE6A, U+1EE6C-1EE72, U+1EE74-1EE77, U+1EE79-1EE7C, U+1EE7E, U+1EE80-1EE89, U+1EE8B-1EE9B, U+1EEA1-1EEA3, U+1EEA5-1EEA9, U+1EEAB-1EEBB, U+1EEF0-1EEF1;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Mada';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/mada/v19/7Auwp_0qnzeSfTzGLQjUwkQ1OQ.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Mada';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/mada/v19/7Auwp_0qnzeSfTLGLQjUwkQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",style=document.createElement("style");style.setAttribute("id","font-face-87a2b0"),style.innerHTML=fontDeclarations,document.head.appendChild(style);const classNamesCSS="\n    .mada-normal {\n      font-family: Mada;\n      font-style: normal;\n      \n    }\n\n    \n  ",classNamesStyle=document.createElement("style");classNamesStyle.setAttribute("id","classnames-87a2b0"),classNamesStyle.innerHTML=classNamesCSS,document.head.appendChild(classNamesStyle)}module.exports={className:"mada-normal",style:{fontFamily:"Mada",fontStyle:"normal"}}},'./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Poppins","arguments":[{"subsets":["latin"],"weight":["400","700"]}],"variableName":"popping"}':module=>{if(!document.getElementById("id-6e7cce")){const fontDeclarations="/* latin-ext */\n@font-face {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",style=document.createElement("style");style.setAttribute("id","font-face-6e7cce"),style.innerHTML=fontDeclarations,document.head.appendChild(style);const classNamesCSS="\n    .poppins-normal {\n      font-family: Poppins;\n      font-style: normal;\n      \n    }\n\n    \n  ",classNamesStyle=document.createElement("style");classNamesStyle.setAttribute("id","classnames-6e7cce"),classNamesStyle.innerHTML=classNamesCSS,document.head.appendChild(classNamesStyle)}module.exports={className:"poppins-normal",style:{fontFamily:"Poppins",fontStyle:"normal"}}},'./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Roboto","arguments":[{"subsets":["latin"],"weight":["400","700"]}],"variableName":"roboto"}':module=>{if(!document.getElementById("id-ab28ff")){const fontDeclarations="/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",style=document.createElement("style");style.setAttribute("id","font-face-ab28ff"),style.innerHTML=fontDeclarations,document.head.appendChild(style);const classNamesCSS="\n    .roboto-normal {\n      font-family: Roboto;\n      font-style: normal;\n      \n    }\n\n    \n  ",classNamesStyle=document.createElement("style");classNamesStyle.setAttribute("id","classnames-ab28ff"),classNamesStyle.innerHTML=classNamesCSS,document.head.appendChild(classNamesStyle)}module.exports={className:"roboto-normal",style:{fontFamily:"Roboto",fontStyle:"normal"}}},'./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Signika","arguments":[{"subsets":["latin"],"weight":["400","700"]}],"variableName":"signika"}':module=>{if(!document.getElementById("id-28f8a8")){const fontDeclarations="/* vietnamese */\n@font-face {\n  font-family: 'Signika';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/signika/v25/vEFO2_JTCgwQ5ejvMV0Ox_Kg1UwJ0tKfX6bOjM7-f7e0Mls.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Signika';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/signika/v25/vEFO2_JTCgwQ5ejvMV0Ox_Kg1UwJ0tKfX6bPjM7-f7e0Mls.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Signika';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/signika/v25/vEFO2_JTCgwQ5ejvMV0Ox_Kg1UwJ0tKfX6bBjM7-f7e0.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Signika';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/signika/v25/vEFO2_JTCgwQ5ejvMV0Ox_Kg1UwJ0tKfX6bOjM7-f7e0Mls.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Signika';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/signika/v25/vEFO2_JTCgwQ5ejvMV0Ox_Kg1UwJ0tKfX6bPjM7-f7e0Mls.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Signika';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/signika/v25/vEFO2_JTCgwQ5ejvMV0Ox_Kg1UwJ0tKfX6bBjM7-f7e0.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",style=document.createElement("style");style.setAttribute("id","font-face-28f8a8"),style.innerHTML=fontDeclarations,document.head.appendChild(style);const classNamesCSS="\n    .signika-normal {\n      font-family: Signika;\n      font-style: normal;\n      \n    }\n\n    \n  ",classNamesStyle=document.createElement("style");classNamesStyle.setAttribute("id","classnames-28f8a8"),classNamesStyle.innerHTML=classNamesCSS,document.head.appendChild(classNamesStyle)}module.exports={className:"signika-normal",style:{fontFamily:"Signika",fontStyle:"normal"}}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{JA:()=>CELL,hv:()=>END_POINT,SG:()=>FONT_SIZE,zN:()=>FONT_WEIGHT,_:()=>KEY,XH:()=>MESSAGE_VALID,SK:()=>SIZE,XQ:()=>STATUS,Dk:()=>TAG,ZE:()=>TYPE,zO:()=>itemsCategories,rh:()=>itemsContact,qs:()=>itemsHome,fw:()=>itemsShop,Y$:()=>target_path_src_constants_fonts_ts_import_Mada_arguments_weight_400_700_subsets_latin_variableName_mada_default(),Cn:()=>navItems,Q9:()=>target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_700_variableName_popping_default(),kX:()=>target_path_src_constants_fonts_ts_import_Roboto_arguments_subsets_latin_weight_400_700_variableName_roboto_default(),jM:()=>target_path_src_constants_fonts_ts_import_Signika_arguments_subsets_latin_weight_400_700_variableName_signika_default()});var TYPE,SIZE,TAG,FONT_SIZE,FONT_WEIGHT,CELL,CURRENT,GENDER,KEY,STATUS,target_path_src_constants_fonts_ts_import_Mada_arguments_weight_400_700_subsets_latin_variableName_mada_=__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Mada","arguments":[{"weight":["400","700"],"subsets":["latin"]}],"variableName":"mada"}'),target_path_src_constants_fonts_ts_import_Mada_arguments_weight_400_700_subsets_latin_variableName_mada_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Mada_arguments_weight_400_700_subsets_latin_variableName_mada_),target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_700_variableName_popping_=__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Poppins","arguments":[{"subsets":["latin"],"weight":["400","700"]}],"variableName":"popping"}'),target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_700_variableName_popping_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_700_variableName_popping_),target_path_src_constants_fonts_ts_import_Roboto_arguments_subsets_latin_weight_400_700_variableName_roboto_=__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Roboto","arguments":[{"subsets":["latin"],"weight":["400","700"]}],"variableName":"roboto"}'),target_path_src_constants_fonts_ts_import_Roboto_arguments_subsets_latin_weight_400_700_variableName_roboto_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Roboto_arguments_subsets_latin_weight_400_700_variableName_roboto_),target_path_src_constants_fonts_ts_import_Signika_arguments_subsets_latin_weight_400_700_variableName_signika_=__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Signika","arguments":[{"subsets":["latin"],"weight":["400","700"]}],"variableName":"signika"}'),target_path_src_constants_fonts_ts_import_Signika_arguments_subsets_latin_weight_400_700_variableName_signika_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Signika_arguments_subsets_latin_weight_400_700_variableName_signika_);!function(TYPE){TYPE.PRIMARY="primary",TYPE.SECOND="second",TYPE.THIRD="third",TYPE.FILE="file",TYPE.TEXT="text",TYPE.PASSWORD="password",TYPE.EMAIL="email",TYPE.COMMENT="comment",TYPE.CONTACT="contact"}(TYPE||(TYPE={})),function(SIZE){SIZE.SMALL="small",SIZE.MEDIUM="medium",SIZE.LARGE="large"}(SIZE||(SIZE={})),function(TAG){TAG.H1="h1",TAG.H2="h2",TAG.H3="h3",TAG.H4="h4",TAG.H5="h5",TAG.H6="h6",TAG.P="p",TAG.SPAN="span"}(TAG||(TAG={})),function(FONT_SIZE){FONT_SIZE.LARGE="text-heading",FONT_SIZE.MEDIUM="text-4xl",FONT_SIZE.SMALL="text-2xl",FONT_SIZE.X_SMALL="lg:text-lg text-sm",FONT_SIZE.MIMI="text-sm"}(FONT_SIZE||(FONT_SIZE={})),function(FONT_WEIGHT){FONT_WEIGHT.THIN="thin",FONT_WEIGHT.LIGHT="light",FONT_WEIGHT.NORMAL="normal",FONT_WEIGHT.MEDIUM="medium",FONT_WEIGHT.SEMIBOLD="semibold",FONT_WEIGHT.BOLD="bold"}(FONT_WEIGHT||(FONT_WEIGHT={})),function(CELL){CELL.TH="th",CELL.TD="td"}(CELL||(CELL={})),function(CURRENT){CURRENT.USER="user",CURRENT.PROFILE="profile"}(CURRENT||(CURRENT={})),function(GENDER){GENDER.MALE="0",GENDER.FEMALE="1",GENDER.OTHER="2"}(GENDER||(GENDER={})),function(KEY){KEY.USER="currentUser"}(KEY||(KEY={})),function(STATUS){STATUS.SUCCESS="success",STATUS.ERROR="error",STATUS.WARNING="warning"}(STATUS||(STATUS={}));const END_POINT={HOME:"/",SHOP:"/shop",ABOUT_US:"/about",CONTACT:"/contact",SIGN_IN:"/signIn",SIGN_UP:"/signUp",WISHLIST:"/wishlist",PRODUCTS:"/products",CATEGORY:"/category",COMMENT:"/comment",USERS:"/users",PROFILE:"/profiles",CART:"/cart",CHECKOUT:"/checkout"},MESSAGE_VALID={INPUT_REQUIRED:"{field} is required",EMAIL_ERROR:"Invalid email format",EMAIL_EXIST:"Email already exists",PASSWORD_ERROR:"Password must be at least 6 characters",CONFIRM_ERROR:"Passwords do not match",UPLOAD:"Only file .png, .jpg, .jpeg, .svg allowed"},navItems=[{name:"Home",url:END_POINT.HOME},{name:"About Us",url:END_POINT.ABOUT_US},{name:"Contact",url:END_POINT.CONTACT}],itemsHome=[{name:"Product",url:END_POINT.HOME},{name:"Categories",url:END_POINT.HOME},{name:"Login",url:END_POINT.SIGN_IN}],itemsShop=[{name:"T-Shirt",url:END_POINT.HOME},{name:"Jacket",url:END_POINT.HOME},{name:"Shirt",url:END_POINT.HOME},{name:"Jeans",url:END_POINT.HOME}],itemsCategories=[{name:"Men",url:END_POINT.HOME},{name:"Children",url:END_POINT.HOME},{name:"Woman",url:END_POINT.HOME}],itemsContact=[{name:"mangcoding@gmail.com",url:""}]},"./src/ui/components/Card/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@8.3.4_esbuild@0.23.1_next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react_m4s5ywhned5xybludzac2cjone/node_modules/@storybook/nextjs/dist/images/next-image.mjs"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/index.ts"),_ui_components_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/common/index.ts");const Card=({photo,name,variant,role,comment,desc,mail,width=32,height=32,phone})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:`${_constants__WEBPACK_IMPORTED_MODULE_2__.Q9.className} bg-white shadow-card p-10 w-card-sm h-card-sm overflow-hidden relative`,children:[variant===_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.COMMENT&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"absolute top-0 right-0 w-0 h-0 border-t-md border-l-md border-t-gray-100 border-l-transparent"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.A)("flex gap-4",{block:variant!==_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.COMMENT}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__.A,{src:photo,alt:name,width,height,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.A)("rounded-full w-12 h-12",{"p-1 bg-blue-700":variant===_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.CONTACT}),style:{objectFit:"cover"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.A)("font-bold text-lg capitalize",{"mt-5":variant===_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.CONTACT}),children:name}),variant===_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.COMMENT&&role&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-gray-500 capitalize mt-1 text-sm",children:role})]})]}),variant===_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.COMMENT&&comment&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__.A,{src:"/star.svg",alt:"star",width:152,height:24,className:"mt-5",style:{objectFit:"cover"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_components_common__WEBPACK_IMPORTED_MODULE_3__.o5,{fontWeight:_constants__WEBPACK_IMPORTED_MODULE_2__.zN.THIN,size:_constants__WEBPACK_IMPORTED_MODULE_2__.SG.MIMI,className:"mt-5",children:['" ',comment,' "']})]}),variant===_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.CONTACT&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[desc&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common__WEBPACK_IMPORTED_MODULE_3__.o5,{fontWeight:_constants__WEBPACK_IMPORTED_MODULE_2__.zN.THIN,size:_constants__WEBPACK_IMPORTED_MODULE_2__.SG.MIMI,color:"text-gray-400",className:"mt-4",children:desc}),mail&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common__WEBPACK_IMPORTED_MODULE_3__.o5,{fontWeight:_constants__WEBPACK_IMPORTED_MODULE_2__.zN.THIN,size:_constants__WEBPACK_IMPORTED_MODULE_2__.SG.MIMI,color:"text-gray-400",className:"mt-4",children:mail}),phone&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common__WEBPACK_IMPORTED_MODULE_3__.o5,{fontWeight:_constants__WEBPACK_IMPORTED_MODULE_2__.zN.THIN,size:_constants__WEBPACK_IMPORTED_MODULE_2__.SG.MIMI,color:"text-gray-400",className:"mt-4",children:phone})]})]}),__WEBPACK_DEFAULT_EXPORT__=Card;Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{photo:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"union",raw:"TYPE.COMMENT | TYPE.CONTACT",elements:[{name:"TYPE.COMMENT"},{name:"TYPE.CONTACT"}]},description:""},role:{required:!1,tsType:{name:"string"},description:""},comment:{required:!1,tsType:{name:"string"},description:""},desc:{required:!1,tsType:{name:"string"},description:""},mail:{required:!1,tsType:{name:"string"},description:""},phone:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}}}}}}]);