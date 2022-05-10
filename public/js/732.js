"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[732,862,802],{1862:(n,i,e)=>{e.r(i),e.d(i,{default:()=>l});const t={components:{Link:e(6454).rU},props:{items:{type:Array,require:!0,default:[]},themeColor:{type:Boolean,require:!1,default:!0}}};const l=(0,e(1900).Z)(t,(function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("div",[e("v-list",n._l(n.items,(function(i,t){return e("v-list-item",{key:t},[e("v-list-item-icon",[e("v-icon",{domProps:{textContent:n._s(i.icon)}})],1),n._v(" "),e("v-list-item-content",[e("Link",{staticClass:"text-gray-900",attrs:{href:i.link,as:"button",method:"Log Out"!==i.title?"get":"delete"},domProps:{innerHTML:n._s(i.title)}})],1)],1)})),1)],1)}),[],!1,null,null,null).exports},3802:(n,i,e)=>{e.r(i),e.d(i,{default:()=>l});const t={components:{Link:e(6454).rU},props:{items:{type:Array,require:!0}},data:function(){return{selected:0,admins:[["Management","mdi-account-multiple-outline"],["Settings","mdi-cog-outline"]],cruds:[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete"]]}}};const l=(0,e(1900).Z)(t,(function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("div",{staticClass:"overflow-hidden"},n._l(n.items,(function(i,t){return e("v-list",{key:t,staticClass:"overflow-hidden  ",attrs:{dense:"",nav:""}},[e("v-subheader",[n._v(n._s(i.header))]),n._v(" "),n._l(i.child,(function(i,t){return e("v-list-group",{key:t,attrs:{dark:"","prepend-icon":i.icon,value:!1,"append-icon":i.child.length?"mdi-chevron-down":null},scopedSlots:n._u([{key:"activator",fn:function(){return[e("v-list-item-content",[i.link?e("v-list-item-subtitle",[e("Link",{attrs:{href:i.link,as:"button","preserve-scroll":""}},[n._v(n._s(i.name))])],1):e("v-list-item-subtitle",{domProps:{textContent:n._s(i.name)}})],1)]},proxy:!0}],null,!0)},[n._v(" "),n._l(i.child,(function(i){return e("v-list-item",{key:i.name,attrs:{dense:""}},[e("v-list-item-icon",[e("v-icon",[n._v("\n                        "+n._s(i.icon)+"\n                    ")])],1),n._v(" "),e("v-list-item-content",[i.link?e("v-list-item-subtitle",[e("Link",{attrs:{href:i.link,as:"button","preserve-scroll":""}},[n._v(n._s(i.name))])],1):e("v-list-item-subtitle",{domProps:{textContent:n._s(i.name)}})],1)],1)}))],2)}))],2)})),1)}),[],!1,null,null,null).exports},1732:(n,i,e)=>{e.r(i),e.d(i,{default:()=>r});var t=e(6454),l=e(1862),a=e(3802);const o={components:{Link:t.rU,RightMenu:l.default,SideNavItems:a.default},metaInfo:{title:"Unisys",titleTemplate:"%s | EMB - Region 1 - Unisys",link:[{rel:"icon",href:"http://r1.emb.gov.ph/wp-content/uploads/2022/03/DENR-LOGO.png"}],author:[{name:"Allan Daryl Ancheta",email:"allandaryl.dev@gmail.com",github:"allandaryldev"}]},data:function(){return{drawer:!0,items:[{title:"Profile",icon:"mdi-account",link:"/app/profile/"},{title:"Log Out",icon:"mdi-logout",link:"/app/"}],sidebarItems:[{header:"Firm Management",child:[{name:"Firm Management",link:null,icon:"mdi-view-dashboard",child:[{name:"Universe Dashboard",link:"",icon:"mdi-link"},{name:"Universe",link:"/app/universe/",icon:"mdi-link"},{name:"Universe Registration",link:"/app/universe_form/",icon:"mdi-link"},{name:"Activity Log",link:"",icon:"mdi-link"}]}]},{header:"Monitoring",child:[{name:"ECC/NCC",link:null,icon:"mdi-clipboard-file",child:[]},{name:"AIR",link:null,icon:"mdi-air-filter",child:[]},{name:"WATER",link:null,icon:"mdi-water",child:[]},{name:"AMBIENT",link:null,icon:"mdi-shield-alert",child:[]},{name:"SOLID WASTE",link:null,icon:"mdi-trash-can",child:[]},{name:"HAZARDOUS WASTE",link:null,icon:"mdi-biohazard",child:[]}]},{header:"LEGAL UNIT",child:[{name:"VIOLATIONS",link:null,icon:"mdi-ticket",child:[{name:"MASTER LIST",link:"",icon:"mdi-link"},{name:"ACTIVE",link:"",icon:"mdi-link"}]},{name:"TECHNICAL CONFIRENCE",link:null,icon:"mdi-account-group",child:[{name:"MASTER LIST",link:"",icon:"mdi-link"},{name:"ACTIVE",link:"",icon:"mdi-link"}]},{name:"COMPLAINTS",link:null,icon:"mdi-clipboard-file",child:[]}]},{header:"USER MANAGEMENT",child:[{name:"SYSTEM USERS",link:"/app/users/",icon:"mdi-account-group",child:[]},{name:"USER GROUPS",link:null,icon:"mdi-account-supervisor",child:[]},{name:"POSITION",link:"/app/position",icon:"mdi-account-supervisor",child:[]},{name:"DIVISION",link:"/app/division",icon:"mdi-account-supervisor",child:[]},{name:"UNIT SECTION",link:"/app/unit_section",icon:"mdi-account-supervisor",child:[]}]},{header:"INDUSTRY CONFIGURATION",child:[{name:"PROJECT TYPE",link:null,icon:"mdi-file-document-multiple",child:[{name:"PROJECT TYPE",link:"",icon:"mdi-link"},{name:"PROJECT SUB-TYPE",link:"",icon:"mdi-link"},{name:"PROJECT SPECIFIC TYPE",link:"",icon:"mdi-link"},{name:"PROJECT SPECIFIC SUB-TYPE",link:"",icon:"mdi-link"},{name:"DETAILED DESCRIPTION",link:"",icon:"mdi-link"}]},{name:"2009 PSIC CODES",link:null,icon:"mdi-file-document-multiple",child:[{name:"PSIC GROUP",link:"",icon:"mdi-link"},{name:"PSIC CLASS",link:"",icon:"mdi-link"},{name:"PSIC SUB CLASS",link:"",icon:"mdi-link"}]}]},{header:"APP CONFIGURATION",child:[{name:"REFERENCE PLACES",link:null,icon:"mdi-map",child:[{name:"REGION ",link:"",icon:"mdi-link"},{name:"PROVINCE",link:"",icon:"mdi-link"},{name:"DISTRICT",link:"",icon:"mdi-link"},{name:"TOWN/CITY",link:"",icon:"mdi-link"},{name:"BARANGAY",link:"",icon:"mdi-link"}]}]}]}},computed:{isDark:function(){return this.$vuetify.theme.dark}}};const r=(0,e(1900).Z)(o,(function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("v-app",[e("v-navigation-drawer",{staticClass:"scrollbar-thin overflow-y-scroll",attrs:{app:"",clipped:""},model:{value:n.drawer,callback:function(i){n.drawer=i},expression:"drawer"}},[e("SideNavItems",{attrs:{items:n.sidebarItems}})],1),n._v(" "),e("v-app-bar",{attrs:{app:"","clipped-left":"",short:"",rounded:""}},[n.drawer?e("box-icon",{attrs:{name:"x",color:n.isDark?"white":"black"},on:{click:function(i){n.drawer=!n.drawer}}}):e("v-app-bar-nav-icon",{on:{click:function(i){i.stopPropagation(),n.drawer=!n.drawer}}}),n._v(" "),e("v-spacer"),n._v(" "),e("v-menu",{attrs:{"offset-x":"",left:"","z-index":"50",origin:"center center",transition:"scale-transition"},scopedSlots:n._u([{key:"activator",fn:function(i){var t=i.on,l=i.attrs;return[e("img",n._g(n._b({staticClass:"max-h-12 object-cover",attrs:{src:"http://r1.emb.gov.ph/wp-content/uploads/2022/03/cropped-DENR-LOGO.png",alt:"DENR - EMB Region 1"}},"img",l,!1),t))]}}])},[n._v(" "),e("RightMenu",{attrs:{items:n.items,themeColor:n.isDark}})],1)],1),n._v(" "),e("v-main",{staticStyle:{"background-color":"#f4f5fa !important","overflow-y":"hidden"}},[e("v-container",{staticClass:"scrollbar-thin overflow-y-scroll",attrs:{fluid:""}},[n._t("default")],2)],1),n._v(" "),e("v-footer",{attrs:{app:"",rounded:""}},[e("v-switch",{attrs:{inset:"",label:"Vuetify Theme Dark","persistent-hint":""},model:{value:n.$vuetify.theme.dark,callback:function(i){n.$set(n.$vuetify.theme,"dark",i)},expression:"$vuetify.theme.dark"}}),n._v(" "),e("v-spacer"),n._v("\n        © DENR - EMB REGION 1 - UNISYS\n    ")],1)],1)}),[],!1,null,null,null).exports},1900:(n,i,e)=>{function t(n,i,e,t,l,a,o,r){var s,c="function"==typeof n?n.options:n;if(i&&(c.render=i,c.staticRenderFns=e,c._compiled=!0),t&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),l&&l.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(o)},c._ssrRegister=s):l&&(s=r?function(){l.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:l),s)if(c.functional){c._injectStyles=s;var d=c.render;c.render=function(n,i){return s.call(i),d(n,i)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,s):[s]}return{exports:n,options:c}}e.d(i,{Z:()=>t})}}]);