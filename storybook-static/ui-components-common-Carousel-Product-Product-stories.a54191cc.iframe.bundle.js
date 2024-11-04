"use strict";(self.webpackChunkshopping=self.webpackChunkshopping||[]).push([[3283],{"./src/ui/components/common/Carousel/Product/Product.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _mocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/mocks/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/ui/components/index.ts").kg,tags:["autodocs"],argTypes:{products:{description:"List image for slide show"},onOrder:{description:"Handle order product"}}},Default={args:{products:_mocks__WEBPACK_IMPORTED_MODULE_0__.H8,onOrder:()=>alert("Move to order product")}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    products: mockProducts,\n    onOrder: () => alert('Move to order product')\n  }\n}",...Default.parameters?.docs?.source}}}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JA:()=>CELL,hv:()=>END_POINT,SG:()=>FONT_SIZE,zN:()=>FONT_WEIGHT,_:()=>KEY,XH:()=>MESSAGE_VALID,Jj:()=>QUERY,SK:()=>SIZE,XQ:()=>STATUS,Dk:()=>TAG,ZE:()=>TYPE,C8:()=>buttonSizeClasses,xd:()=>buttonTypeClasses,gh:()=>cellSizeClasses,vr:()=>inputTypeClasses,zO:()=>itemsCategories,rh:()=>itemsContact,qs:()=>itemsHome,fw:()=>itemsShop,Y$:()=>target_path_src_constants_fonts_ts_import_Mada_arguments_weight_400_700_subsets_latin_variableName_mada_default(),Cn:()=>navItems,Q9:()=>target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_700_variableName_popping_default(),kX:()=>target_path_src_constants_fonts_ts_import_Roboto_arguments_subsets_latin_weight_400_700_variableName_roboto_default(),jM:()=>target_path_src_constants_fonts_ts_import_Signika_arguments_subsets_latin_weight_400_700_variableName_signika_default(),I2:()=>toastStyles});var TYPE,SIZE,TAG,FONT_SIZE,FONT_WEIGHT,CELL,CURRENT,GENDER,KEY,STATUS,target_path_src_constants_fonts_ts_import_Mada_arguments_weight_400_700_subsets_latin_variableName_mada_=__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Mada","arguments":[{"weight":["400","700"],"subsets":["latin"]}],"variableName":"mada"}'),target_path_src_constants_fonts_ts_import_Mada_arguments_weight_400_700_subsets_latin_variableName_mada_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Mada_arguments_weight_400_700_subsets_latin_variableName_mada_),target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_700_variableName_popping_=__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Poppins","arguments":[{"subsets":["latin"],"weight":["400","700"]}],"variableName":"popping"}'),target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_700_variableName_popping_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_700_variableName_popping_),target_path_src_constants_fonts_ts_import_Roboto_arguments_subsets_latin_weight_400_700_variableName_roboto_=__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Roboto","arguments":[{"subsets":["latin"],"weight":["400","700"]}],"variableName":"roboto"}'),target_path_src_constants_fonts_ts_import_Roboto_arguments_subsets_latin_weight_400_700_variableName_roboto_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Roboto_arguments_subsets_latin_weight_400_700_variableName_roboto_),target_path_src_constants_fonts_ts_import_Signika_arguments_subsets_latin_weight_400_700_variableName_signika_=__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Signika","arguments":[{"subsets":["latin"],"weight":["400","700"]}],"variableName":"signika"}'),target_path_src_constants_fonts_ts_import_Signika_arguments_subsets_latin_weight_400_700_variableName_signika_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Signika_arguments_subsets_latin_weight_400_700_variableName_signika_);!function(TYPE){TYPE.PRIMARY="primary",TYPE.SECOND="second",TYPE.THIRD="third",TYPE.FILE="file",TYPE.TEXT="text",TYPE.PASSWORD="password",TYPE.EMAIL="email",TYPE.COMMENT="comment",TYPE.CONTACT="contact"}(TYPE||(TYPE={})),function(SIZE){SIZE.SMALL="small",SIZE.MEDIUM="medium",SIZE.LARGE="large"}(SIZE||(SIZE={})),function(TAG){TAG.H1="h1",TAG.H2="h2",TAG.H3="h3",TAG.H4="h4",TAG.H5="h5",TAG.H6="h6",TAG.P="p",TAG.SPAN="span"}(TAG||(TAG={})),function(FONT_SIZE){FONT_SIZE.LARGE="text-heading",FONT_SIZE.MEDIUM="text-4xl",FONT_SIZE.SMALL="text-2xl",FONT_SIZE.X_SMALL="lg:text-lg text-sm",FONT_SIZE.MIMI="text-sm"}(FONT_SIZE||(FONT_SIZE={})),function(FONT_WEIGHT){FONT_WEIGHT.THIN="thin",FONT_WEIGHT.LIGHT="light",FONT_WEIGHT.NORMAL="normal",FONT_WEIGHT.MEDIUM="medium",FONT_WEIGHT.SEMIBOLD="semibold",FONT_WEIGHT.BOLD="bold"}(FONT_WEIGHT||(FONT_WEIGHT={})),function(CELL){CELL.TH="th",CELL.TD="td"}(CELL||(CELL={})),function(CURRENT){CURRENT.USER="user",CURRENT.PROFILE="profile"}(CURRENT||(CURRENT={})),function(GENDER){GENDER.MALE="0",GENDER.FEMALE="1",GENDER.OTHER="2"}(GENDER||(GENDER={})),function(KEY){KEY.USER="currentUser"}(KEY||(KEY={})),function(STATUS){STATUS.SUCCESS="success",STATUS.ERROR="error",STATUS.WARNING="warning"}(STATUS||(STATUS={}));const END_POINT={HOME:"/",ABOUT_US:"/about",CONTACT:"/contact",SIGN_IN:"/signIn",SIGN_UP:"/signUp",WISHLIST:"/wishlist",PRODUCTS:"/products",CATEGORY:"/category",COMMENT:"/comment",USERS:"/users",PROFILE:"/profiles",CART:"/cart",CHECKOUT:"/checkout"},QUERY={CART:"cart",USER:"users",WISHLIST:"wishlist",PRODUCTS:"products"},MESSAGE_VALID={INPUT_REQUIRED:"{field} is required",EMAIL_ERROR:"Invalid email format",EMAIL_EXIST:"Email already exists",PASSWORD_ERROR:"Password must be at least 6 characters",CONFIRM_ERROR:"Passwords do not match",UPLOAD:"Only file .png, .jpg, .jpeg, .svg allowed"},navItems=[{name:"Home",url:END_POINT.HOME},{name:"About Us",url:END_POINT.ABOUT_US},{name:"Contact",url:END_POINT.CONTACT}],itemsHome=[{name:"Product",url:END_POINT.HOME},{name:"Categories",url:END_POINT.HOME},{name:"Login",url:END_POINT.SIGN_IN}],itemsShop=[{name:"T-Shirt",url:END_POINT.HOME},{name:"Jacket",url:END_POINT.HOME},{name:"Shirt",url:END_POINT.HOME},{name:"Jeans",url:END_POINT.HOME}],itemsCategories=[{name:"Men",url:END_POINT.HOME},{name:"Children",url:END_POINT.HOME},{name:"Woman",url:END_POINT.HOME}],itemsContact=[{name:"mangcoding@gmail.com",url:""}],buttonSizeClasses={[SIZE.SMALL]:"w-12 h-12 text-xs",[SIZE.MEDIUM]:"md:text-lg md:w-btn-md w-28 text-xs",[SIZE.LARGE]:"w-full text-base"},buttonTypeClasses={[TYPE.PRIMARY]:"bg-gradient-primary text-white font-bold",[TYPE.SECOND]:"bg-white text-purple-500 font-bold",[TYPE.THIRD]:"w-10 p-2 bg-gray-200 rounded-full drop-shadow-lg text-lg focus:bg-second focus:text-white focus:font-bold"},inputTypeClasses={[TYPE.PRIMARY]:"focus:border focus:border-green-300 h-12",[TYPE.SECOND]:"border border-gray-400 h-12",[TYPE.THIRD]:"border border-gray-400 resize-none"},cellSizeClasses={[SIZE.SMALL]:"w-tb-sm",[SIZE.MEDIUM]:"w-tb-md",[SIZE.LARGE]:"w-tb-xl"},toastStyles={[STATUS.SUCCESS]:"bg-green-500",[STATUS.ERROR]:"bg-red-500",[STATUS.WARNING]:"bg-yellow-500"}},"./src/mocks/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DF:()=>mockCart,H8:()=>mockProducts,UL:()=>mockWishlist,WF:()=>mockBreadCrumb,Yf:()=>mockImage,r2:()=>mockTitleCategories,zA:()=>mockCategories});const mockBreadCrumb=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Phones",href:""}],mockWishlist=[{id:"1",productId:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6",userId:"4jv05-d467953tu87-3707814dtg-236656k",color:"Red"},{id:"2",productId:"i7g6i9i2-8f89-6h15-9i0e-6h2f7j3316i6",userId:"4jv05-d467941tu87-3707814dtg-236656k",color:"Blue"},{id:"3",productId:"i7g6i9i2-8f89-6h15-i0e-6j2f7j33gppi6",userId:"87535-d468243tu87-3707814dtg-236656k",color:"Green"}],mockCart=[{id:"4jv05-d467958243tu87-37682100544",userId:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j33f9646",productId:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6",color:"White",quantity:2,note:"Sample note"},{id:"4jv05-d467958243tu87-37666100544",userId:"i7g6i9i2-8f89-6h15-9i0e-1343f9646",productId:"u3k8h9f1-9g22-3h67-2g13-5k6g9k45g4t3",color:"Blue",quantity:1,note:""}],mockImage=["https://i.ibb.co/MRTgRYj/shirt-1.webp","https://i.ibb.co/h1pRWGY/jacket-5-2.webp","https://i.ibb.co/3d7b9SB/jean-2.webp"],mockCategories=[{id:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j37211",title:"t-shirt",image:"https://i.ibb.co/vBk4PRS/t-shirt-7.webp"},{id:"29g6i9i2-8f89-6h15-9i0e-6j2f7266337211",title:"jacket",image:"https://i.ibb.co/SKPcmwg/jacket-6.webp"},{id:"i7g6i9i2-8f89-6h15-9idrf3329-1j37211",title:"shirt",image:"https://i.ibb.co/zNbMXDs/shirt-3-1.webp"},{id:"i7g6i9i2-8f89-123jf-6j2f7j37211",title:"jeans",image:"https://i.ibb.co/52YmKP4/jean-3-1.webp"}],mockTitleCategories=["t-shirt","jacket","shirt","jeans"],mockProducts=[{id:"i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6",name:"Basic T-Shirt",price:15,description:"A comfortable and stylish basic t-shirt.",category:"t-shirts",colors:["White","Blue","Green"],sizes:["S","M","L"],image:"https://i.ibb.co/njkCQHq/t-shirt-3.webp",imageDetail:["https://i.ibb.co/njkCQHq/t-shirt-3.webp","https://i.ibb.co/njkCQHq/t-shirt-3.webp","https://i.ibb.co/njkCQHq/t-shirt-3.webp"],rating:"10k",sell:"Best quality",stoct:1710},{id:"u3k8h9f1-9g22-3h67-2g13-5k6g9k45g4t3",name:"Sporty T-Shirt",price:25,description:"Perfect for your workout sessions.",category:"t-shirts",colors:["Black","Gray","white","Maroon"],sizes:["M","L","XL"],image:"https://i.ibb.co/WtgcmWR/t-shirt-2.webp",imageDetail:["https://i.ibb.co/WtgcmWR/t-shirt-2.webp","https://i.ibb.co/WtgcmWR/t-shirt-2.webp","https://i.ibb.co/WtgcmWR/t-shirt-2.webp"],rating:"1k",sell:"Best quality",stoct:1118},{id:"y4l7i8o1-2j33-4k56-8p92-7m9b8j45h7u8",name:"Casual T-Shirt",price:20,description:"Stay casual and comfortable.",category:"t-shirts",colors:["White","Yellow","Pink"],sizes:["XS","S","M","L"],image:"https://i.ibb.co/J3GnxxJ/t-shirt-4.webp",imageDetail:["https://i.ibb.co/J3GnxxJ/t-shirt-4.webp","https://i.ibb.co/J3GnxxJ/t-shirt-4.webp","https://i.ibb.co/J3GnxxJ/t-shirt-4.webp"],rating:"2k",sell:"Best quality",stoct:1710},{id:"o9b5l2e3-5t78-2v45-7h92-4c8h7d99a3u1",name:"Graphic T-Shirt",price:24,description:"Unique graphic design for a standout look.",category:"t-shirts",colors:["Blue","Purple"],sizes:["S","M","L","XL"],image:"https://i.ibb.co/fvhz0L9/t-shirt-1.webp",imageDetail:["https://i.ibb.co/fvhz0L9/t-shirt-1.webp","https://i.ibb.co/fvhz0L9/t-shirt-1.webp"],rating:"9k",sell:"Best quality",stoct:1710}]}}]);