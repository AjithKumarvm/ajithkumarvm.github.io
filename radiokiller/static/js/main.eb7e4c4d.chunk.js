(window.webpackJsonpplayer=window.webpackJsonpplayer||[]).push([[0],{19:function(t,e,a){t.exports=a(37)},24:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){},32:function(t,e,a){},33:function(t,e,a){},34:function(t,e,a){},35:function(t,e,a){},36:function(t,e,a){},37:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),i=a(9),o=a.n(i),s=(a(24),a(1)),l=a(2),c=a(4),p=a(3),u=a(5),m=a(8),d=a(10),y=a(38),h=a(11);function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function S(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(a,!0).forEach((function(e){Object(h.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={playerStatus:"INITIALISING",playListLoader:!0,playList:[],currentStation:null};a(30);function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}var v=function(t){return{type:"UPDATE_PLAYLIST",list:t.list.map((function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(a,!0).forEach((function(e){Object(h.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},t,{index:e})}))}},E={music:[{id:"helloradio",title:"Hello Radio 90.8",album:"Malayalam",artist:"Kidney federation of India",genre:"Malayalam",source:"http://148.72.210.73:8000/helloradio.ogg",image:"http://www.kidneyvoice.com/wp-content/uploads/2019/07/small-logo.png",trackNumber:1,totalTrackCount:1,duration:9999,site:"http://www.helloradio.in/"},{id:"theeram",title:"Theeram Radio",album:"Malayalam",artist:"Theeram",genre:"Malayalam",source:"http://titan.shoutca.st:8647/stream",image:"https://radiosindia.com/images/theeramradio.jpg",trackNumber:2,totalTrackCount:1,duration:9999,site:"http://radiosindia.com/theeramradio.html"},{id:"whtz",title:"WHTZ-FM - Z100",album:"live",artist:"International",genre:"English",source:"http://c5icyelb.prod.playlists.ihrhls.com/1469_icy",image:"https://upload.wikimedia.org/wikipedia/en/e/e2/WHTZ_logo.png",trackNumber:3,totalTrackCount:1,duration:9999,site:"http://whtzfm.radio.net/"},{id:"shakti",title:"Shakti FM",album:"Tamil",artist:"Shakti",genre:"Tamil",source:"http://live.trusl.com:1160/stream/1/",image:"https://cdn.webrad.io/images/logos/onlineradios-in/shakti.png",trackNumber:4,totalTrackCount:1,duration:9999,site:"https://onlineradios.in/shakti/"},{id:"mirchi",title:"Radio Mirchi 98.3",album:"Hindi",artist:"Radio Mirchi",genre:"Hindi",source:"http://peridot.streamguys.com:7150/Mirchi",image:"https://cdn.webrad.io/images/logos/onlineradios-in/mirchi-fm.png",trackNumber:5,totalTrackCount:1,duration:9999,site:"https://onlineradios.in/mirchi-fm/"},{id:"club",title:"Club FM UAE",album:"Malayalam",artist:"Club FM",genre:"Malayalam",source:"http://20073.live.streamtheworld.com/CLUBFMUAEAAC.aac",image:"https://radiosindia.com/images/clubfm.jpg",trackNumber:6,totalTrackCount:1,duration:9999,site:"https://radiosindia.com/clubfm.html"},{id:"asianet",title:"Asianet Radio Dubai",album:"Malayalam",artist:"Asianet Radio",genre:"Malayalam",source:"http://54.38.73.80:9060/hqstream",image:"https://radiosindia.com/images/asianetradio.jpg",trackNumber:7,totalTrackCount:1,duration:9999,site:"https://radiosindia.com/asianetradio.html"},{id:"radiokerala",title:"Radio Kerala",album:"Malayalam",artist:"Radio Kerala",genre:"Malayalam",source:"https://eu9.fastcast4u.com/proxy/snxwobze?mp=/1",image:"https://radiosindia.com/images/radiokerala.jpg",trackNumber:8,totalTrackCount:1,duration:9999,site:"https://radiosindia.com/radiokerala.html"}]},O=(a(31),a(32),function(t){function e(){var t,a;Object(s.a)(this,e);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(n)))).state={show:!1},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidUpdate",value:function(t){console.log("componentDidUpdate",t,this.props);var e="PLAYING"===this.props.playerStatus;e!==this.state.show&&this.setState({show:e})}},{key:"render",value:function(){return["playListTriangle"].push(this.state.show?"play":"stop"),n.a.createElement(y.a,{in:this.state.show&&this.props.current,out:!this.state.show,timeout:300,className:"playListTriangle"},n.a.createElement("div",null))}}]),e}(n.a.Component)),L=function(t){function e(){var t,a;Object(s.a)(this,e);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(n)))).checkIfPlaying=function(t){var e=a.props.playerStatus;return a.props.currentStation.id===t&&("PLAYING"===e||"BUFFERING"===e)},a.checkIfSelected=function(t){return a.props.currentStation.id===t},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.props.getPlayList(),this.player=this.props.getPlayer()}},{key:"componentDidUpdate",value:function(t){!t.currentStation&&this.props.playList.length&&this.player.play()({autoPlay:!0})}},{key:"render",value:function(){var t=this;return this.props.playListLoader?n.a.createElement("div",{className:"playList hideScroll"},n.a.createElement("div",{className:"list placeholder selected active"}),n.a.createElement("div",{className:"list placeholder selected"}),n.a.createElement("div",{className:"list placeholder selected"}),n.a.createElement("div",{className:"list placeholder selected"}),n.a.createElement("div",{className:"list placeholder selected"}),n.a.createElement("div",{className:"list placeholder selected"}),n.a.createElement("div",{className:"list placeholder selected"})):n.a.createElement("div",{className:"playList hideScroll"},this.props.playList.map((function(e){var a=["list"];return t.checkIfSelected(e.id)&&a.push("selected"),n.a.createElement("div",{className:a.join(" "),key:e.id,onClick:t.player.play(e)},n.a.createElement(O,{playerStatus:t.props.playerStatus,current:t.checkIfSelected(e.id),selected:t.checkIfSelected(e.id)}),e.title," ",n.a.createElement("div",{className:"lang"},e.genre.slice(0,3)))})))}}]),e}(n.a.PureComponent),j=Object(m.b)((function(t){return{playList:t.playList,playListLoader:t.playListLoader,currentStation:t.currentStation,playerStatus:t.playerStatus}}),(function(t){return{getPlayList:function(){fetch("https://firebasestorage.googleapis.com/v0/b/radio-streamer-6111f.appspot.com/o/playlist.json?alt=media").then((function(t){return t.json()})).then((function(e){t(v({list:e.music}))})).catch((function(e){t(v({list:E.music})),console.error("api failed",e)}))}}}))(L),T=0,N=function(t){function e(){var t,a;Object(s.a)(this,e);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(n)))).attemptTimer=0,a.onStatus=function(t){return function(e){"PLAYING"===t&&e&&e.timeStamp&&(T=e.timeStamp,a.attemptTimer=0,localStorage.setItem("currentStationId",a.props.currentStation.id)),a.props.onStatus(t)(e)}},a.play=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{retry:!1,autoPlay:!1};e.retry?a.onStatus("WAITING")():a.attemptTimer=0,a.onStatus("PAUSE")();var r=a.refs.player;if(e.autoPlay&&localStorage.getItem("currentStationId")){var n=localStorage.getItem("currentStationId"),i=a.props.playList.filter((function(t){return t.id===n}));i.length&&(t=i[0])}t=t||a.props.currentStation,r.src=t.source,r.onloadedmetadata=a.onMeta,r.onaudioprocess=a.audioProcess,r.onplay=a.onStatus("PLAY"),r.onplaying=a.onStatus("PLAYING"),r.onpause=a.onStatus("PAUSE"),r.onwaiting=a.onStatus("WAITING"),r.ondurationchange=a.onStatus("DURATION"),r.onstalled=a.onStatus("STALLED"),r.onerror=a.onStatus("ERROR"),r.ontimeupdate=a.props.onTimeUpdate;try{r.play().catch(a.onError)}catch(o){a.onError(o)}a.props.setStation({station:t})}},a.onError=function(t){a.onStatus("ERROR")(),a.attemptTimer=a.attemptTimer+3e3,setTimeout((function(){"PLAYING"!==a.props.playerStatus&&a.play()({retry:!0})}),a.attemptTimer),console.error("EERR",t)},a.pause=function(){a.refs.player.pause()},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.player=this.refs.player}},{key:"render",value:function(){return n.a.createElement("audio",{ref:"player"})}}]),e}(n.a.PureComponent),I=Object(m.b)((function(t){return{playerStatus:t.playerStatus,playerTime:t.playerTime,currentStation:t.currentStation,playList:t.playList}}),(function(t){return{setStation:function(e){t({type:"SET_STATION",station:e.station})},onStatus:function(e){return function(a){t({type:"UPDATE_PLAYER_STATUS",status:{status:e}.status})}},onTimeUpdate:function(e){var a=e.timeStamp;t(function(t){return{type:"UPDATE_PLAYER_TIME",timeStamp:t.timeStamp}}({timeStamp:a-T}))}}}),null,{forwardRef:!0})(N),k=(a(33),a(34),a(35),function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.currentStation||{},e=t.image,a=t.title;return n.a.createElement("div",{className:"playerMeta"},n.a.createElement("div",{className:"icon",style:{backgroundImage:"url(".concat(e,")")}}),n.a.createElement("div",{className:"stationName"},a))}}]),e}(n.a.PureComponent)),P=(a(36),function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.now=Date.now()}},{key:"render",value:function(){if("PLAYING"!==this.props.playerStatus)return null;var t=parseInt(this.props.playerTime/1e3),e="0".concat(t%60);e=e.slice(-2);var a="0".concat(parseInt(t/60));a=a.slice(-2);var r=" ".concat(a,":").concat(e);return n.a.createElement("div",{className:"PlayerTimer"},r)}}]),e}(n.a.PureComponent)),w=function(t){function e(){var t,a,r=this;Object(s.a)(this,e);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(o)))).action=function(){"PLAYING"===a.props.playerStatus?a.player.pause():a.player.play()()},a.playerIcon=function(){return"PLAYING"===a.props.playerStatus?n.a.createElement("div",{className:"playStopControls stop"}):"PAUSE"===a.props.playerStatus?n.a.createElement("div",{className:"playStopControls play"}):"STALLED"===a.props.playerStatus?n.a.createElement("div",{className:"playStopControls stalled"}):n.a.createElement("div",{className:"playStopControls buffer"})},a.changeTrack=function(t){return function(){var e=a.props.playList[0];e="NEXT"===t?a.props.currentStationIndex===a.props.playList.length-1?a.props.playList[0]:a.props.playList[a.props.currentStationIndex+1]:0===a.props.currentStationIndex?a.props.playList[a.props.playList.length-1]:a.props.playList[a.props.currentStationIndex-1],a.player.play(e)()}},a.prevNextIcon=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"triangle"}),n.a.createElement("div",{className:"bar"}))},a.prev=function(){return"INITIALISING"===a.props.playerStatus?null:n.a.createElement("div",{className:"actions prev prevNextControl",onClick:a.changeTrack("PREV")},n.a.createElement(r.prevNextIcon,null))},a.next=function(){return"INITIALISING"===a.props.playerStatus?null:n.a.createElement("div",{className:"actions next prevNextControl",onClick:a.changeTrack("NEXT")},n.a.createElement(r.prevNextIcon,null))},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.player=this.props.getPlayer(),console.log("this.player",this.player)}},{key:"render",value:function(){var t=["innerWrapper"];!this.props.playListLoader&&t.push("anim");var e=["playerControls"];return!this.props.playListLoader&&e.push("controlAnim"),n.a.createElement("div",{className:e.join(" ")},n.a.createElement("div",{className:t.join(" ")},!this.props.playListLoader&&n.a.createElement(k,{currentStation:this.props.currentStation}),!this.props.playListLoader&&n.a.createElement(this.prev,null),n.a.createElement("div",{className:"actions",onClick:this.action},n.a.createElement(this.playerIcon,null)),!this.props.playListLoader&&n.a.createElement(this.next,null),n.a.createElement(P,{playerTime:this.props.playerTime,playerStatus:this.props.playerStatus})))}}]),e}(n.a.PureComponent),A=Object(m.b)((function(t){var e=t.playerStatus,a=t.playList,r=t.currentStation,n=t.playListLoader,i=t.playerTime;return{playerStatus:e,playList:a,currentStationIndex:r?r.index:0,currentStation:r,playListLoader:n,playerTime:i}}),null)(w),C=Object(d.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_PLAYER_STATUS":return S({},t,{playerStatus:e.status});case"UPDATE_PLAYLIST":return S({},t,{playList:e.list,playListLoader:!1,currentStation:e.list[0]});case"UPDATE_PLAYER_TIME":return S({},t,{playerTime:e.timeStamp});case"SET_STATION":return S({},t,{currentStation:e.station});default:return t}}));window.store=C;var D=function(t){function e(){var t,a;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(i)))).state={show:!1},a.player=n.a.createRef(),a.play=function(t){a.player.current.play(t)()},a.getPlayer=function(){return a.player.current},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"colored"},"RADIO KILLER"),n.a.createElement(y.a,{in:this.state.show,timeout:300,classNames:"rkAnim"},n.a.createElement("div",{className:"rkContainer"},n.a.createElement(m.a,{store:C},n.a.createElement(I,{ref:this.player}),n.a.createElement(j,{play:this.play,getPlayer:this.getPlayer}),n.a.createElement(A,{getPlayer:this.getPlayer})))))}}]),e}(n.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.eb7e4c4d.chunk.js.map