(this.webpackJsonplesson3=this.webpackJsonplesson3||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(9),r=n.n(c),o=(n(15),n(2)),i=n(3),l=n(5),u=n(4),j=n(6),h=n(0),d=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).onChange=function(t){var e=t.target.name,n=t.target.value;"status"===e&&(n="true"===t.target.value),a.setState(Object(j.a)({},e,n))},a.onSubmitForm=function(t){t.preventDefault(),a.props.onSubmit(a.state),a.onClear()},a.onClear=function(){a.setState({name:"",status:!1})},a.componentDidMount=function(){if(a.props.taskEdit){var t=a.props.taskEdit,e=t.id,n=t.name,s=t.status;a.setState({id:e,name:n,status:s})}},a.state={id:"",name:"",status:!1},a}return Object(i.a)(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(t){t&&t.taskEdit?this.setState({id:t.taskEdit.id,name:t.taskEdit.name,status:t.taskEdit.status}):t&&null==t.taskEdit&&this.setState({id:"",name:"",status:!1})}},{key:"render",value:function(){var t=this.state.id;return Object(h.jsx)("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4",children:Object(h.jsxs)("div",{className:"panel panel-warning",children:[Object(h.jsx)("div",{className:"panel-heading",children:Object(h.jsx)("h3",{className:"panel-title",children:""===t?"Th\xeam C\xf4ng Vi\u1ec7c":"C\u1eadp nh\u1eadt c\xf4ng vi\u1ec7c"})}),Object(h.jsx)("div",{className:"panel-body",children:Object(h.jsxs)("form",{onSubmit:this.onSubmitForm,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"T\xean :"}),Object(h.jsx)("input",{type:"text",className:"form-control",name:"name",value:this.state.name,onChange:this.onChange})]}),Object(h.jsx)("label",{children:"Tr\u1ea1ng Th\xe1i :"}),Object(h.jsxs)("select",{className:"form-control",required:"required",name:"status",value:this.state.status,onChange:this.onChange,children:[Object(h.jsx)("option",{value:!0,children:"K\xedch Ho\u1ea1t"}),Object(h.jsx)("option",{value:!1,children:"\u1ea8n"})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("button",{type:"submit",className:"btn btn-warning",children:"L\u01b0u"}),"\xa0",Object(h.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.props.reciveOpenTask,children:"H\u1ee7y B\u1ecf"})]})]})})]})})}}]),n}(a.Component),b=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).onChange=function(t){var e=t.target,n=e.name,s=e.value;a.setState(Object(j.a)({},n,s))},a.onSearch=function(){a.props.onSearch(a.state.keyworld)},a.state={keyworld:""},a}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.keyworld;return Object(h.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("input",{name:"keyworld",type:"text",className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a...",value:t,onChange:this.onChange}),Object(h.jsx)("span",{className:"input-group-btn",onClick:this.onSearch,children:Object(h.jsxs)("button",{className:"btn btn-primary",type:"button",children:[Object(h.jsx)("span",{className:"fa fa-search mr-5"}),"T\xecm"]})})]})})}}]),n}(a.Component),m=n(8),p=n.n(m),f=n(10),O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).onClick=function(){var t=Object(f.a)(p.a.mark((function t(e,n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.setState({sort:{by:e,value:n}});case 2:a.props.onSorting(a.state.sort);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),a.state={sort:{by:"name",value:1}},a}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state.sort;return Object(h.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(h.jsxs)("div",{className:"dropdown",children:[Object(h.jsxs)("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",children:["S\u1eafp X\u1ebfp ",Object(h.jsx)("span",{className:"fa fa-caret-square-o-down ml-5"})]}),Object(h.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1",children:[Object(h.jsx)("li",{onClick:function(){t.onClick("name",1)},children:Object(h.jsxs)("a",{role:"button",href:"#/",children:[Object(h.jsx)("span",{className:"fa fa-sort-alpha-asc pr-5",children:"T\xean A-Z"}),Object(h.jsx)("i",{className:"name"===e.by&&1===e.value?"fas fa-check float-right":""})]})}),Object(h.jsx)("li",{onClick:function(){t.onClick("name",-1)},children:Object(h.jsxs)("a",{role:"button",href:"#/",children:[Object(h.jsx)("span",{className:"fa fa-sort-alpha-asc pr-5",children:"T\xean Z-A"}),Object(h.jsx)("i",{className:"name"===e.by&&-1===e.value?"fas fa-check float-right":""})]})}),Object(h.jsx)("li",{role:"separator",className:"divider"}),Object(h.jsx)("li",{onClick:function(){t.onClick("status",1)},children:Object(h.jsxs)("a",{role:"button",href:"#/",children:["Tr\u1ea1ng Th\xe1i K\xedch Ho\u1ea1t",Object(h.jsx)("i",{className:"status"===e.by&&1===e.value?"fas fa-check float-right":""})]})}),Object(h.jsx)("li",{onClick:function(){t.onClick("status",-1)},children:Object(h.jsxs)("a",{role:"button",href:"#/",children:["Tr\u1ea1ng Th\xe1i \u1ea8n",Object(h.jsx)("i",{className:"status"===e.by&&-1===e.value?"fas fa-check float-right":""})]})})]})]})})}}]),n}(a.Component),g=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"row mt-15",children:[Object(h.jsx)(b,{onSearch:this.props.onSearch}),Object(h.jsx)(O,{onSorting:this.props.onSorting})]})}}]),n}(a.Component),x=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).onChangeStatus=function(e){t.props.onChangeStatusItem(t.props.taskvalue.id)},t.onDelete=function(){t.props.onDelete(t.props.taskvalue.id)},t.onUpdate=function(){t.props.onUpdate(t.props.taskvalue.id)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.taskvalue;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:this.props.index+1}),Object(h.jsx)("td",{children:t.name}),Object(h.jsx)("td",{className:"text-center",onClick:this.onChangeStatus,children:Object(h.jsxs)("span",{className:!0===t.status?"label label-success":"label label-danger",children:[!0===t.status?"K\xedch ho\u1ea1t":"\u1ea8n",Object(h.jsx)("i",{className:"fas fa-exchange-alt mr-5"})]})}),Object(h.jsxs)("td",{className:"text-center",children:[Object(h.jsxs)("button",{type:"button",className:"btn btn-warning",onClick:this.onUpdate,children:[Object(h.jsx)("span",{className:"fa fa-pencil mr-5"}),"S\u1eeda"]}),"\xa0",Object(h.jsxs)("button",{type:"button",className:"btn btn-danger",onClick:this.onDelete,children:[Object(h.jsx)("span",{className:"fa fa-trash mr-5"}),"X\xf3a"]})]})]})})}}]),n}(a.Component),v=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).onChange=function(t){var e=t.target,n=e.name,s=e.value;a.props.onFilter("filterName"===n?s:a.state.filterName,"filterStatus"===n?s:a.state.filterStatus),a.setState(Object(j.a)({},n,s))},a.state={filterName:"",filterStatus:-1},a}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.filterName,a=e.filterStatus,s=this.props.tasklist.map((function(e,n){return Object(h.jsx)(x,{index:n,taskvalue:e,onChangeStatusItem:t.props.receiveChangeStatus,onDelete:t.props.onDelete,onUpdate:t.props.onUpdate},e.id)}));return Object(h.jsx)("div",{className:"row mt-15",children:Object(h.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:Object(h.jsxs)("table",{className:"table table-bordered table-hover",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"text-center",children:"STT"}),Object(h.jsx)("th",{className:"text-center",children:"T\xean"}),Object(h.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng Th\xe1i"}),Object(h.jsx)("th",{className:"text-center",children:"H\xe0nh \u0110\u1ed9ng"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",className:"form-control",name:"filterName",value:n,onChange:this.onChange})}),Object(h.jsx)("td",{children:Object(h.jsxs)("select",{className:"form-control",name:"filterStatus",value:a,onChange:this.onChange,children:[Object(h.jsx)("option",{value:-1,children:"T\u1ea5t C\u1ea3"}),Object(h.jsx)("option",{value:0,children:"\u1ea8n"}),Object(h.jsx)("option",{value:1,children:"K\xedch Ho\u1ea1t"})]})}),Object(h.jsx)("td",{})]}),s]})]})})})}}]),n}(a.Component),k=(n(18),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).componentDidMount=function(){if(localStorage&&localStorage.getItem("tasks")){var t=JSON.parse(localStorage.getItem("tasks"));a.setState({tasks:t})}},a.toggleFormAU=function(){a.state.openTaskChange&&null!==a.state.taskEditing?a.setState({openTaskChange:!0,taskEditing:null}):a.setState({openTaskChange:!a.state.openTaskChange,taskEditing:null})},a.onCloseForm=function(){a.setState({openTaskChange:!1})},a.onShowForm=function(){a.setState({openTaskChange:!0})},a.onSubmit=function(t){var e=a.state.tasks;if(""===t.id)t.id=a.getIdRandom(),e.push(t);else{var n=e.findIndex((function(e){return e.id===t.id}));e[n]=t}a.setState({taskList:e,taskEditing:null}),localStorage.setItem("tasks",JSON.stringify(e))},a.onChangeStatus=function(t){var e=a.state.tasks,n=e.map((function(e){return e.id===t&&(e.status=!e.status),e}));a.setState({tasks:n}),localStorage.setItem("tasks",JSON.stringify(e))},a.onDelete=function(t){var e=a.state.tasks.filter((function(e){return e.id!==t}));a.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e)),a.onCloseForm()},a.onUpdate=function(t){a.onShowForm();var e=a.state.tasks.find((function(e){return e.id===t}));a.setState({taskEditing:e})},a.onFilter=function(t,e){e=+e,a.setState({filter:{name:t.toLowerCase(),status:e}})},a.onSearch=function(t){a.setState({keyworld:t})},a.onSorting=function(t){a.setState({sortBy:t.by,sortValue:t.value})},a.state={tasks:[],openTaskChange:!1,taskEditing:null,filter:{name:"",status:-1},keyworld:"",sortBy:"name",sortValue:1},a}return Object(i.a)(n,[{key:"getIdRandom",value:function(){return Math.random().toString(36).substring(2,8)+Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,7)+Math.random().toString(36).substring(2,15)}},{key:"render",value:function(){var t=this.state,e=t.tasks,n=t.openTaskChange,a=t.taskEditing,s=t.filter,c=t.keyworld,r=t.sortBy,o=t.sortValue;return s&&(s.name&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(s.name)}))),e=e.filter((function(t){return-1===s.status?e:t.status===(1===s.status)}))),c&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(c.toLowerCase())}))),"name"===r?e.sort((function(t,e){return t.name>e.name?o:t.name<e.name?-o:0})):e.sort((function(t,e){return t.status>e.status?-o:t.status<e.status?o:0})),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("h1",{children:"Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c"}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"row",children:[!0===n?Object(h.jsx)(d,{onSubmit:this.onSubmit,reciveOpenTask:this.toggleFormAU,taskEdit:a}):"",Object(h.jsxs)("div",{className:n?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:[Object(h.jsxs)("button",{type:"button",className:"btn btn-primary",onClick:this.toggleFormAU,children:[Object(h.jsx)("span",{className:"fa fa-plus mr-5"}),"Th\xeam c\xf4ng vi\u1ec7c"]}),Object(h.jsx)(g,{onSearch:this.onSearch,onSorting:this.onSorting}),Object(h.jsx)(v,{tasklist:e,receiveChangeStatus:this.onChangeStatus,onDelete:this.onDelete,onUpdate:this.onUpdate,onFilter:this.onFilter})]})]})]})}}]),n}(a.Component)),S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),c(t),r(t)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),S()}},[[19,1,2]]]);
//# sourceMappingURL=main.f536ff26.chunk.js.map