module.exports=function(t){var o={};function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)e.d(n,r,function(o){return t[o]}.bind(null,r));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=9)}([function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat["models/Discussion"]},function(t,o){t.exports=flarum.core.compat.Model},function(t,o){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,o){t.exports=flarum.core.compat["utils/PostControls"]},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat["components/Badge"]},,function(t,o,e){"use strict";e.r(o);var n=e(0),r=e(1),a=e.n(r),f=e(4),c=e.n(f),p=e(5),u=e.n(p),s=e(6),i=e.n(s),l=e(3),d=e.n(l),m=e(2),b=e.n(m);b.a.prototype.frontpage=d.a.attribute("frontpage"),b.a.prototype.front=d.a.attribute("front");var g=e(7),x=e.n(g);b.a.prototype.frontpage=d.a.attribute("frontpage"),a.a.initializers.add("fof/frontpage",function(){Object(n.extend)(c.a.prototype,"requestParams",function(t){"front"===this.props.params.sort&&(t.filter.q=(t.filter.q||"")+"is:frontpage")}),Object(n.extend)(c.a.prototype,"sortMap",function(t){delete t.top,delete t.newest,delete t.oldest,t.front="-frontdate",t.top="-commentCount",t.newest="-createdAt",t.oldest="createdAt"}),Object(n.extend)(u.a,"moderationControls",function(t,o){var e=o.discussion().frontpage();o.discussion().front()&&t.add("frontpage",i.a.component({children:app.translator.trans(o.discussion().frontpage()?"core.forum.post_controls.pull_from_front_button":"core.forum.post_controls.push_to_front_button"),icon:"fas fa-home",onclick:function(){e=!e,o.discussion().save({frontpage:e})}}))}),Object(n.extend)(b.a.prototype,"badges",function(t){this.frontpage()&&t.add("frontpage",x.a.component({type:"front",label:app.translator.trans("core.forum.badge.frontpage_tooltip"),icon:"fas fa-home"}),10)})})}]);
//# sourceMappingURL=forum.js.map