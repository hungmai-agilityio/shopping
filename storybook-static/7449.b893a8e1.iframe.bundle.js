"use strict";(self.webpackChunkshopping=self.webpackChunkshopping||[]).push([[7449],{"./src/ui/components/UserAction/Redirect/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),next_navigation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@8.3.4_esbuild@0.23.1_next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react_m4s5ywhned5xybludzac2cjone/node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/index.ts"),_ui_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/index.ts"),_stores__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stores/index.ts");const ButtonRedirect=({url,name,variant=_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.PRIMARY})=>{const router=(0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),{user}=(0,_stores__WEBPACK_IMPORTED_MODULE_4__.k)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:!user&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__.$n,{variant,onClick:()=>{router.push(url)},children:name})})},__WEBPACK_DEFAULT_EXPORT__=ButtonRedirect;ButtonRedirect.__docgenInfo={description:"",methods:[],displayName:"ButtonRedirect",props:{url:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"TYPE.PRIMARY | TYPE.SECOND | TYPE.THIRD",elements:[{name:"TYPE.PRIMARY"},{name:"TYPE.SECOND"},{name:"TYPE.THIRD"}]},description:"",defaultValue:{value:"TYPE.PRIMARY",computed:!0}}}}}}]);