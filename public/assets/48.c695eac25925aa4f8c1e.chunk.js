webpackJsonp([48],{1003:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(2),n=a(s),i=function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)},o=function(e,t,r){return 0===r?"#/":"#/"+e.split(t)[0]+t},l=function(e){var t=e.title,r=e.match,a=r.path.substr(1);a.split("/");return n.default.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},n.default.createElement("h2",{className:"title mb-3 mb-sm-0"},t))},c=l;t.default=c;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"getDisplayString","/Users/mdroste/github-repos/jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(o,"getUrlString","/Users/mdroste/github-repos/jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(l,"ContainerHeader","/Users/mdroste/github-repos/jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/mdroste/github-repos/jumbo/src/components/ContainerHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"_react2","/Users/mdroste/github-repos/jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/mdroste/github-repos/jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(i,"getDisplayString","/Users/mdroste/github-repos/jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(o,"getUrlString","/Users/mdroste/github-repos/jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(l,"ContainerHeader","/Users/mdroste/github-repos/jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/mdroste/github-repos/jumbo/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(u,"_temp","/Users/mdroste/github-repos/jumbo/src/components/ContainerHeader/index.js"))}()},1552:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(2),n=a(s),i=function(){return n.default.createElement("div",{className:"profile-intro card text-center"},n.default.createElement("div",{className:"pi-header"},n.default.createElement("div",{className:"card-image layer"},n.default.createElement("img",{className:"avatar-circle",src:"http://via.placeholder.com/150x150",alt:"Team Member"}))),n.default.createElement("div",{className:"pi-content"},n.default.createElement("h4",null,"Robert Johnson"),n.default.createElement("p",null,"Designer"),n.default.createElement("p",{className:"card-text"},"Hello everyone, I am Maryam. My designs are used in several big companies in United State and other countries.")),n.default.createElement("div",{className:"pi-footer"},n.default.createElement("div",{className:"icons-wrapper"},n.default.createElement("a",{className:"icon facebook-icon",href:"javascript:void(0)"},n.default.createElement("i",{className:"zmdi zmdi-facebook zmdi-hc-fw zmdi-hc-lg"})),n.default.createElement("a",{className:"icon twitter-icon",href:"javascript:void(0)"},n.default.createElement("i",{className:"zmdi zmdi-twitter zmdi-hc-fw zmdi-hc-lg"})),n.default.createElement("a",{className:"icon linkedin-icon",href:"javascript:void(0)"},n.default.createElement("i",{className:"zmdi zmdi-linkedin zmdi-hc-fw zmdi-hc-lg"})))))},o=i;t.default=o;var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"ProfileCard","/Users/mdroste/github-repos/jumbo/src/components/ProfileCard/index.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/mdroste/github-repos/jumbo/src/components/ProfileCard/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"_react2","/Users/mdroste/github-repos/jumbo/src/components/ProfileCard/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/mdroste/github-repos/jumbo/src/components/ProfileCard/index.js"),__REACT_HOT_LOADER__.register(i,"ProfileCard","/Users/mdroste/github-repos/jumbo/src/components/ProfileCard/index.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/mdroste/github-repos/jumbo/src/components/ProfileCard/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","/Users/mdroste/github-repos/jumbo/src/components/ProfileCard/index.js"))}()},2560:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=r(2),c=a(l),u=r(3),d=a(u),p=function(e){function t(e){s(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleTriggerClick=r.handleTriggerClick.bind(r),r.handleTransitionEnd=r.handleTransitionEnd.bind(r),r.continueOpenCollapsible=r.continueOpenCollapsible.bind(r),r.setInnerRef=r.setInnerRef.bind(r),e.open?r.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:r.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},r}return i(t,e),o(t,[{key:"componentDidUpdate",value:function(e,t){var r=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&!0===this.state.shouldSwitchAutoOnNextCycle&&window.setTimeout(function(){r.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})},50),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.innerRef.offsetHeight,transition:"height "+(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime)+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.innerRef.offsetHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){e.preventDefault(),this.props.triggerDisabled||(this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):!0===this.state.isClosed?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?c.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling?c.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(){this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen())}},{key:"setInnerRef",value:function(e){this.innerRef=e}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},r=this.state.isClosed?"is-closed":"is-open",a=this.props.triggerDisabled?"is-disabled":"",s=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,n=this.props.triggerTagName,i=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,o=this.props.classParentString+"__trigger "+r+" "+a+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),l=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),u=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,d=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return c.default.createElement("div",{className:l.trim()},c.default.createElement(n,{className:o.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var r=t.key;" "!==r&&"Enter"!==r||e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},s),this.renderNonClickableTriggerElement(),c.default.createElement("div",{className:u.trim(),style:t,onTransitionEnd:this.handleTransitionEnd},c.default.createElement("div",{className:d.trim(),ref:this.setInnerRef},i)))}}]),t}(l.Component);p.propTypes={transitionTime:d.default.number,transitionCloseTime:d.default.number,triggerTagName:d.default.string,easing:d.default.string,open:d.default.bool,classParentString:d.default.string,openedClassName:d.default.string,triggerStyle:d.default.object,triggerClassName:d.default.string,triggerOpenedClassName:d.default.string,contentOuterClassName:d.default.string,contentInnerClassName:d.default.string,accordionPosition:d.default.oneOfType([d.default.string,d.default.number]),handleTriggerClick:d.default.func,onOpen:d.default.func,onClose:d.default.func,onOpening:d.default.func,onClosing:d.default.func,trigger:d.default.oneOfType([d.default.string,d.default.element]),triggerWhenOpen:d.default.oneOfType([d.default.string,d.default.element]),triggerDisabled:d.default.bool,lazyRender:d.default.bool,overflowWhenOpen:d.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),triggerSibling:d.default.oneOfType([d.default.element,d.default.func]),tabIndex:d.default.number},p.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},tabIndex:null},t.default=p},990:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),c=r(2),u=a(c),d=r(2560),p=a(d),m=r(1552),f=a(m),h=r(1003),g=a(h),_=r(48),b=a(_),E=function(e){function t(){var e,r,a,i;s(this,t);for(var o=arguments.length,l=Array(o),c=0;c<o;c++)l[c]=arguments[c];return r=a=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.state={expanded:null},a.handleChange=function(e){return function(t,r){a.setState({expanded:!!r&&e})}},i=r,n(a,i)}return i(t,e),l(t,[{key:"render",value:function(){this.state.expanded;return u.default.createElement("div",{className:" animated slideInUpTiny animation-duration-3"},u.default.createElement(g.default,{title:u.default.createElement(b.default,{id:"sidebar.extraPages.faq"}),match:this.props.match}),u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-md-8 col-sm-7 col-12"},u.default.createElement(p.default,{trigger:"How does it work?"},u.default.createElement("p",null,"Using WP Age Gate Pro is pretty straight forward. There is an easy to use interface given under settings to apply all the settings and integrate it with WooCommerce products & categories easily You can find a quick How to video about this here which explains all the setings.")),u.default.createElement(p.default,{trigger:"How does one click refund policy work?"},u.default.createElement("p",null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")),u.default.createElement(p.default,{trigger:"What if I face any trouble and need some help?"},u.default.createElement("p",null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")),u.default.createElement(p.default,{trigger:"What frequent updates do you do?"},u.default.createElement("p",null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))),u.default.createElement("div",{className:"col-md-4 col-sm-5 col-12 animation slideInRight"},u.default.createElement("div",{className:"sidebar"},u.default.createElement(f.default,null),u.default.createElement("div",{className:"card bg-white p-2"},u.default.createElement("form",{className:"m-0",role:"search"},u.default.createElement("div",{className:"search-bar"},u.default.createElement("div",{className:"form-group"},u.default.createElement("input",{type:"search",className:"form-control form-control-lg border-0",placeholder:"Search..."}),u.default.createElement("button",{className:"search-icon"},u.default.createElement("i",{className:"zmdi zmdi-search zmdi-hc-lg"})))))),u.default.createElement("div",{className:"card p-4"},u.default.createElement("h3",{className:"text-uppercase letter-spacing-base mb-3"},"Categories"),u.default.createElement("ul",{className:"categories-list list-unstyled"},u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:void(0)"},"Technology")),u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:void(0)"},"Branding")),u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:void(0)"},"Holly")),u.default.createElement("li",{className:"active"},u.default.createElement("a",{href:"javascript:void(0)"},"Stories")),u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:void(0)"},"Designing")),u.default.createElement("li",null,u.default.createElement("a",{href:"javascript:void(0)"},"Programing")))),u.default.createElement("div",{className:"card p-4"},u.default.createElement("h3",{className:"text-uppercase letter-spacing-base mb-4"},"Popular Articles"),u.default.createElement("ul",{className:"articles-section list-unstyled"},u.default.createElement("li",{className:"articles"},u.default.createElement("a",{className:"article-image",href:"javascript:void(0)"},u.default.createElement("img",{src:"http://via.placeholder.com/500x330",alt:"Articales Post"})),u.default.createElement("div",{className:"article-description"},u.default.createElement("p",null,u.default.createElement("a",{href:"javascript:void(0)"},"English breakfast.jpeg tea with desert donut")),u.default.createElement("div",{className:"meta-wrapper"},u.default.createElement("span",{className:"meta-date"},u.default.createElement("i",{className:"zmdi zmdi-calendar-note zmdi-hc-lg"}),"25 May, 2016")))),u.default.createElement("li",{className:"articles"},u.default.createElement("a",{className:"article-image",href:"javascript:void(0)"},u.default.createElement("img",{src:"http://via.placeholder.com/500x330",alt:"Articales Post"})),u.default.createElement("div",{className:"article-description"},u.default.createElement("p",null,u.default.createElement("a",{href:"javascript:void(0)"},"Two smart kids reading through tablet")),u.default.createElement("div",{className:"meta-wrapper"},u.default.createElement("span",{className:"meta-date"},u.default.createElement("i",{className:"zmdi zmdi-calendar-note zmdi-hc-lg"}),"25 May, 2016")))),u.default.createElement("li",{className:"articles"},u.default.createElement("a",{className:"article-image",href:"javascript:void(0)"},u.default.createElement("img",{src:"http://via.placeholder.com/500x330",alt:"Articales Post"})),u.default.createElement("div",{className:"article-description"},u.default.createElement("p",null,u.default.createElement("a",{href:"javascript:void(0)"},"Co-founder trying to explain his idea to his employers")),u.default.createElement("div",{className:"meta-wrapper"},u.default.createElement("span",{className:"meta-date"},u.default.createElement("i",{className:"zmdi zmdi-calendar-note zmdi-hc-lg"}),"25 May, 2016"))))))))))}}]),t}(u.default.Component),C=E;t.default=C;var O=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(E,"FAQ","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"),__REACT_HOT_LOADER__.register(C,"default","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"_createClass","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"),__REACT_HOT_LOADER__.register(u,"_react2","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"),__REACT_HOT_LOADER__.register(p,"_reactCollapsible2","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"),__REACT_HOT_LOADER__.register(f,"_index2","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"),__REACT_HOT_LOADER__.register(g,"_ContainerHeader2","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"),__REACT_HOT_LOADER__.register(b,"_IntlMessages2","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"),__REACT_HOT_LOADER__.register(a,"_interopRequireDefault","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"),__REACT_HOT_LOADER__.register(s,"_classCallCheck","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"),__REACT_HOT_LOADER__.register(n,"_possibleConstructorReturn","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"),__REACT_HOT_LOADER__.register(i,"_inherits","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"),__REACT_HOT_LOADER__.register(E,"FAQ","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"),__REACT_HOT_LOADER__.register(C,"_default","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"),__REACT_HOT_LOADER__.register(O,"_temp2","/Users/mdroste/github-repos/jumbo/src/app/routes/extraPages/routes/faq/index.js"))}()}});
//# sourceMappingURL=48.c695eac25925aa4f8c1e.chunk.js.map