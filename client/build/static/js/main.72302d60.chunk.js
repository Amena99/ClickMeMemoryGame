(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(7),o=r.n(c),s=r(1),l=r(2),i=r(4),m=r(3),u=r(5),d=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={clicked:!1},r.handleClick=function(){!0===r.state.clicked?(console.log("double click"),r.props.calculateTopScore()):(console.log("First time click"),r.props.incrementScore(),r.setState({clicked:!0}))},r.resetClickedState=function(){r.setState({clicked:!1})},r}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("img",{src:"./assets/images/kawaii.jpg",onClick:this.handleClick,alt:"insect"}))}}]),t}(a.a.Component),g=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={grid:Array(12).fill(null),score:0,topscore:0},r.incrementScore=function(){var e=r.state.score;console.log("In incrementScore--logging current state.score:"),console.log(e);var t=e+1;console.log(t),r.setState({score:t})},r.calculateTopScore=function(){var e=0;r.state.topscore<r.state.score&&(e=r.state.score,r.setState({topscore:e,score:0}),r.resetAllImgStates())},r.resetAllImgStates=function(){r.ImageButtonElement.current.resetClickedState()},r.ImageButtonElement=a.a.createRef(),r}return Object(u.a)(t,e),Object(l.a)(t,[{key:"renderImage",value:function(){return a.a.createElement(d,{incrementScore:this.incrementScore,calculateTopScore:this.calculateTopScore,ref:this.ImageButtonElement})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("p",null,"Score: ",this.state.score),a.a.createElement("p",null,"Top Score: ",this.state.topscore),a.a.createElement("div",{className:"grid-row"},this.renderImage(),this.renderImage(),this.renderImage(),this.renderImage()),a.a.createElement("div",{className:"grid-row"},this.renderImage(),this.renderImage(),this.renderImage(),this.renderImage()),a.a.createElement("div",{className:"grid-row"},this.renderImage(),this.renderImage(),this.renderImage(),this.renderImage()))}}]),t}(n.Component);var h=function(){return a.a.createElement(g,null)};o.a.render(a.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,r){e.exports=r(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.72302d60.chunk.js.map