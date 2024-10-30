"use strict";(self.webpackChunkshopping=self.webpackChunkshopping||[]).push([[3166],{"./src/ui/components/common/Hero/Hero.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Second:()=>Second,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),_mocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/mocks/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/ui/components/common/Hero/index.tsx").A,tags:["autodocs"],argTypes:{children:{description:"Content to render inside Hero"},isBreadCrumb:{description:'Show isBreadCrumb with data "items'},isHeroSecond:{description:"Render another UI of Hero",control:{type:"boolean"}},items:{description:"Breadcrumb data, including name and path",control:{type:"object"}},styles:{description:"Custom css"}}},Default={args:{items:_mocks__WEBPACK_IMPORTED_MODULE_1__.WF,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-white text-xl font-bold",children:"Children"}),isBreadCrumb:!0}},Second={args:{items:_mocks__WEBPACK_IMPORTED_MODULE_1__.WF,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-white text-xl font-bold",children:"Children"}),isBreadCrumb:!0,isHeroSecond:!0}},__namedExportsOrder=["Default","Second"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    items: mockBreadCrumb,\n    children: <p className="text-white text-xl font-bold">Children</p>,\n    isBreadCrumb: true\n  }\n}',...Default.parameters?.docs?.source}}},Second.parameters={...Second.parameters,docs:{...Second.parameters?.docs,source:{originalSource:'{\n  args: {\n    items: mockBreadCrumb,\n    children: <p className="text-white text-xl font-bold">Children</p>,\n    isBreadCrumb: true,\n    isHeroSecond: true\n  }\n}',...Second.parameters?.docs?.source}}}},"./src/mocks/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DF:()=>mockCart,H8:()=>mockProducts,UL:()=>mockWishlist,WF:()=>mockBreadCrumb,Yf:()=>mockImage,r2:()=>mockTitleCategories,zA:()=>mockCategories});const mockBreadCrumb=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Phones",href:""}],mockWishlist=[{id:"1",productId:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6",userId:"4jv05-d467953tu87-3707814dtg-236656k",color:"Red"},{id:"2",productId:"i7g6i9i2-8f89-6h15-9i0e-6h2f7j3316i6",userId:"4jv05-d467941tu87-3707814dtg-236656k",color:"Blue"},{id:"3",productId:"i7g6i9i2-8f89-6h15-i0e-6j2f7j33gppi6",userId:"87535-d468243tu87-3707814dtg-236656k",color:"Green"}],mockCart=[{id:"4jv05-d467958243tu87-37682100544",userId:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j33f9646",productId:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6",color:"White",quantity:2,note:"Sample note"},{id:"4jv05-d467958243tu87-37666100544",userId:"i7g6i9i2-8f89-6h15-9i0e-1343f9646",productId:"u3k8h9f1-9g22-3h67-2g13-5k6g9k45g4t3",color:"Blue",quantity:1,note:""}],mockImage=["https://i.ibb.co/MRTgRYj/shirt-1.webp","https://i.ibb.co/h1pRWGY/jacket-5-2.webp","https://i.ibb.co/3d7b9SB/jean-2.webp"],mockCategories=[{id:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j37211",title:"t-shirt",image:"https://i.ibb.co/vBk4PRS/t-shirt-7.webp"},{id:"29g6i9i2-8f89-6h15-9i0e-6j2f7266337211",title:"jacket",image:"https://i.ibb.co/SKPcmwg/jacket-6.webp"},{id:"i7g6i9i2-8f89-6h15-9idrf3329-1j37211",title:"shirt",image:"https://i.ibb.co/zNbMXDs/shirt-3-1.webp"},{id:"i7g6i9i2-8f89-123jf-6j2f7j37211",title:"jeans",image:"https://i.ibb.co/52YmKP4/jean-3-1.webp"}],mockTitleCategories=["t-shirt","jacket","shirt","jeans"],mockProducts=[{id:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6",name:"Basic T-Shirt",price:15,description:"A comfortable and stylish basic t-shirt.",category:"t-shirts",colors:["White","Blue","Green"],sizes:["S","M","L"],image:"https://i.ibb.co/njkCQHq/t-shirt-3.webp",imageDetail:["https://i.ibb.co/njkCQHq/t-shirt-3.webp","https://i.ibb.co/njkCQHq/t-shirt-3.webp","https://i.ibb.co/njkCQHq/t-shirt-3.webp"],rating:"10k",sell:"Best quality",stoct:1710},{id:"u3k8h9f1-9g22-3h67-2g13-5k6g9k45g4t3",name:"Sporty T-Shirt",price:25,description:"Perfect for your workout sessions.",category:"t-shirts",colors:["Black","Gray","white","Maroon"],sizes:["M","L","XL"],image:"https://i.ibb.co/WtgcmWR/t-shirt-2.webp",imageDetail:["https://i.ibb.co/WtgcmWR/t-shirt-2.webp","https://i.ibb.co/WtgcmWR/t-shirt-2.webp","https://i.ibb.co/WtgcmWR/t-shirt-2.webp"],rating:"1k",sell:"Best quality",stoct:1118},{id:"y4l7i8o1-2j33-4k56-8p92-7m9b8j45h7u8",name:"Casual T-Shirt",price:20,description:"Stay casual and comfortable.",category:"t-shirts",colors:["White","Yellow","Pink"],sizes:["XS","S","M","L"],image:"https://i.ibb.co/J3GnxxJ/t-shirt-4.webp",imageDetail:["https://i.ibb.co/J3GnxxJ/t-shirt-4.webp","https://i.ibb.co/J3GnxxJ/t-shirt-4.webp","https://i.ibb.co/J3GnxxJ/t-shirt-4.webp"],rating:"2k",sell:"Best quality",stoct:1710},{id:"o9b5l2e3-5t78-2v45-7h92-4c8h7d99a3u1",name:"Graphic T-Shirt",price:24,description:"Unique graphic design for a standout look.",category:"t-shirts",colors:["Blue","Purple"],sizes:["S","M","L","XL"],image:"https://i.ibb.co/fvhz0L9/t-shirt-1.webp",imageDetail:["https://i.ibb.co/fvhz0L9/t-shirt-1.webp","https://i.ibb.co/fvhz0L9/t-shirt-1.webp"],rating:"9k",sell:"Best quality",stoct:1710}]},"./src/ui/components/common/BreadCrumb/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");const Breadcrumb=({items,styles,color="text-black",separator="/"})=>{const totalItems=items.length,displayedItems=totalItems>3?[items[0],{label:"...",href:"#"},items[totalItems-2],items[totalItems-1]]:items;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav",{"aria-label":"breadcrumb",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.$)("flex items-center space-x-2",color,styles),children:displayedItems.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"flex items-center",children:index!==displayedItems.length-1?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:item.href,className:"hover:underline",children:item.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.$)("mx-2",color),children:separator})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.$)("font-bold",color),children:item.label})},index)))})},__WEBPACK_DEFAULT_EXPORT__=Breadcrumb;Breadcrumb.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},styles:{required:!1,tsType:{name:"string"},description:""},separator:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'/'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text-black'",computed:!1}}}}},"./src/ui/components/common/Hero/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_ui_components_common_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/common/BreadCrumb/index.tsx");const Hero=({isHeroSecond=!1,isBreadCrumb,styles,children,items})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.$)("relative w-full h-full overflow-hidden py-10 px-28",styles),children:[isBreadCrumb&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__.A,{items,color:"text-white",styles:"relative container z-20 md:flex hidden"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"relative z-10",children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.$)("absolute inset-0 bg-gradient-primary ",{"top-0 left-0 right-0 bottom-0 -skew-y-6 origin-top-left max-h-hero":isHeroSecond})})]}),__WEBPACK_DEFAULT_EXPORT__=Hero;Hero.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{isHeroSecond:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isBreadCrumb:{required:!1,tsType:{name:"boolean"},description:""},styles:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},items:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""}}}},"./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{$:()=>clsx,A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx}}]);