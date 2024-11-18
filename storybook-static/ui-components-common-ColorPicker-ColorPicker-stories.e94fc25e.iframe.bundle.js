"use strict";(self.webpackChunkt_shirt_web=self.webpackChunkt_shirt_web||[]).push([[6392],{"./src/ui/components/common/ColorPicker/ColorPicker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),_mocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/mocks/index.tsx"),_ui_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_ui_components__WEBPACK_IMPORTED_MODULE_3__.sk,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{colors:{description:"List colors"},labelColor:{description:"Set color for label",control:"text"},selectedColor:{description:"Color that is currently selected",control:"text"},onClick:{description:"Callback when color changes",action:"colorChanged"}}},Default={render:()=>{const[selectedColor,setSelectedColor]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_mocks__WEBPACK_IMPORTED_MODULE_2__.H8[0].colors[0]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__.sk,{colors:_mocks__WEBPACK_IMPORTED_MODULE_2__.H8[0].colors,selectedColor,onClick:color=>{setSelectedColor(color)}})}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [selectedColor, setSelectedColor] = useState<string>(mockProducts[0].colors[0]);\n    const handleColorChange = (color: string) => {\n      setSelectedColor(color);\n    };\n    return <ColorPicker colors={mockProducts[0].colors} selectedColor={selectedColor} onClick={handleColorChange} />;\n  }\n}",...Default.parameters?.docs?.source}}}},"./src/mocks/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DF:()=>mockCart,H8:()=>mockProducts,UL:()=>mockWishlist,WF:()=>mockBreadCrumb,Yf:()=>mockImage,r2:()=>mockTitleCategories,wG:()=>mockProduct,zA:()=>mockCategories});const mockBreadCrumb=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Phones",href:""}],mockWishlist=[{id:"1",productId:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6",userId:"4jv05-d467953tu87-3707814dtg-236656k",color:"Red"},{id:"2",productId:"i7g6i9i2-8f89-6h15-9i0e-6h2f7j3316i6",userId:"4jv05-d467941tu87-3707814dtg-236656k",color:"Blue"},{id:"3",productId:"i7g6i9i2-8f89-6h15-i0e-6j2f7j33gppi6",userId:"87535-d468243tu87-3707814dtg-236656k",color:"Green"}],mockCart=[{id:"4jv05-d467958243tu87-37682100544",userId:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j33f9646",productId:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6",color:"White",quantity:2,note:"Sample note"},{id:"4jv05-d467958243tu87-37666100544",userId:"i7g6i9i2-8f89-6h15-9i0e-1343f9646",productId:"u3k8h9f1-9g22-3h67-2g13-5k6g9k45g4t3",color:"Blue",quantity:1,note:""}],mockImage=["https://i.ibb.co/MRTgRYj/shirt-1.webp","https://i.ibb.co/h1pRWGY/jacket-5-2.webp","https://i.ibb.co/3d7b9SB/jean-2.webp"],mockCategories=[{id:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j37211",title:"t-shirt",image:"https://i.ibb.co/vBk4PRS/t-shirt-7.webp"},{id:"29g6i9i2-8f89-6h15-9i0e-6j2f7266337211",title:"jacket",image:"https://i.ibb.co/SKPcmwg/jacket-6.webp"},{id:"i7g6i9i2-8f89-6h15-9idrf3329-1j37211",title:"shirt",image:"https://i.ibb.co/zNbMXDs/shirt-3-1.webp"},{id:"i7g6i9i2-8f89-123jf-6j2f7j37211",title:"jeans",image:"https://i.ibb.co/52YmKP4/jean-3-1.webp"}],mockTitleCategories=["t-shirt","jacket","shirt","jeans"],mockProducts=[{id:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6",name:"Basic T-Shirt",price:15,description:"A comfortable and stylish basic t-shirt.",category:"t-shirts",colors:["White","Blue","Green"],sizes:["S","M","L"],image:"https://i.ibb.co/njkCQHq/t-shirt-3.webp",imageDetail:["https://i.ibb.co/njkCQHq/t-shirt-3.webp","https://i.ibb.co/njkCQHq/t-shirt-3.webp","https://i.ibb.co/njkCQHq/t-shirt-3.webp"],rating:"10k",sell:"Best quality",stoct:1710},{id:"u3k8h9f1-9g22-3h67-2g13-5k6g9k45g4t3",name:"Sporty T-Shirt",price:25,description:"Perfect for your workout sessions.",category:"t-shirts",colors:["Black","Gray","white","Maroon"],sizes:["M","L","XL"],image:"https://i.ibb.co/WtgcmWR/t-shirt-2.webp",imageDetail:["https://i.ibb.co/WtgcmWR/t-shirt-2.webp","https://i.ibb.co/WtgcmWR/t-shirt-2.webp","https://i.ibb.co/WtgcmWR/t-shirt-2.webp"],rating:"1k",sell:"Best quality",stoct:1118},{id:"y4l7i8o1-2j33-4k56-8p92-7m9b8j45h7u8",name:"Casual T-Shirt",price:20,description:"Stay casual and comfortable.",category:"t-shirts",colors:["White","Yellow","Pink"],sizes:["XS","S","M","L"],image:"https://i.ibb.co/J3GnxxJ/t-shirt-4.webp",imageDetail:["https://i.ibb.co/J3GnxxJ/t-shirt-4.webp","https://i.ibb.co/J3GnxxJ/t-shirt-4.webp","https://i.ibb.co/J3GnxxJ/t-shirt-4.webp"],rating:"2k",sell:"Best quality",stoct:1710},{id:"o9b5l2e3-5t78-2v45-7h92-4c8h7d99a3u1",name:"Graphic T-Shirt",price:24,description:"Unique graphic design for a standout look.",category:"t-shirts",colors:["Blue","Purple"],sizes:["S","M","L","XL"],image:"https://i.ibb.co/fvhz0L9/t-shirt-1.webp",imageDetail:["https://i.ibb.co/fvhz0L9/t-shirt-1.webp","https://i.ibb.co/fvhz0L9/t-shirt-1.webp"],rating:"9k",sell:"Best quality",stoct:1710}],mockProduct={id:"o9b5l2e3-5t78-2v45-7h92-4c8h7d99a3u1",name:"Graphic T-Shirt",price:24,description:"Unique graphic design for a standout look.",category:"t-shirts",colors:["Blue","Purple"],sizes:["S","M","L","XL"],image:"https://i.ibb.co/fvhz0L9/t-shirt-1.webp",imageDetail:["https://i.ibb.co/fvhz0L9/t-shirt-1.webp","https://i.ibb.co/fvhz0L9/t-shirt-1.webp"],rating:"9k",sell:"Best quality",stoct:1710}}}]);