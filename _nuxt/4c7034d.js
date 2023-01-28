(window.webpackJsonp=window.webpackJsonp||[]).push([[24,10,16,17],{396:function(t,e,n){"use strict";n.r(e);var r=n(52),o=(n(42),n(14),n(13),n(10),n(15),n(11),n(16),n(3)),c=(n(8),n(56),n(118));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"AppAccountHeaderComponent",props:{account:{type:Object,required:!0}},computed:d(d({},Object(c.b)("auth",["user"])),{},{getCurrent:function(){return"_id"in this.account&&this.account._id.toString()===this.user._id.toString()?["profile"]:["user",this.account._id]}})},v=n(67),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"account"},[e("div",{staticClass:"account-avatar"},[e("nuxt-link",{attrs:{to:t.$getRoutePath.apply(t,Object(r.a)(t.getCurrent))}},[e("img",{attrs:{src:t.account.image,alt:"profile logo"}})])],1),t._v(" "),e("div",{staticClass:"account-info"},[e("div",{staticClass:"account-name"},[e("nuxt-link",{attrs:{to:t.$getRoutePath.apply(t,Object(r.a)(t.getCurrent))}},[e("h3",[t._v(t._s(t.account.name))])])],1),t._v(" "),e("div",{staticClass:"account-email"},[e("nuxt-link",{attrs:{to:t.$getRoutePath.apply(t,Object(r.a)(t.getCurrent))}},[e("p",[t._v(t._s(t.account.email))])])],1)]),t._v(" "),t._t("actions")],2)}),[],!1,null,null,null);e.default=component.exports},424:function(t,e,n){"use strict";var r=n(39);n(73);e.a={methods:{removeLike:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.$loader.show(),n.prev=1,n.next=4,e.$api.postLike.removePostLike({},{id:t._id});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),e.handleError(n.t0);case 9:return n.prev=9,e.$loader.hide(),n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[1,6,9,12]])})))()},addLike:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.$loader.show(),n.prev=1,n.next=4,e.$api.postLike.addPostLike({},{id:t._id});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),e.handleError(n.t0);case 9:return n.prev=9,e.$loader.hide(),n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[1,6,9,12]])})))()},savePost:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.$loader.show(),n.prev=1,n.next=4,e.$api.postSave.savePost({},{id:t._id});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),e.handleError(n.t0);case 9:return n.prev=9,e.$loader.hide(),n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[1,6,9,12]])})))()},removeSavedPost:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.$loader.show(),n.prev=1,n.next=4,e.$api.postSave.removeSavedPost({},{id:t._id});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),e.handleError(n.t0);case 9:return n.prev=9,e.$loader.hide(),n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[1,6,9,12]])})))()},deletePostItem:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.$loader.show(),n.prev=1,n.next=4,e.$api.posts.deletePostsItem({},{id:t._id});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),e.handleError(n.t0);case 9:return n.prev=9,e.$loader.hide(),n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[1,6,9,12]])})))()},showLikeList:function(data){this.postItem=data,this.$bvModal.show("likedUsersModal")},closeLikedUsersModal:function(){this.postItem={}},showMoreInfo:function(data){this.postItem=data,this.$bvModal.show("moreInfoPostModal")},closeMoreInfoPostModal:function(){this.postItem={}},showDeleteItem:function(data){this.postItem=data,this.$bvModal.show("deletePost")}}}},429:function(t,e,n){"use strict";var r=n(21);e.a=new r.default},446:function(t,e,n){"use strict";n.r(e);var r=n(52),o=(n(42),n(13),n(82),n(14),n(10),n(15),n(11),n(16),n(39)),c=n(3),l=(n(73),n(8),n(56),n(119),n(27),n(118));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"PostComponent",components:{AppAccountHeader:n(396).default},props:{post:{type:Object,required:!0}},computed:m(m({},Object(l.b)("auth",["user"])),{},{getOwnPost:function(){return"user"in this.post&&this.post.user._id.toString()===this.user._id.toString()},getLike:function(){var t=this;return!(!("likes"in this.post)||!this.post.likes.find((function(e){return e._id.toString()===t.user._id.toString()})))},getSave:function(){var t=this;return!(!("savedUsers"in this.post)||!this.post.savedUsers.find((function(e){return e._id.toString()===t.user._id.toString()})))}}),methods:{getRouteAccount:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"_id"in t&&t._id.toString()===this.user._id.toString()?["profile"]:["user",t._id]},copyPostURL:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://socialex-static.vercel.app/posts/".concat(data._id),e.prev=1,e.next=4,navigator.clipboard.writeText(n);case 4:t.$notify({message:"Copied to clipboard",variant:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.handleError(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},formatTime:function(){if("createdData"in this.post){var t=new Date(this.post.createdData),e=t.getFullYear(),n=t.getMonth(),r=t.getDay(),o=t.getHours(),c=t.getMinutes();return"".concat(r,".0").concat(n+1,".").concat(e," ").concat(o,":").concat(c<10?"0".concat(c):c)}},like:function(){this.getLike?this.$emit("unlike"):this.$emit("like")},save:function(){this.getSave?this.$emit("unsave"):this.$emit("save")},showLikedUsersListBtn:function(){this.$emit("likeList",this.post)},showMoreInfoBtn:function(){this.$emit("getMoreInfo",this.post)},deleteItemBtn:function(){this.$emit("deletePost",this.post)}}},f=v,h=n(67),component=Object(h.a)(f,(function(){var t,e,n=this,o=n._self._c;return o("div",{staticClass:"d-flex post-main"},[o("div",{staticClass:"post-main__left w-50"},[o("b-carousel",{attrs:{id:"carousel-1",controls:(null===(t=n.post.media)||void 0===t?void 0:t.length)>1,indicators:(null===(e=n.post.media)||void 0===e?void 0:e.length)>1,interval:0}},n._l(n.post.media,(function(t,e){return o("b-carousel-slide",{key:e,attrs:{alt:"Image"},scopedSlots:n._u([{key:"img",fn:function(){return[o("img",{staticClass:"d-block mx-auto post-main__left-item w-100",attrs:{src:t.url}})]},proxy:!0}],null,!0)})})),1)],1),n._v(" "),o("div",{staticClass:"post-main__right w-50"},[o("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"},scopedSlots:n._u([{key:"header",fn:function(){return[o("AppAccountHeader",{staticClass:"account--post",attrs:{account:n.post.user?n.post.user:{}},scopedSlots:n._u([{key:"actions",fn:function(){return[o("div",{staticClass:"post__top-more"},[o("b-dropdown",{staticClass:"post__top-more-btn",attrs:{id:"dropdown-dropup",dropdown:"",dropleft:""},scopedSlots:n._u([{key:"button-content",fn:function(){return[o("b-icon",{attrs:{icon:"three-dots"}})]},proxy:!0}])},[n._v(" "),o("div",{staticClass:"d-flex py-1 px-2 justify-content-between dropdown-item-btn",on:{click:function(t){return n.copyPostURL(n.post)}}},[o("span",{staticClass:"post__dropdown__item-more-link"},[n._v("Copy link")]),n._v(" "),o("span",{staticClass:"post__dropdown__item-more-icon"},[o("b-icon",{attrs:{icon:"link-45deg"}})],1)]),n._v(" "),n.getOwnPost?n._e():o("div",{staticClass:"d-flex py-1 px-2 justify-content-between dropdown-item-btn",on:{click:function(t){n.$router.push(n.$getRoutePath("user",n.post.user._id))}}},[o("span",{staticClass:"post__dropdown__item-more-link"},[n._v("Author account")]),n._v(" "),o("span",{staticClass:"post__dropdown__item-more-icon"},[o("b-icon",{attrs:{icon:"person"}})],1)]),n._v(" "),n.getOwnPost?o("div",{staticClass:"d-flex py-1 px-2 justify-content-between dropdown-item-btn",on:{click:n.showMoreInfoBtn}},[o("span",{staticClass:"post__dropdown__item-more-link"},[n._v("More post")]),n._v(" "),o("span",{staticClass:"post__dropdown__item-more-icon"},[o("b-icon",{attrs:{icon:"bar-chart-line"}})],1)]):n._e(),n._v(" "),n.getOwnPost?o("div",{staticClass:"d-flex py-1 px-2 justify-content-between dropdown-item-btn",on:{click:function(t){n.$router.push(n.$getRoutePath("editPost",n.post._id))}}},[o("span",{staticClass:"post__dropdown__item-more-link"},[n._v("Edit post")]),n._v(" "),o("span",{staticClass:"post__dropdown__item-more-icon"},[o("b-icon",{attrs:{icon:"pencil"}})],1)]):n._e(),n._v(" "),n.getOwnPost?o("div",{staticClass:"d-flex py-1 px-2 justify-content-between dropdown-item-btn",on:{click:n.deleteItemBtn}},[o("span",{staticClass:"post__dropdown__item-more-link"},[n._v("Delete post")]),n._v(" "),o("span",{staticClass:"post__dropdown__item-more-icon"},[o("b-icon",{attrs:{icon:"trash"}})],1)]):n._e()])],1)]},proxy:!0}])})]},proxy:!0},{key:"default",fn:function(){var t;return[o("div",{staticClass:"post__bottom-desc"},[o("h5",[o("router-link",{attrs:{to:n.$getRoutePath.apply(n,Object(r.a)(n.getRouteAccount(n.post.user)))}},[n._v(n._s(null===(t=n.post.user)||void 0===t?void 0:t.name))]),n._v(" "),o("span",[n._v(n._s(n.post.title))])],1),n._v(" "),n.post.description?o("p",{domProps:{innerHTML:n._s(n.post.description)}}):n._e()]),n._v(" "),o("div",{staticClass:"post__comments"},[n._t("post-comments")],2)]},proxy:!0},{key:"footer",fn:function(){var t;return[o("div",{staticClass:"post__bottom"},[o("div",{staticClass:"post__bottom-actions"},[o("span",{class:[{"post__bottom-action--like":n.getLike},"post__bottom-action"],on:{click:n.like}},[o("b-icon",{attrs:{icon:n.getLike?"heart-fill":"heart"}})],1),n._v(" "),o("span",{staticClass:"post__bottom-action post__bottom-action--comment",on:{click:function(t){return n.$emit("add-comment")}}},[o("b-icon",{attrs:{icon:"chat-dots"}})],1),n._v(" "),o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",value:"Copy to clipboard",expression:"'Copy to clipboard'",modifiers:{hover:!0,right:!0}}],staticClass:"post__bottom-action post__bottom-action--send",on:{click:function(t){return n.copyPostURL(n.post)}}},[o("b-icon",{attrs:{icon:"link-45deg"}})],1),n._v(" "),o("span",{staticClass:"post__bottom-action post__bottom-action--save",on:{click:n.save}},[o("b-icon",{attrs:{icon:n.getSave?"bookmark-plus-fill":"bookmark-plus"}})],1)]),n._v(" "),o("div",{staticClass:"post__bottom-info"},[o("span",{staticClass:"post__bottom-info-likes",on:{click:n.showLikedUsersListBtn}},[o("b",[n._v(n._s(null===(t=n.post.likes)||void 0===t?void 0:t.length))]),n._v(" likes")]),n._v(" "),o("span",{staticClass:"post__bottom-info-date"},[n._v("Posted in "+n._s(n.formatTime()))])]),n._v(" "),o("div",{staticClass:"post__bottom-comment"},[n._t("post-input")],2)])]},proxy:!0}],null,!0)})],1)])}),[],!1,null,null,null);e.default=component.exports},447:function(t,e,n){"use strict";n.r(e);n(14),n(13),n(10),n(15),n(11),n(16);var r=n(3),o=(n(8),n(56),n(118)),c=n(396),l=n(429);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"ReplyItem",components:{AppAccountHeader:c.default},props:{item:{type:Object,required:!0}},data:function(){return{showReplies:!1}},computed:m(m({},Object(o.b)("auth",["user"])),{},{getOwnComment:function(){return"user"in this.item&&this.item.user._id.toString()===this.user._id.toString()}}),methods:{replyBtn:function(){l.a.$emit("replyItem",this.item)},editBtn:function(){l.a.$emit("editItem",this.item)},deleteBtn:function(){l.a.$emit("deleteItem",this.item)}}},f=n(67),component=Object(f.a)(v,(function(){var t,e,n=this,r=n._self._c;return r("div",{staticClass:"comment-item"},[r("AppAccountHeader",{staticClass:"account-comment",attrs:{account:n.item.user},scopedSlots:n._u([{key:"actions",fn:function(){return[r("div",{staticClass:"comment-credentials"},[r("span",{staticClass:"comment-reply",on:{click:n.replyBtn}},[r("b-icon",{attrs:{icon:"reply-fill"}})],1),n._v(" "),n.getOwnComment?r("span",{staticClass:"comment-edit",on:{click:n.editBtn}},[r("b-icon",{attrs:{icon:"pencil-fill"}})],1):n._e(),n._v(" "),n.getOwnComment?r("span",{staticClass:"comment-delete",on:{click:n.deleteBtn}},[r("b-icon",{attrs:{icon:"trash"}})],1):n._e()])]},proxy:!0}])}),n._v(" "),r("div",{staticClass:"comment-body"},[r("p",[n._v(n._s(n.item.body))])]),n._v(" "),!n.showReplies&&null!==(t=n.item.comments)&&void 0!==t&&t.length?r("span",{staticClass:"comment-replies-controler",on:{click:function(t){n.showReplies=!0}}},[n._v("Show replies "),r("b-icon",{attrs:{icon:"arrow-bar-down"}})],1):n._e(),n._v(" "),n.showReplies&&null!==(e=n.item.comments)&&void 0!==e&&e.length?r("span",{staticClass:"comment-replies-controler",on:{click:function(t){n.showReplies=!1}}},[n._v("Hide replies "),r("b-icon",{attrs:{icon:"arrow-bar-up"}})],1):n._e(),n._v(" "),n.showReplies?r("div",{staticClass:"comment-replies"},n._l(n.item.comments,(function(t,e){return r("ReplyItem",{key:e,attrs:{item:t}})})),1):n._e()],1)}),[],!1,null,null,null);e.default=component.exports},462:function(t,e,n){"use strict";n.r(e);n(42);var r=n(39),o=(n(13),n(82),n(58),n(73),n(446)),c=n(447),l=n(424),d=n(396),m=n(429),v={name:"PostItemPage",components:{PostMain:o.default,AppAccountHeader:d.default,CommentItem:c.default},mixins:[l.a],middleware:["auth"],data:function(){return{postItem:{},postComments:[],reply:!1,replyItem:{},replyBody:"",editReply:!1,editItem:!1,deleteItem:{}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getPost();case 2:case"end":return e.stop()}}),e)})))()},head:function(){var t,e,n,r,o;return{title:null===(t=this.postItem)||void 0===t?void 0:t.title,meta:[{hid:"og:site_name",property:"og:site_name",content:"SocialEx"},{hid:"og:title",property:"og:title",content:null===(e=this.postItem)||void 0===e?void 0:e.title},{hid:"og:description",property:"og:description",content:null===(n=this.postItem)||void 0===n?void 0:n.description},{hid:"og:image",property:"og:image",content:null!==(r=this.postItem)&&void 0!==r&&r.media?null===(o=this.postItem)||void 0===o?void 0:o.media[0].url:""}]}},created:function(){this.replyItemEvent(),this.editItemEvent(),this.deleteItemEvent()},methods:{getPost:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$loader.show(),e.prev=1,e.next=4,t.$api.posts.getPostItem({},{id:t.$route.params.id});case 4:t.postItem=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.handleError(e.t0);case 10:return e.prev=10,t.$loader.hide(),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})))()},removeLikeClicked:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.removeLike(t.postItem);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t.handleError(e.t0);case 8:return e.prev=8,e.next=11,t.$fetch();case 11:return t.$notify({message:"Post has been unliked sucessfully",variant:"success"}),e.finish(8);case 13:case"end":return e.stop()}}),e,null,[[0,5,8,13]])})))()},addLikeClicked:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.addLike(t.postItem);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t.handleError(e.t0);case 8:return e.prev=8,e.next=11,t.$fetch();case 11:return t.$notify({message:"Post has been liked sucessfully",variant:"success"}),e.finish(8);case 13:case"end":return e.stop()}}),e,null,[[0,5,8,13]])})))()},removeSavedPostClicked:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.removeSavedPost(t.postItem);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t.handleError(e.t0);case 8:return e.prev=8,e.next=11,t.$fetch();case 11:return t.$notify({message:"Post has been removed sucessfully",variant:"success"}),e.finish(8);case 13:case"end":return e.stop()}}),e,null,[[0,5,8,13]])})))()},savePostClicked:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.savePost(t.postItem);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t.handleError(e.t0);case 8:return e.prev=8,e.next=11,t.$fetch();case 11:return t.$notify({message:"Post has been saved sucessfully",variant:"success",delay:2e3}),e.finish(8);case 13:case"end":return e.stop()}}),e,null,[[0,5,8,13]])})))()},replyItemEvent:function(){var t=this;m.a.$on("replyItem",(function(e){t.editReply=!1,t.editItem={},t.reply=!0,t.replyItem=e,t.replyBody=""}))},editItemEvent:function(){var t=this;m.a.$on("editItem",(function(e){t.reply=!1,t.replyItem={},t.editReply=!0,t.editItem=e,t.replyBody=e.body}))},deleteItemEvent:function(){var t=this;m.a.$on("deleteItem",(function(e){t.reply=!1,t.replyItem={},t.editReply=!1,t.editItem={},t.deleteItem=e,t.$bvModal.show("deleteReply")}))},closeReply:function(){this.reply=!1,this.replyItem=!1,this.$refs.addInput.blur(),this.replyBody=""},addReplySubmitted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},t.replyBody.trim()){e.next=5;break}return t.$notify({message:"If you want to add comment input field must not be empty",variant:"warning"}),t.replyBody="",e.abrupt("return");case 5:if(n.body=t.replyBody.trim(),e.prev=6,!t.reply){e.next=12;break}return e.next=10,t.addReply(n,{postId:t.postItem._id,replyId:t.replyItem._id});case 10:e.next=14;break;case 12:return e.next=14,t.addComment(n,t.postItem._id);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),t.handleError(e.t0);case 19:return e.prev=19,e.next=22,t.$fetch();case 22:return t.$notify({message:"Your comment added successfully",variant:"success",delay:2e3}),t.replyBody="",t.reply=!1,t.replyItem={},e.finish(19);case 27:case"end":return e.stop()}}),e,null,[[6,16,19,27]])})))()},editReplySubmitted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},t.replyBody.trim()){e.next=5;break}return t.$notify({message:"If you want to delete comment just click to delete btn",variant:"warning"}),t.replyBody="",e.abrupt("return");case 5:return n.body=t.replyBody.trim(),e.prev=6,e.next=9,t.editComment(n,{postId:t.postItem._id,replyId:t.editItem._id});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),t.handleError(e.t0);case 14:return e.prev=14,e.next=17,t.$fetch();case 17:return t.$notify({message:"Your comment edited successfully",variant:"success",delay:2e3}),t.replyBody="",t.editReply=!1,t.editItem={},e.finish(14);case 22:case"end":return e.stop()}}),e,null,[[6,11,14,22]])})))()},onSubmit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.editReply){e.next=5;break}return e.next=3,t.addReplySubmitted();case 3:e.next=7;break;case 5:return e.next=7,t.editReplySubmitted();case 7:case"end":return e.stop()}}),e)})))()},deleteItemReplyClicked:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.deleteComment({},{postId:t.postItem._id,replyId:t.deleteItem._id});case 3:t.$bvModal.hide("deleteReply"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t.handleError(e.t0);case 9:return e.prev=9,e.next=12,t.$fetch();case 12:return t.$notify({message:"Your comment has been deleted successfully",variant:"success",delay:2e3}),t.deleteItem={},e.finish(9);case 15:case"end":return e.stop()}}),e,null,[[0,6,9,15]])})))()},addComment:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.$loader.show(),r.prev=1,r.next=4,n.$api.postComment.addPostComment({data:t},{id:e});case 4:r.next=9;break;case 6:r.prev=6,r.t0=r.catch(1),n.handleError();case 9:return r.prev=9,n.$loader.hide(),r.finish(9);case 12:case"end":return r.stop()}}),r,null,[[1,6,9,12]])})))()},addReply:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.postId,c=e.replyId,n.$loader.show(),r.prev=2,r.next=5,n.$api.postReply.addPostReply({data:t},{postId:o,replyId:c});case 5:r.next=10;break;case 7:r.prev=7,r.t0=r.catch(2),n.handleError();case 10:return r.prev=10,n.$loader.hide(),r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[2,7,10,13]])})))()},editComment:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.postId,c=e.replyId,n.$loader.show(),r.prev=2,r.next=5,n.$api.postReply.editPostReply({data:t},{postId:o,replyId:c});case 5:r.next=10;break;case 7:r.prev=7,r.t0=r.catch(2),n.handleError();case 10:return r.prev=10,n.$loader.hide(),r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[2,7,10,13]])})))()},deleteComment:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.postId,c=e.replyId,n.$loader.show(),r.prev=2,r.next=5,n.$api.postReply.deletePostReply({data:t},{postId:o,replyId:c});case 5:r.next=10;break;case 7:r.prev=7,r.t0=r.catch(2),n.handleError();case 10:return r.prev=10,n.$loader.hide(),r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[2,7,10,13]])})))()},deletePostItemClicked:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.deletePostItem(t.postItem);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t.handleError(e.t0);case 8:return e.prev=8,t.$router.push(t.$getRoutePath("home")),t.$bvModal.hide("deletePost"),e.finish(8);case 12:case"end":return e.stop()}}),e,null,[[0,5,8,12]])})))()}}},f=n(67),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-page"},[e("PostMain",{attrs:{post:t.postItem},on:{unlike:t.removeLikeClicked,like:t.addLikeClicked,unsave:t.removeSavedPostClicked,save:t.savePostClicked,likeList:function(e){return t.$bvModal.show("likedUsersModal")},getMoreInfo:function(e){return t.$bvModal.show("moreInfoPostModal")},"add-comment":function(e){return t.$refs.addInput.focus()},deletePost:function(e){return t.$bvModal.show("deletePost")}},scopedSlots:t._u([{key:"post-comments",fn:function(){return t._l(t.postItem.comments,(function(t,n){return e("CommentItem",{key:n,attrs:{item:t}})}))},proxy:!0},{key:"post-input",fn:function(){return[t.reply?e("div",{staticClass:"post__bottom-reply"},[e("button",{staticClass:"post__botttom-reply-close",on:{click:t.closeReply}},[e("b-icon",{attrs:{icon:"x"}})],1),t._v(" "),e("p",[t._v("\n          Reply to:\n          "),e("span",{staticClass:"post__bottom-reply-name"},[t._v("@"+t._s(t.replyItem.user.name))])]),t._v(" "),e("p",[t._v("\n          Comment:\n          "),e("span",{staticClass:"post__bottom-reply-body"},[t._v(t._s(t.replyItem.body))])])]):t._e(),t._v(" "),e("form",{staticClass:"post__bottom-input",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.replyBody,expression:"replyBody"}],ref:"addInput",staticClass:"post-comment-input",attrs:{type:"text",placeholder:"Add comment"},domProps:{value:t.replyBody},on:{input:function(e){e.target.composing||(t.replyBody=e.target.value)}}}),t._v(" "),t.editReply?t._e():e("button",{class:[{"button--disabled":!t.replyBody},"button button-sm post-comment-btn"],attrs:{type:"submit",disabled:!t.replyBody}},[t._v("\n          Add\n        ")]),t._v(" "),t.editReply?e("button",{class:[{"button--disabled":!t.replyBody},"button button-sm post-comment-btn"],attrs:{type:"submit",disabled:!t.replyBody}},[t._v("\n          Save\n        ")]):t._e()])]},proxy:!0}])}),t._v(" "),e("client-only",[e("AppModal",{attrs:{id:"likedUsersModal"},scopedSlots:t._u([{key:"title",fn:function(){var n;return[t._v("Likes "),e("b",[t._v(t._s(null===(n=t.postItem.likes)||void 0===n?void 0:n.length))])]},proxy:!0},{key:"default",fn:function(){var n;return t._l(null===(n=t.postItem)||void 0===n?void 0:n.likes,(function(n,r){return e("AppAccountHeader",{key:r,staticClass:"account--item",attrs:{account:n},scopedSlots:t._u([{key:"actions",fn:function(){return[e("div",{staticClass:"sugg-action"},[e("nuxt-link",{attrs:{to:t.$getRoutePath("user",n._id)}},[e("button",{staticClass:"button button--sm"},[t._v("Watch")])])],1)]},proxy:!0}],null,!0)})}))},proxy:!0}])})],1),t._v(" "),e("client-only",[e("AppModal",{attrs:{id:"moreInfoPostModal"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("More about post")]},proxy:!0},{key:"default",fn:function(){var n,r,o;return[e("div",{staticClass:"w-100 d-flex justify-content-center"},[e("div",{staticClass:"w-25 d-flex flex-column align-items-center"},[e("span",[e("b-icon",{attrs:{icon:"heart"}})],1),t._v(" "),e("b",{staticClass:"text-center"},[t._v(t._s(null===(n=t.postItem.likes)||void 0===n?void 0:n.length))])]),t._v(" "),e("div",{staticClass:"w-25 d-flex flex-column align-items-center"},[e("span",[e("b-icon",{attrs:{icon:"bookmark-plus"}})],1),t._v(" "),e("b",{staticClass:"text-center"},[t._v(t._s(null===(r=t.postItem.savedUsers)||void 0===r?void 0:r.length))])]),t._v(" "),e("div",{staticClass:"w-25 d-flex flex-column align-items-center"},[e("span",[e("b-icon",{attrs:{icon:"chat-dots"}})],1),t._v(" "),e("b",{staticClass:"text-center"},[t._v(t._s(null===(o=t.postItem.comments)||void 0===o?void 0:o.length))])])])]},proxy:!0}])})],1),t._v(" "),e("client-only",[e("AppModal",{attrs:{id:"deleteReply"},scopedSlots:t._u([{key:"default",fn:function(){var n;return[e("h5",{staticClass:"mb-4"},[t._v('\n          Are you sure you want to delete comment "'+t._s(null===(n=t.deleteItem)||void 0===n?void 0:n.body)+'" ?\n        ')]),t._v(" "),e("div",{staticClass:"d-flex w-100 justify-content-end"},[e("button",{staticClass:"button mr-2",attrs:{type:"buton"},on:{click:function(e){return t.$bvModal.hide("deleteReply")}}},[t._v("\n            Cancel\n          ")]),t._v(" "),e("button",{staticClass:"button button--danger",attrs:{type:"button"},on:{click:t.deleteItemReplyClicked}},[t._v("\n            Delete\n          ")])])]},proxy:!0}])})],1),t._v(" "),e("client-only",[e("AppModal",{attrs:{id:"deletePost"},scopedSlots:t._u([{key:"default",fn:function(){return[e("h5",{staticClass:"mb-4"},[t._v("Are you sure you want to delete the post ?")]),t._v(" "),e("div",{staticClass:"d-flex w-100 justify-content-end"},[e("button",{staticClass:"button mr-2",attrs:{type:"buton"},on:{click:function(e){return t.$bvModal.hide("deletePost")}}},[t._v("\n            Cancel\n          ")]),t._v(" "),e("button",{staticClass:"button button--danger",attrs:{type:"button"},on:{click:t.deletePostItemClicked}},[t._v("\n            Delete\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);