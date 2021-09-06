(this["webpackJsonptask-03-react"]=this["webpackJsonptask-03-react"]||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),o=(a(18),a(4)),i=a(5),u=a(7),l=a(6),h=(a(19),a(20),a(1)),m=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.hadleAddInputValue=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase().trim()})},e.handleSubmit=function(t){var a=e.state.imageName;t.preventDefault(),e.props.onSubmit(a),e.resset()},e}return Object(i.a)(a,[{key:"resset",value:function(){this.setState({imageName:""})}},{key:"render",value:function(){var e=this.state.imageName;return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{onChange:this.hadleAddInputValue,name:"imageName",className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e})]})})}}]),a}(n.Component),p=a(12),d=a(3),j=a.n(d),b=a(9),f=a(13);function g(e){var t=e.pictures,a=e.onClick;return t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags;return Object(h.jsx)("li",{className:"ImageGalleryItem",children:Object(h.jsx)("img",{src:n,alt:r,className:"ImageGalleryItem-image",onClick:function(){return a(e)}})},t)}))}function v(e,t){return fetch("".concat("https://pixabay.com/api/","?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=12&key=").concat("22326636-8d9d25d1f9cff7f7e66e8dd75")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u042d\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430, \u0435\u0451 \u043d\u0443\u0436\u043d\u043e \u043a\u0430\u043a-\u0442\u043e \u0440\u0435\u0448\u0438\u0442\u044c"))}))}function O(e){var t=e.onClick;return Object(h.jsx)("div",{className:"more",children:Object(h.jsx)("button",{type:"text",className:"more-loadBtn",onClick:t,children:"Load more"})})}function x(e){var t=e.picture,a=e.onCloseModal;return Object(h.jsx)("div",{className:"Overlay",onClick:a,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:t.largeImageURL,alt:t.tags})})})}var y=a(11),S=a.n(y),k=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={page:1,error:null,picturesData:[],isOpenModal:!1,picture:"",status:"idle"},e.onCloseModal=function(t){"Escape"!==t.code&&t.currentTarget!==t.target||e.setState({isOpenModal:!1})},e.onModalOpen=function(t){e.setState({isOpenModal:!0,picture:t})},e.nextPage=function(){e.setState((function(e){return{page:e.page+=1}}))},e.avtoScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(b.a)(j.a.mark((function e(t,a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state.page,t.imageName===this.props.imageName){e.next=5;break}return this.setState({status:"pending"}),e.next=5,this.loadNewPictures();case 5:if(!(a.page!==n&&n>1)){e.next=9;break}return this.setState({status:"pending-nextBlock"}),e.next=9,this.loadMorePictures();case 9:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCloseModal)}},{key:"loadNewPictures",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.ressetPage(),e.next=3,v(this.props.imageName,this.state.page).then((function(e){t.setState({picturesData:e.hits,status:"resolved"})})).catch((function(e){return t.setState({error:e,status:"rejected"})}));case 3:this.avtoScroll();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadMorePictures",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(this.props.imageName,this.state.page).then((function(e){t.setState((function(t){return{picturesData:[].concat(Object(p.a)(t.picturesData),Object(p.a)(e.hits)),status:"resolved"}}))})).catch((function(e){return t.setState({error:e,status:"rejected"})}));case 2:this.avtoScroll();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"ressetPage",value:function(){this.setState({page:1})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.status,n=e.picturesData,r=e.picture,s=e.isOpenModal;return"idle"===a?Object(h.jsx)("p",{className:"notifyText-onStart",children:"Please! Enter word for searching images"}):"pending"===a?Object(h.jsx)(S.a,{className:"loader",type:"Grid",color:"blue",height:100,width:100,timeout:4e3}):"pending-nextBlock"===a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:"ImageGallery",children:Object(h.jsx)(g,{pictures:n,onClick:this.onModalOpen})}),Object(h.jsx)(S.a,{className:"loader",type:"Grid",color:"blue",height:100,width:100,timeout:4e3})]}):"rejected"===a?f.a.error(t.message):"resolved"===a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:"ImageGallery",children:Object(h.jsx)(g,{pictures:n,onClick:this.onModalOpen})}),s&&Object(h.jsx)(x,{picture:r,onCloseModal:this.onCloseModal}),n.length>0&&Object(h.jsx)(O,{onClick:this.nextPage})]}):void 0}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.onSearchSubmit=function(t){e.setState({imageName:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{onSubmit:this.onSearchSubmit}),Object(h.jsx)(k,{imageName:this.state.imageName})]})}}]),a}(n.Component);c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ede5dae2.chunk.js.map