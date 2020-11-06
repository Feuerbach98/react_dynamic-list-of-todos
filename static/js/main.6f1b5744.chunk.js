(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),c=n.n(s),o=n(1),u=n(2),l=n(4),i=n(3),d=(n(12),n(13),n(14),function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todo,n=e.selectUser;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0}),r.a.createElement("p",null,t.title)),r.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",value:t.userId,onClick:function(e){return n(e)}},"User #".concat(t.userId)))}}]),n}(r.a.PureComponent));d.defaultProps={todo:{}};var p=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.selectUser,a=e.selectedUserId,s=e.query,c=e.status,o=t.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}));return"Active"===c?o=o.filter((function(e){return!e.completed})):"Finished"===c&&(o=o.filter((function(e){return e.completed}))),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},o.map((function(e){return r.a.createElement("li",{key:e.id,className:"TodoList__item TodoList__item--".concat(e.completed?"checked":"unchecked")},r.a.createElement(d,{todo:e,selectUser:n,selectedUserId:a}))}))))}}]),n}(r.a.PureComponent);p.defaultProps={query:"",status:"",todos:[]};n(15);var m=function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))},f=function(e){return m("/users/".concat(e))},h=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={userInfo:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;f(this.props.userId).then((function(t){return e.setState({userInfo:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this;e.userId!==this.props.userId&&f(this.props.userId).then((function(e){return t.setState({userInfo:e})}))}},{key:"render",value:function(){var e=this.state.userInfo;return e?r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:"," ".concat(e.id))),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone),r.a.createElement("button",{type:"button",className:"CurrentUser__clear-button",onClick:this.props.clearInfo},"Clear info")):"No info about user"}}]),n}(r.a.Component);h.defaultProps={userInfo:{}};var v=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,query:"",status:"All"},e.selectUser=function(t){var n=t.target.value;e.setState({selectedUserId:n})},e.clearUserInfo=function(){e.setState({selectedUserId:0})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;m("/todos").then((function(t){return e.setState({todos:t.filter((function(e){return null!=e.userId}))})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.todos,a=t.selectedUserId,s=t.query,c=t.status;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement("input",{className:"App__search",type:"text",placeholder:"Enter todo title",value:s,onChange:function(t){e.setState({query:t.target.value})}}),r.a.createElement("select",{onChange:function(t){return e.setState({status:t.target.value})},className:"App__select-visible"},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"Finished"},"Finished"),r.a.createElement("option",{value:"Active"},"Active")),r.a.createElement(p,{todos:n,selectUser:this.selectUser,selectedUserId:a,query:s,status:c})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},a?r.a.createElement(h,{userId:a,clearInfo:this.clearUserInfo}):"No user selected")))}}]),n}(r.a.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.6f1b5744.chunk.js.map