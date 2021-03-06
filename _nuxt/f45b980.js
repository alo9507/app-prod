(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8,9],{825:function(t,e,n){"use strict";n.r(e);var o={props:{githubUserId:{type:String,default:""},fromAddress:{type:String,default:""},forceShowAddress:{type:Boolean,default:!1}},data:function(){return{githubUser:null}},mounted:function(){var t=this;this.githubUserId?this.$github.getUserById(this.githubUserId).then((function(e){t.githubUser=e})):this.fromAddress&&this.$subgraph.getUserAddress(this.fromAddress).then((function(e){e&&t.$github.getUserById(e.user.id).then((function(e){t.githubUser=e}))}))}},r=n(11),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.githubUser?n("div",{staticClass:"d-flex align-items-center"},[n("GithubAvatar",{attrs:{"profile-url":t.githubUser.url,"avatar-url":t.githubUser.avatarUrl}}),t._v(" "),n("div",{staticClass:"d-flex flex-column"},[n("a",{staticClass:"font-weight-bold",attrs:{href:t.githubUser.url,target:"_blank"}},[t._v("\n        "+t._s(t.githubUser.login)+"\n      ")]),t._v(" "),t.fromAddress&&t.forceShowAddress?n("a",{staticClass:"d-flex text-muted",attrs:{href:"https://etherscan.com/address/"+t.fromAddress,target:"_blank"}},[n("small",[n("AddressShort",{attrs:{address:t.fromAddress}})],1)]):t._e()])],1):t.fromAddress?n("div",[n("a",{staticClass:"font-weight-bold",attrs:{href:"https://etherscan.com/address/"+t.fromAddress,target:"_blank"}},[n("AddressShort",{attrs:{address:t.fromAddress}})],1)]):n("div",[n("font-awesome-icon",{staticClass:"text-muted-light",attrs:{icon:["fas","circle-notch"],spin:""}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GithubAvatar:n(385).default,AddressShort:n(384).default})},831:function(t,e,n){var content=n(838);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("82d5a4fc",content,!0,{sourceMap:!1})},836:function(t,e,n){var content=n(848);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("1ddbc26c",content,!0,{sourceMap:!1})},837:function(t,e,n){"use strict";n(831)},838:function(t,e,n){var o=n(27)(!1);o.push([t.i,".issue[data-v-6dd52981]{border-top:1px solid fff;cursor:pointer;position:relative}.issue[data-v-6dd52981]:hover{background:#f8f8f8}.issue.showDetails[data-v-6dd52981]{background:#f8f8f8;box-shadow:inset 0 0 7px rgba(0,0,0,.2)}.issue.showDetails .details[data-v-6dd52981]{max-height:40px;cursor:default}.issue.showDetails .details.action[data-v-6dd52981]{max-height:100px}.issue.showDetails .details.deposits[data-v-6dd52981]{max-height:350px}",""]),t.exports=o},842:function(t,e,n){"use strict";n.r(e);n(142),n(82),n(108),n(65),n(104),n(21),n(109);var o=n(1),r=n(14);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={mixins:[n(46).a],props:{issue:{type:Object,default:null}},data:function(){return{issueNode:null,showDetails:!1,action:null,refundingDeposit:!1,isRepoAdmin:!1,linkedPullRequests:[],loading:!1,canWithdrawIssue:!1}},computed:c(c({},Object(r.b)(["account","githubUser","githubAccessToken"])),{},{sortedLinkedPullRequests:function(){return this.linkedPullRequests.filter((function(t){return t})).sort((function(a){return"MERGED"===a.state?-1:1}))}}),watch:{showDetails:function(t){var e=this;t&&(this.githubUser?this.$github.isRepoAdmin(this.githubUser.login,this.issueNode.owner,this.issueNode.repository).then((function(t){return e.isRepoAdmin=t})).catch((function(){return e.isRepoAdmin=!1})):this.isRepoAdmin=!1,this.linkedPullRequests=[],this.$axios.$get("".concat("https://octobay.uber.space/v1","/github/linked-pullrequests/").concat(this.issueNode.id)).then((function(t){t.forEach((function(t){e.$github.getPullRequestById(t).then((function(t){e.linkedPullRequests.push(t)}))}))})).catch((function(){return e.linkedPullRequests=[]})))}},mounted:function(){var t=this;this.loading=!0,this.$github.getIssueById(this.issue.id).then((function(e){e&&(t.issueNode={id:e.id,number:e.number,title:e.title,owner:e.repository.owner.login,repository:e.repository.name,repositoryOwner:e.repository.owner.login,primaryLanguage:e.repository.primaryLanguage,labels:e.labels.edges.map((function(label){return label.node})),closed:e.closed},t.githubUser?t.$axios.$get("https://octobay.uber.space/v1"+"/github/can-withdraw-from-issue/".concat(t.githubUser.node_id,"/").concat(t.issueNode.id)).then((function(e){t.canWithdrawIssue=e})):t.canWithdrawIssue=!1)})).finally((function(){return t.loading=!1}))},methods:{fundIssue:function(){this.$store.commit("setRedirectPrefills",{type:"send-issue",username:this.issueNode.owner,repository:this.issueNode.repository,issue:this.issueNode.number,amount:"1.0"}),this.$store.commit("setView","send")},claimIssue:function(){this.$store.commit("setRedirectPrefills",{type:"claim-issue",url:"https://github.com/"+this.issueNode.owner+"/"+this.issueNode.repository+"/issues/"+this.issueNode.number}),this.$store.commit("setView","claim")},changeAction:function(t){this.action===t?this.action=null:this.action=t},refundIssueDeposit:function(t){var e=this;this.refundingDeposit=t,this.octobay.methods.refundIssueDeposit(t).send({from:this.account}).then((function(){e.$store.commit("removeDeposit",{issueId:e.issue.id,depositId:t})})).catch((function(t){return console.log(t)})).finally((function(){return e.refundingDeposit=!1}))}}},h=(n(837),n(11)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[!t.loading&&t.issueNode?n("div",{class:["issue d-flex flex-column",{showDetails:t.showDetails}],on:{click:function(e){t.showDetails=!t.showDetails}}},[n("div",{staticClass:"position-relative"},[n("div",{staticClass:"d-flex align-items-top px-3 py-2"},[n("div",{class:{"text-truncate":!t.showDetails}},[n("small",{staticClass:"text-muted text-truncate"},[n("small",[n("font-awesome-icon",{staticClass:"text-muted-light",attrs:{icon:["fas","check-double"]}}),t._v("\n              "+t._s(t.issueNode.owner)+"/"+t._s(t.issueNode.repository)+"\n            ")],1)]),t._v(" "),n("div",{class:{"text-truncate":!t.showDetails}},[t.issue.boostAmount?n("span",[n("svg",{staticStyle:{width:"14px",height:"14px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12M8.8,14L10,12.8V4H14V12.8L15.2,14H8.8Z"}})])]):t._e(),t._v("\n            "+t._s(t.issueNode.title)+"\n          ")])]),t._v(" "),n("div",{staticClass:"text-nowrap text-right ml-auto pl-3"},[n("div",{staticClass:"mb-0 d-flex align-items-center"},[n("div",{staticClass:"text-center d-flex flex-column align-items-end"},[n("div",[t._v("\n                "+t._s(t.$web3utils.fromWei(t.issue.depositAmount,"ether"))+"\n                "),n("img",{attrs:{src:"/eth-logo.png",width:"16px",height:"16"}})])])])])]),t._v(" "),t.issueNode.primaryLanguage?n("div",{class:["px-3 pb-3",{"text-truncate":!t.showDetails}],staticStyle:{"text-overflow":"' ...'"}},[n("span",{class:"mr-1 badge badge-pill"+(t.brightnessByColor(t.issueNode.primaryLanguage.color)<180?" text-white":""),style:"background-color: "+t.issueNode.primaryLanguage.color},[t._v("\n          "+t._s(t.issueNode.primaryLanguage.name)+" ")]),t._l(t.issueNode.labels,(function(label){return n("span",{key:label.color,class:"mr-1 badge badge-pill"+(t.brightnessByColor("#"+label.color)<180?" text-white":""),style:"background-color: #"+label.color},[t._v("\n          "+t._s(label.name)+"\n        ")])}))],2):t._e()]),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.showDetails?n("div",{class:["d-flex flex-column justify-content-start align-items-center",{action:!!t.action,deposits:"deposits"==t.action}],staticStyle:{cursor:"default"},on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"border-top border-bottom w-100 py-2 text-nowrap d-flex justify-content-between align-items-center px-4"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Fund issue",trigger:"hover"},expression:"{ content: 'Fund issue', trigger: 'hover' }"}],staticClass:"btn btn-sm btn-light text-muted",on:{click:function(e){return t.fundIssue()}}},[n("font-awesome-icon",{attrs:{icon:["fas","plus"]}})],1),t._v(" "),n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Deposits",trigger:"hover"},expression:"{ content: 'Deposits', trigger: 'hover' }"}],class:["btn btn-sm btn-light text-muted",{active:"deposits"===t.action}],on:{click:function(e){return t.changeAction("deposits")}}},[n("font-awesome-icon",{attrs:{icon:["fas","coins"]}})],1),t._v(" "),n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Pull Requests",trigger:"hover"},expression:"{ content: 'Pull Requests', trigger: 'hover' }"}],class:["btn btn-sm btn-light text-muted",{active:"pull-requests"===t.action}],on:{click:function(e){return t.changeAction("pull-requests")}}},[n("span",{domProps:{innerHTML:t._s(t.$octicons["git-pull-request"].toSVG())}})]),t._v(" "),n("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Open on GitHub",trigger:"hover"},expression:"{ content: 'Open on GitHub', trigger: 'hover' }"}],staticClass:"btn btn-sm btn-light text-muted",attrs:{href:"https://github.com/"+t.issueNode.owner+"/"+t.issueNode.repository+"/issues/"+t.issueNode.number,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}}),t._v(" "),n("font-awesome-icon",{staticClass:"text-muted-light ml-1",attrs:{icon:["fas","external-link-alt"]}})],1),t._v(" "),t.canWithdrawIssue?n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Claim",trigger:"hover"},expression:"{ content: 'Claim', trigger: 'hover' }"}],staticClass:"btn btn-sm btn-primary shadow-sm",on:{click:function(e){return t.claimIssue()}}},[n("font-awesome-icon",{attrs:{icon:["fas","hand-holding-usd"]}})],1):t._e()]),t._v(" "),n("div",{staticClass:"w-100 px-3"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},["deposits"===t.action?n("div",{key:"deposits",staticClass:"py-3"},t._l(t.issue.deposits,(function(e,o){return n("div",{key:o,staticClass:"d-flex mb-2 justify-content-between align-items-center"},[n("div",{staticClass:"d-flex flex-column"},[n("h5",{staticClass:"mb-0"},[t._v("\n                    "+t._s(Number(t.$web3utils.fromWei(e.amount,"ether")))+"\n                    "),n("small",[t._v("ETH")])]),t._v(" "),n("small",{staticClass:"text-muted"},[n("GithubUser",{attrs:{"from-address":e.from}})],1)]),t._v(" "),e.from===t.account?n("button",{staticClass:"btn btn-primary shadow-sm",attrs:{disabled:t.refundingDeposit},on:{click:function(n){return t.refundIssueDeposit(e.id)}}},[t.refundingDeposit===e.id?n("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}}):n("span",[t._v("withdraw")])],1):t._e()])})),0):t._e(),t._v(" "),"pull-requests"===t.action?n("div",{key:"pull-requests",staticClass:"py-3"},[n("a",{staticClass:"btn btn-sm btn-dark btn-block",attrs:{href:"https://github.com/"+t.issueNode.owner+"/"+t.issueNode.repository+"/fork"}},[n("span",{domProps:{innerHTML:t._s(t.$octicons["repo-forked"].toSVG())}}),t._v("\n                start working\n              ")]),t._v(" "),t.linkedPullRequests.length?n("div",t._l(t.sortedLinkedPullRequests,(function(e){return n("a",{key:e.id,staticClass:"btn btn-light btn-sm btn-block mt-2 d-flex align-items-center border-light",attrs:{href:e.url,target:"_blank"}},[n("svg",{class:"text-"+("MERGED"==e.state?"merged":"CLOSED"==e.state?"danger":"success"),staticStyle:{width:"19px",height:"19px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M6,3A3,3 0 0,1 9,6C9,7.31 8.17,8.42 7,8.83V15.17C8.17,15.58 9,16.69 9,18A3,3 0 0,1 6,21A3,3 0 0,1 3,18C3,16.69 3.83,15.58 5,15.17V8.83C3.83,8.42 3,7.31 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5M6,17A1,1 0 0,0 5,18A1,1 0 0,0 6,19A1,1 0 0,0 7,18A1,1 0 0,0 6,17M21,18A3,3 0 0,1 18,21A3,3 0 0,1 15,18C15,16.69 15.83,15.58 17,15.17V7H15V10.25L10.75,6L15,1.75V5H17A2,2 0 0,1 19,7V15.17C20.17,15.58 21,16.69 21,18M18,17A1,1 0 0,0 17,18A1,1 0 0,0 18,19A1,1 0 0,0 19,18A1,1 0 0,0 18,17Z"}})]),t._v(" "),n("span",{staticClass:"mr-auto ml-2 pr-2 text-truncate"},[t._v(t._s(e.title))]),t._v(" "),e.autoMergeRequest?n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{trigger:"hover",content:"AutoMerge enabled"},expression:"{\n                      trigger: 'hover',\n                      content: 'AutoMerge enabled',\n                    }"}],staticClass:"badge badge-light mr-2 rounded-xl"},[n("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"]}}),t._v(" "),n("font-awesome-icon",{attrs:{icon:["fas","angle-double-right"]}})],1):t._e(),t._v("\n                  "+t._s(e.comments.totalCount)+"\n                  "),n("font-awesome-icon",{staticClass:"ml-1 mr-2 text-muted",attrs:{icon:["far","comment-alt"]}})],1)})),0):n("small",{staticClass:"text-muted d-block text-center mt-2"},[t._v("\n                No linked pull requests yet.\n              ")]),t._v(" "),n("small",{staticClass:"d-block text-center"},[n("a",{attrs:{href:"https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword",target:"_blank"}},[t._v("\n                  What does that mean?\n                ")])])]):t._e()])],1)]):t._e()])],1):t.loading?n("div",{staticClass:"d-flex justify-content-center p-4 m-3 rounded-lg"},[n("font-awesome-icon",{staticClass:"text-muted-light",attrs:{icon:["fas","circle-notch"],spin:""}})],1):t.loading||t.issueNode?t._e():n("div",{staticClass:"d-flex justify-content-center p-3 rounded-lg"},[n("small",{staticClass:"text-muted d-block text-center border rounded-xl px-3 py-1"},[n("small",[n("font-awesome-icon",{attrs:{icon:["fas","exclamation-triangle"]}})],1),t._v("\n      Issue not found.\n    ")])])])}),[],!1,null,"6dd52981",null);e.default=component.exports;installComponents(component,{GithubUser:n(825).default})},847:function(t,e,n){"use strict";n(836)},848:function(t,e,n){var o=n(27)(!1);o.push([t.i,".issue-list[data-v-7fa1b240]{margin:0 -1.25rem}.issue-list>a[data-v-7fa1b240]{border:1px solid eee;color:#333}.issue-list>a[data-v-7fa1b240]:hover{border-color:transparent;background:#0366d6;color:#fff}.issue-list>a:hover .text-danger[data-v-7fa1b240],.issue-list>a:hover .text-muted[data-v-7fa1b240]{color:#fff!important}.issue-list>a:hover .badge-pill[data-v-7fa1b240]{background:#fff;color:#0366d6}",""]),t.exports=o},858:function(t,e,n){"use strict";n.r(e);n(82),n(387);var o=n(1),r=n(14);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{showIssuesNum:10}},computed:c(c({},Object(r.b)(["issues"])),{},{issuesSorted:function(){return this.issues.filter((function(t){return 0===t.status})).sort((function(a,b){return a.boostAmount===b.boostAmount?a.depositAmount<b.depositAmount:a.boostAmount<b.boostAmount}))},issuesLazy:function(){return this.issuesSorted.slice(0,this.showIssuesNum)}}),mounted:function(){this.$store.dispatch("updateIssues")}},h=(n(847),n(11)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card-body pb-0"},[t.issuesLazy.length?n("div",{staticClass:"issue-list"},t._l(t.issuesLazy,(function(t){return n("Issue",{key:t.id,attrs:{issue:t}})})),1):n("div",{staticClass:"text-center text-muted my-3"},[t._v("\n      Currently no pinned issues.\n    ")])]),t._v(" "),t.issues.length>t.showIssuesNum?n("div",{staticClass:"card-body p-0"},[n("button",{staticClass:"btn btn-lg btn-light text-center btn-block",staticStyle:{"border-top-left-radius":"0","border-top-right-radius":"0"},on:{click:function(e){t.showIssuesNum+=10}}},[t._v("\n      more\n    ")])]):t._e()])}),[],!1,null,"7fa1b240",null);e.default=component.exports;installComponents(component,{Issue:n(842).default})}}]);