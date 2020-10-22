webpackJsonp([42],{1002:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(2),d=n(i),u=o(174),m=n(u),_=o(175),p=o(35),f=o(80),C=o(1567),b=n(C),h=o(1177),E=n(h),g=o(1321),O=n(g),A=o(48),T=n(A),R=o(176),j=n(R),x=o(91),v=n(x),y=o(185),D=723812738,L=[{id:1,name:"All contacts",icon:"zmdi-menu"},{id:2,name:"Frequently contacted",icon:"zmdi-time-restore"},{id:3,name:"Starred contacts",icon:"zmdi-star"}],S=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.ContactSideBar=function(t){return d.default.createElement("div",{className:"module-side"},d.default.createElement("div",{className:"module-side-header"},d.default.createElement("div",{className:"module-logo"},d.default.createElement("i",{className:"zmdi zmdi-account-box mr-4"}),d.default.createElement("span",null,d.default.createElement(T.default,{id:"chat.contacts"})))),d.default.createElement("div",{className:"module-side-content"},d.default.createElement(v.default,{className:"module-side-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 200px)":"calc(100vh - 80px)"}},d.default.createElement("div",{className:"module-add-task"},d.default.createElement(f.Button,{className:"btn-block jr-btn",color:"primary",onClick:e.onAddContact},d.default.createElement("i",{className:"zmdi zmdi-account-add zmdi-hc-fw"}),d.default.createElement("span",null,"Add New Contact"))),d.default.createElement("div",{className:"module-side-nav"},d.default.createElement("ul",{className:"module-nav"},L.map(function(t){return d.default.createElement("li",{key:t.id,className:"nav-item"},d.default.createElement("a",{href:"javascript:void(0)",className:t.id===e.props.selectedSectionId?"active":"",onClick:e.onFilterOptionSelect.bind(e,t)},d.default.createElement("i",{className:"zmdi "+t.icon}),d.default.createElement("span",null,t.name)))}))))))},e.addFavourite=function(t){e.props.addFavourite(t)},e.onContactSelect=function(t){e.props.onContactSelect(t)},e.onAddContact=function(){e.props.onAddContact()},e.onContactClose=function(){e.props.onContactClose()},e.onFilterOptionSelect=function(t){e.props.onFilterOptionSelect(t)},e.onSaveContact=function(t){e.props.onSaveContact(t)},e.onDeleteContact=function(t){e.props.onDeleteContact(t)},e.onDeleteSelectedContact=function(){e.props.onDeleteSelectedContact()},e.filterContact=function(t){""===t?e.onFilterOptionSelect(e.props.filterOption):e.props.filterContact(t)},e.handleRequestClose=function(){e.props.handleRequestClose()},e.getAllContact=function(){e.props.getAllContact()},e.getUnselectedAllContact=function(){e.props.getUnselectedAllContact()},e.onAllContactSelect=function(){e.props.selectedContacts<e.props.contactList.length?e.props.getAllContact():e.props.getUnselectedAllContact()},e.onToggleDrawer=function(){e.props.onToggleDrawer()},e}return s(t,e),l(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.hideContactLoader()},1500)}},{key:"updateContactUser",value:function(e){this.props.updateContactUser(e.target.value),this.props.filterContact(e.target.value)}},{key:"render",value:function(){var e=this.props,t=e.user,o=e.contactList,n=e.addContactState,a=e.selectedContacts,r=e.alertMessage,s=e.showMessage,c=e.drawerState,l=(e.searchUser,e.noContentFoundMessage),i=e.loader;return d.default.createElement("div",{className:"app-wrapper"},d.default.createElement("div",{className:"app-module animated slideInUpTiny animation-duration-3"},d.default.createElement("div",{className:"d-block d-xl-none"},d.default.createElement(m.default,{touch:!0,transitions:!0,enableDragHandle:!0,open:c,onOpenChange:this.onToggleDrawer.bind(this),sidebar:this.ContactSideBar(t)})),d.default.createElement("div",{className:"app-module-sidenav d-none d-xl-flex"},this.ContactSideBar(t)),d.default.createElement("div",{className:"module-box"},d.default.createElement("div",{className:"module-box-header"},d.default.createElement("span",{className:"icon-btn drawer-btn d-flex d-xl-none",onClick:this.onToggleDrawer.bind(this)},d.default.createElement("i",{className:"zmdi zmdi-menu"})),d.default.createElement(E.default,{placeholder:"Search contact",notification:!1,apps:!1,user:this.props.user,onChange:this.updateContactUser.bind(this),value:this.props.searchUser})),d.default.createElement("div",{className:"module-box-content"},d.default.createElement("div",{className:"module-box-topbar"},d.default.createElement("div",{className:"form-control-checkbox d-flex"},d.default.createElement("div",{className:"form-checkbox"},d.default.createElement("input",{type:"checkbox",checked:a>0,onChange:this.onAllContactSelect.bind(this)}),d.default.createElement("span",{className:"check"},d.default.createElement("i",{className:"zmdi zmdi-check zmdi-hc-lg"})))),a>0&&d.default.createElement("span",{className:"icon-btn",onClick:this.onDeleteSelectedContact.bind(this)},d.default.createElement("i",{className:"zmdi zmdi-delete"}))),d.default.createElement(v.default,{className:"module-list-scroll scrollbar",style:{height:this.props.width>=1200?"calc(100vh - 265px)":"calc(100vh - 245px)"}},i?d.default.createElement("div",{className:"loader-view-block h-100"},d.default.createElement("div",{className:"loader-view"},d.default.createElement(j.default,null))):0===o.length?d.default.createElement("div",{className:"h-100 d-flex align-items-center justify-content-center"},l):d.default.createElement(b.default,{contactList:o,addFavourite:this.addFavourite.bind(this),onContactSelect:this.onContactSelect.bind(this),onDeleteContact:this.onDeleteContact.bind(this),onSaveContact:this.onSaveContact.bind(this)}))))),d.default.createElement(O.default,{open:n,contact:{id:D++,name:"",thumb:"",email:"",phone:"",designation:"",selected:!1,starred:!1,frequently:!1},onSaveContact:this.onSaveContact,onContactClose:this.onContactClose,onDeleteContact:this.onDeleteContact}),s&&_.NotificationManager.success(r,this.handleRequestClose()),d.default.createElement(_.NotificationContainer,null))}}]),t}(i.Component),N=function(e){var t=e.contacts;return{width:e.settings.width,loader:t.loader,alertMessage:t.alertMessage,showMessage:t.showMessage,noContentFoundMessage:t.noContentFoundMessage,selectedSectionId:t.selectedSectionId,drawerState:t.drawerState,user:t.user,searchUser:t.searchUser,filterOption:t.filterOption,allContact:t.allContact,contactList:t.contactList,selectedContact:t.selectedContact,selectedContacts:t.selectedContacts,addContactState:t.addContactState}},H=(0,p.connect)(N,{fetchContacts:y.fetchContacts,addFavourite:y.addFavourite,onContactSelect:y.onContactSelect,onAddContact:y.onAddContact,onContactClose:y.onContactClose,onFilterOptionSelect:y.onFilterOptionSelect,onSaveContact:y.onSaveContact,onDeleteContact:y.onDeleteContact,onDeleteSelectedContact:y.onDeleteSelectedContact,filterContact:y.filterContact,getAllContact:y.getAllContact,getUnselectedAllContact:y.getUnselectedAllContact,onAllContactSelect:y.onAllContactSelect,updateContactUser:y.updateContactUser,onToggleDrawer:y.onToggleDrawer,handleRequestClose:y.handleRequestClose,hideContactLoader:y.hideContactLoader})(S);t.default=H;var U=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(D,"contactId","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(L,"filterOptions","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(S,"ContactWithRedux","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(N,"mapStateToProps","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(H,"default","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_createClass","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(m,"_rmcDrawer2","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(b,"_ContactList2","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(E,"_index2","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(O,"_AddContact2","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(T,"_IntlMessages2","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(j,"_CircularProgress2","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(v,"_CustomScrollbars2","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(a,"_classCallCheck","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(r,"_possibleConstructorReturn","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(s,"_inherits","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(D,"contactId","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(L,"filterOptions","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(S,"ContactWithRedux","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(N,"mapStateToProps","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(H,"_default","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"),__REACT_HOT_LOADER__.register(U,"_temp","/Users/mdroste/github-repos/jumbo/src/app/routes/contact/redux/index.js"))}()},1177:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(2),d=n(i),u=o(80),m=o(404),_=n(m),p=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onSearchBoxSelect=function(){e.setState({searchBox:!e.state.searchBox})},e.state={searchBox:!1,popoverOpen:!1},e.toggle=e.toggle.bind(e),e}return s(t,e),l(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){var e=this.props,t=(e.styleName,e.placeholder),o=e.onChange,n=e.value,a=e.user,r=e.notification,s=e.apps;return d.default.createElement("div",{className:"module-box-header-inner"},d.default.createElement("div",{className:"search-bar right-side-icon bg-transparent d-none d-sm-block"},d.default.createElement("div",{className:"form-group"},d.default.createElement("input",{className:"form-control border-0",type:"search",placeholder:t,onChange:o,value:n}),d.default.createElement("button",{className:"search-icon"},d.default.createElement("i",{className:"zmdi zmdi-search zmdi-hc-lg"})))),d.default.createElement(u.Popover,{className:"p-3",placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},d.default.createElement("h3",null,a.name),d.default.createElement("h4",null,a.email)),d.default.createElement("div",{className:"d-inline-block d-sm-none"},d.default.createElement(u.Dropdown,{className:"quick-menu nav-searchbox",isOpen:this.state.searchBox,toggle:this.onSearchBoxSelect.bind(this)},d.default.createElement(u.DropdownToggle,{className:"d-inline-block",tag:"span","data-toggle":"dropdown"},d.default.createElement("span",{className:"icon-btn"},d.default.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw text-grey"}))),d.default.createElement(u.DropdownMenu,{className:"p-0"},d.default.createElement(_.default,{styleName:"search-dropdown",placeholder:"",onChange:o,value:n})))),d.default.createElement("div",{className:"module-box-header-right"},s&&d.default.createElement("span",{className:"icon-btn "},d.default.createElement("i",{className:"zmdi zmdi-apps zmdi-hc-lg "})),r&&d.default.createElement("span",{className:"icon-btn "},d.default.createElement("i",{className:"zmdi zmdi-notifications-none zmdi-hc-lg "})),d.default.createElement("img",{className:"ml-2 rounded-circle size-40 pointer",id:"Popover1",alt:a.name,onMouseEnter:this.toggle,onMouseLeave:this.toggle,onClick:this.toggle,src:a.avatar})))}}]),t}(d.default.Component),f=p;t.default=f,p.defaultProps={styleName:"",value:"",notification:!0,apps:!0};var C=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"AppModuleHeader","/Users/mdroste/github-repos/jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(f,"default","/Users/mdroste/github-repos/jumbo/src/components/AppModuleHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_createClass","/Users/mdroste/github-repos/jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","/Users/mdroste/github-repos/jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(_,"_SearchBox2","/Users/mdroste/github-repos/jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/mdroste/github-repos/jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(a,"_classCallCheck","/Users/mdroste/github-repos/jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(r,"_possibleConstructorReturn","/Users/mdroste/github-repos/jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(s,"_inherits","/Users/mdroste/github-repos/jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(p,"AppModuleHeader","/Users/mdroste/github-repos/jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(f,"_default","/Users/mdroste/github-repos/jumbo/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(C,"_temp","/Users/mdroste/github-repos/jumbo/src/components/AppModuleHeader/index.js"))}()},1321:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(2),d=n(i),u=o(80),m=o(48),_=n(m),p=function(e){function t(e){a(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.contact,s=n.id,c=n.thumb,l=n.name,i=n.email,d=n.phone,u=n.designation,m=n.selected,_=n.starred,p=n.frequently;return o.state={id:s,thumb:c,name:l,email:i,phone:d,designation:u,selected:m,starred:_,frequently:p},o}return s(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.onSaveContact,n=(t.onDeleteContact,t.onContactClose),a=t.open,r=t.contact,s=this.state,c=s.id,l=s.name,i=s.email,m=s.phone,p=s.designation,f=s.selected,C=s.starred,b=s.frequently,h=this.state.thumb;return h||(h="http://via.placeholder.com/225x225"),d.default.createElement(u.Modal,{className:"modal-box",toggle:n,isOpen:a},d.default.createElement(u.ModalHeader,{className:"modal-box-header bg-primary"},""===r.name?d.default.createElement(_.default,{id:"contact.addContact"}):d.default.createElement(_.default,{id:"contact.saveContact"}),d.default.createElement("span",{className:"text-white pointer"},d.default.createElement("i",{className:"zmdi zmdi-close zmdi-hc-lg",onClick:n}))),d.default.createElement("div",{className:"modal-box-content"},d.default.createElement("div",{className:"row no-gutters"},d.default.createElement("div",{className:"col-lg-3 text-center text-lg-right order-lg-2"},d.default.createElement("img",{className:"ml-lg-3 mb-4 mb-lg-0 avatar size-120",src:h})),d.default.createElement("div",{className:"col-lg-9 d-flex flex-column order-lg-1"},d.default.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Name",onChange:function(t){return e.setState({name:t.target.value})},defaultValue:l}),d.default.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Email",onChange:function(t){return e.setState({email:t.target.value})},value:i}),d.default.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Phone",onChange:function(t){return e.setState({phone:t.target.value})},value:m}),d.default.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Designation",onChange:function(t){return e.setState({designation:t.target.value})},value:p})))),d.default.createElement("div",{className:"modal-box-footer d-flex flex-row"},d.default.createElement(u.Button,{className:"text-uppercase",disabled:""===l,color:"primary",onClick:function(){n(),o({id:c,name:l,thumb:h,email:i,phone:m,designation:p,selected:f,starred:C,frequently:b}),e.setState({id:c+1,name:"",thumb:"",email:"",phone:"",designation:""})}},d.default.createElement(_.default,{id:"contact.saveContact"}))))}}]),t}(d.default.Component),f=p;t.default=f;var C=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"AddContact","/Users/mdroste/github-repos/jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(f,"default","/Users/mdroste/github-repos/jumbo/src/components/contact/AddContact/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_createClass","/Users/mdroste/github-repos/jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","/Users/mdroste/github-repos/jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(_,"_IntlMessages2","/Users/mdroste/github-repos/jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/mdroste/github-repos/jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(a,"_classCallCheck","/Users/mdroste/github-repos/jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(r,"_possibleConstructorReturn","/Users/mdroste/github-repos/jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(s,"_inherits","/Users/mdroste/github-repos/jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(p,"AddContact","/Users/mdroste/github-repos/jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(f,"_default","/Users/mdroste/github-repos/jumbo/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(C,"_temp","/Users/mdroste/github-repos/jumbo/src/components/contact/AddContact/index.js"))}()},1567:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(2),r=n(a),s=o(1568),c=n(s),l=function(e){var t=e.contactList,o=e.addFavourite,n=e.onContactSelect,a=e.onSaveContact,s=e.onDeleteContact;return r.default.createElement("div",{className:"contact-main-content"},t.map(function(e,t){return r.default.createElement(c.default,{key:t,contact:e,onDeleteContact:s,onSaveContact:a,addFavourite:o,onContactSelect:n})}))},i=l;t.default=i;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"ContactList","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(c,"_index2","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(l,"ContactList","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"_default","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/index.js"))}()},1568:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(2),d=n(i),u=o(80),m=o(1321),_=n(m),p=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onContactOptionToggle=function(t){e.setState({menuState:!e.state.menuState})},e.onContactClose=function(){e.setState({addContactState:!1})},e.onDeleteContact=function(t){e.setState({addContactState:!1}),e.props.onDeleteContact(t)},e.onEditContact=function(){e.setState({menuState:!1,addContactState:!0})},e.state={menuState:!1,addContactState:!1},e}return s(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.contact,n=t.addFavourite,a=t.onContactSelect,r=t.onSaveContact,s=this.state,c=s.menuState,l=s.addContactState,i=o.name,m=o.thumb,p=o.email,f=o.phone,C=o.designation,b=o.starred,h=["Edit","Delete"];return d.default.createElement("div",{className:"contact-item"},d.default.createElement("div",{className:"form-control-checkbox d-flex"},d.default.createElement("div",{className:"form-checkbox"},d.default.createElement("input",{type:"checkbox",checked:o.selected,value:"checked",onClick:function(){a(o)}}),d.default.createElement("span",{className:"check"},d.default.createElement("i",{className:"zmdi zmdi-check zmdi-hc-lg"})))),d.default.createElement("div",{className:"col-auto px-1 actions d-none d-xs-flex"},d.default.createElement("span",{className:"icon-btn",onClick:function(){n(o)}},b?d.default.createElement("i",{className:"zmdi zmdi-star"}):d.default.createElement("i",{className:"zmdi zmdi-star-outline"}))),null===m||""===m?d.default.createElement("div",{className:"rounded-circle size-40 bg-blue text-center text-white mx-1 mx-md-3",style:{fontSize:20}},i.charAt(0).toUpperCase()):d.default.createElement("img",{className:"rounded-circle size-40 mx-1 mx-md-3",alt:i,src:m}),d.default.createElement("div",{className:"col con-inf-mw-100"},d.default.createElement("p",{className:"mb-0"},d.default.createElement("span",{className:"text-truncate contact-name"},i),d.default.createElement("span",{className:"d-inline-block toolbar-separator"}," "),d.default.createElement("span",{className:"text-truncate job-title"},C)),d.default.createElement("div",{className:"text-muted"},d.default.createElement("span",{className:"email d-inline-block mr-2"},p),d.default.createElement("span",{className:"phone d-inline-block"},f))),d.default.createElement("div",{className:"col-auto px-1 actions d-none d-sm-flex"},d.default.createElement(u.Dropdown,{isOpen:c,toggle:this.onContactOptionToggle.bind(this)},d.default.createElement(u.DropdownToggle,{tag:"span"},d.default.createElement("span",{className:"icon-btn text-grey pointer"},d.default.createElement("i",{className:"zmdi zmdi-more-vert zmdi-hc-lg"}))),d.default.createElement(u.DropdownMenu,null,h.map(function(t){return d.default.createElement(u.DropdownItem,{key:t,onClick:function(){"Edit"===t?e.onEditContact():e.onDeleteContact(o)}},t)}))),l&&d.default.createElement(_.default,{open:l,contact:o,onSaveContact:r,onContactClose:this.onContactClose,onDeleteContact:this.onDeleteContact})))}}]),t}(d.default.Component),f=p;t.default=f;var C=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"ContactCell","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(f,"default","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/ContactCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_createClass","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(_,"_index2","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(a,"_classCallCheck","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(r,"_possibleConstructorReturn","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(s,"_inherits","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(p,"ContactCell","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(f,"_default","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(C,"_temp","/Users/mdroste/github-repos/jumbo/src/components/contact/ContactList/ContactCell/index.js"))}()}});
//# sourceMappingURL=42.dc0864a7e30fc378fbc5.chunk.js.map