(window.webpackJsonpplayer=window.webpackJsonpplayer||[]).push([[0],{19:function(t,e,a){t.exports=a(37)},29:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){},32:function(t,e,a){},33:function(t,e,a){},34:function(t,e,a){},35:function(t,e,a){},36:function(t,e,a){},37:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),s=a(10),l=a(6),c=(a(29),a(1)),p=a(2),u=a(4),m=a(3),d=a(5),y=a(38),h=(a(30),a(11));function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}var S=function(t){return{type:"UPDATE_PLAYLIST",list:t.list.map((function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(a,!0).forEach((function(e){Object(h.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},t,{index:e})}))}},v=function(t){return{type:"UPDATE_USER_INTENT",intent:t.intent}},E={music:[{id:"helloradio",title:"Hello Radio 90.8",album:"Malayalam",artist:"Kidney federation of India",genre:"Malayalam",source:"http://148.72.210.73:8000/helloradio.ogg",image:"http://www.kidneyvoice.com/wp-content/uploads/2019/07/small-logo.png",trackNumber:1,totalTrackCount:1,duration:9999,site:"http://www.helloradio.in/"},{id:"theeram",title:"Theeram Radio",album:"Malayalam",artist:"Theeram",genre:"Malayalam",source:"http://titan.shoutca.st:8647/stream",image:"https://radiosindia.com/images/theeramradio.jpg",trackNumber:2,totalTrackCount:1,duration:9999,site:"http://radiosindia.com/theeramradio.html"},{id:"whtz",title:"WHTZ-FM - Z100",album:"live",artist:"International",genre:"English",source:"http://c5icyelb.prod.playlists.ihrhls.com/1469_icy",image:"https://upload.wikimedia.org/wikipedia/en/e/e2/WHTZ_logo.png",trackNumber:3,totalTrackCount:1,duration:9999,site:"http://whtzfm.radio.net/"},{id:"shakti",title:"Shakti FM",album:"Tamil",artist:"Shakti",genre:"Tamil",source:"http://live.trusl.com:1160/stream/1/",image:"https://cdn.webrad.io/images/logos/onlineradios-in/shakti.png",trackNumber:4,totalTrackCount:1,duration:9999,site:"https://onlineradios.in/shakti/"},{id:"mirchi",title:"Radio Mirchi 98.3",album:"Hindi",artist:"Radio Mirchi",genre:"Hindi",source:"http://peridot.streamguys.com:7150/Mirchi",image:"https://cdn.webrad.io/images/logos/onlineradios-in/mirchi-fm.png",trackNumber:5,totalTrackCount:1,duration:9999,site:"https://onlineradios.in/mirchi-fm/"},{id:"club",title:"Club FM UAE",album:"Malayalam",artist:"Club FM",genre:"Malayalam",source:"http://20073.live.streamtheworld.com/CLUBFMUAEAAC.aac",image:"https://radiosindia.com/images/clubfm.jpg",trackNumber:6,totalTrackCount:1,duration:9999,site:"https://radiosindia.com/clubfm.html"},{id:"asianet",title:"Asianet Radio Dubai",album:"Malayalam",artist:"Asianet Radio",genre:"Malayalam",source:"http://54.38.73.80:9060/hqstream",image:"https://radiosindia.com/images/asianetradio.jpg",trackNumber:7,totalTrackCount:1,duration:9999,site:"https://radiosindia.com/asianetradio.html"},{id:"radiokerala",title:"Radio Kerala",album:"Malayalam",artist:"Radio Kerala",genre:"Malayalam",source:"https://eu9.fastcast4u.com/proxy/snxwobze?mp=/1",image:"https://radiosindia.com/images/radiokerala.jpg",trackNumber:8,totalTrackCount:1,duration:9999,site:"https://radiosindia.com/radiokerala.html"}]},g=(a(31),a(32),function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={show:!1},a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidUpdate",value:function(t){var e="PLAYING"===this.props.playerStatus;e!==this.state.show&&this.setState({show:e})}},{key:"render",value:function(){return["playListTriangle"].push(this.state.show?"play":"stop"),r.a.createElement(y.a,{in:this.state.show&&this.props.current,out:!this.state.show,timeout:300,className:"playListTriangle"},r.a.createElement("div",null))}}]),e}(r.a.Component)),b=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).checkIfPlaying=function(t){var e=a.props.playerStatus;return a.props.currentStation.id===t&&("PLAYING"===e||"BUFFERING"===e)},a.checkIfSelected=function(t){return a.props.currentStation.id===t},a.playListClick=function(t){return function(){a.player.play(t)(),a.props.updateUserIntent("PLAY")}},a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){this.props.getPlayList(),this.player=this.props.getPlayer()}},{key:"componentDidUpdate",value:function(t){!t.currentStation&&this.props.playList.length&&this.player.play()({autoPlay:!0})}},{key:"render",value:function(){var t=this;return this.props.playListLoader?r.a.createElement("div",{className:"playList hideScroll"},r.a.createElement("div",{className:"list placeholder selected active"}),r.a.createElement("div",{className:"list placeholder selected"}),r.a.createElement("div",{className:"list placeholder selected"}),r.a.createElement("div",{className:"list placeholder selected"}),r.a.createElement("div",{className:"list placeholder selected"}),r.a.createElement("div",{className:"list placeholder selected"}),r.a.createElement("div",{className:"list placeholder selected"})):r.a.createElement("div",{className:"playList hideScroll"},this.props.playList.map((function(e){var a=["list"];return t.checkIfSelected(e.id)&&a.push("selected"),r.a.createElement("div",{className:a.join(" "),key:e.id,onClick:t.playListClick(e)},r.a.createElement(g,{playerStatus:t.props.playerStatus,current:t.checkIfSelected(e.id),selected:t.checkIfSelected(e.id)}),e.title," ",r.a.createElement("div",{className:"lang"},e.genre.slice(0,3)))})))}}]),e}(r.a.PureComponent),L=Object(l.b)((function(t){return{playList:t.playList,playListLoader:t.playListLoader,currentStation:t.currentStation,playerStatus:t.playerStatus}}),(function(t){return{getPlayList:function(){fetch("https://firebasestorage.googleapis.com/v0/b/radio-streamer-6111f.appspot.com/o/playlist.json?alt=media").then((function(t){return t.json()})).then((function(e){t(S({list:e.music}))})).catch((function(e){t(S({list:E.music})),console.error("api failed",e)}))},updateUserIntent:function(e){return t(v({intent:e}))}}}))(b),I=0,O=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).updateIndicator=function(){"PLAYING"!==a.props.playerStatus&&"PLAY"===a.props.userIntent&&window.navigator.onLine&&a.play()({retry:!0}),a.props.updateIndicator()},a.onStatus=function(t){return function(e){"PLAYING"===t&&e&&e.timeStamp&&(I=e.timeStamp,localStorage.setItem("currentStationId",a.props.currentStation.id)),a.props.onStatus(t)(e)}},a.play=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{retry:!1,autoPlay:!1};e.retry&&a.onStatus("WAITING")(),a.onStatus("PAUSE")();var n=a.refs.player;if(e.autoPlay&&localStorage.getItem("currentStationId")){var r=localStorage.getItem("currentStationId"),i=a.props.playList.filter((function(t){return t.id===r}));i.length&&(t=i[0])}t=t||a.props.currentStation,n.src=t.source,n.onloadedmetadata=a.onMeta,n.onaudioprocess=a.audioProcess,n.onplay=a.onStatus("PLAY"),n.onplaying=a.onStatus("PLAYING"),n.onpause=a.onStatus("PAUSE"),n.onwaiting=a.onStatus("WAITING"),n.onstalled=a.onStatus("STALLED"),n.onerror=a.onStatus("ERROR"),n.ontimeupdate=a.props.onTimeUpdate;try{n.play().catch(a.onError)}catch(o){console.error("player",o),a.onError(o)}a.props.setStation({station:t})}},a.onError=function(t){a.onStatus("ERROR")()},a.pause=function(){a.refs.player.pause()},a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){this.player=this.refs.player,window.addEventListener("online",this.updateIndicator),window.addEventListener("offline",this.props.updateIndicator)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("online",this.props.updateIndicator),window.removeEventListener("offline",this.props.updateIndicator)}},{key:"render",value:function(){return r.a.createElement("audio",{ref:"player"})}}]),e}(r.a.PureComponent),N=Object(l.b)((function(t){return{playerStatus:t.playerStatus,playerTime:t.playerTime,currentStation:t.currentStation,playList:t.playList,userIntent:t.userIntent}}),(function(t){return{setStation:function(e){t({type:"SET_STATION",station:e.station})},onStatus:function(e){return function(a){console.log("onStatus",e,a),t({type:"UPDATE_PLAYER_STATUS",status:{status:e}.status})}},onTimeUpdate:function(e){var a=e.timeStamp;t(function(t){return{type:"UPDATE_PLAYER_TIME",timeStamp:t.timeStamp}}({timeStamp:a-I}))},updateIndicator:function(){t({type:"UPDATE_ONLINE_STATUS",status:{status:navigator.onLine}.status})}}}),null,{forwardRef:!0})(O),P=(a(33),a(34),a(35),function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this.props.currentStation||{},e=t.image,a=t.title;return r.a.createElement("div",{className:"playerMeta"},r.a.createElement("div",{className:"icon",style:{backgroundImage:"url(".concat(e,")")}}),r.a.createElement("div",{className:"stationName"},a))}}]),e}(r.a.PureComponent)),T=(a(36),function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){this.now=Date.now()}},{key:"render",value:function(){if("PLAYING"!==this.props.playerStatus)return null;var t=parseInt(this.props.playerTime/1e3),e="0".concat(t%60);e=e.slice(-2);var a="0".concat(parseInt(t/60));a=a.slice(-2);var n=" ".concat(a,":").concat(e);return r.a.createElement("div",{className:"PlayerTimer"},n)}}]),e}(r.a.PureComponent)),j=function(t){function e(){var t,a,n=this;Object(c.a)(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).action=function(){"PLAYING"===a.props.playerStatus||"WAITING"===a.props.playerStatus?(a.player.pause(),a.props.updateUserIntent("PAUSE")):(a.player.play()(),a.props.updateUserIntent("PLAY"))},a.playerIcon=function(){return"PLAYING"===a.props.playerStatus?r.a.createElement("div",{className:"playStopControls stop"}):"PAUSE"===a.props.playerStatus?r.a.createElement("div",{className:"playStopControls play"}):"STALLED"===a.props.playerStatus||"ERROR"===a.props.playerStatus?r.a.createElement("div",{className:"playStopControls stalled"}):r.a.createElement("div",{className:"playStopControls buffer"})},a.changeTrack=function(t){return function(){var e=a.props.playList[0];e="NEXT"===t?a.props.currentStationIndex===a.props.playList.length-1?a.props.playList[0]:a.props.playList[a.props.currentStationIndex+1]:0===a.props.currentStationIndex?a.props.playList[a.props.playList.length-1]:a.props.playList[a.props.currentStationIndex-1],a.props.updateUserIntent("PLAY"),a.player.play(e)()}},a.prevNextIcon=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"triangle"}),r.a.createElement("div",{className:"bar"}))},a.prev=function(){return"INITIALISING"===a.props.playerStatus?null:r.a.createElement("div",{className:"actions prev prevNextControl",onClick:a.changeTrack("PREV")},r.a.createElement(n.prevNextIcon,null))},a.next=function(){return"INITIALISING"===a.props.playerStatus?null:r.a.createElement("div",{className:"actions next prevNextControl",onClick:a.changeTrack("NEXT")},r.a.createElement(n.prevNextIcon,null))},a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){this.player=this.props.getPlayer()}},{key:"render",value:function(){var t=["innerWrapper"];!this.props.playListLoader&&t.push("anim");var e=["playerControls"];return!this.props.playListLoader&&e.push("controlAnim"),r.a.createElement("div",{className:e.join(" ")},r.a.createElement("div",{className:t.join(" ")},!this.props.playListLoader&&r.a.createElement(P,{currentStation:this.props.currentStation}),!this.props.playListLoader&&r.a.createElement(this.prev,null),r.a.createElement("div",{className:"actions",onClick:this.action},r.a.createElement(this.playerIcon,null)),!this.props.playListLoader&&r.a.createElement(this.next,null),r.a.createElement(T,{playerTime:this.props.playerTime,playerStatus:this.props.playerStatus})))}}]),e}(r.a.PureComponent),w=Object(l.b)((function(t){var e=t.playerStatus,a=t.playList,n=t.currentStation,r=t.playListLoader,i=t.playerTime,o=t.onlineStatus,s=t.userIntent;return{playerStatus:e,playList:a,currentStationIndex:n?n.index:0,currentStation:n,playListLoader:r,playerTime:i,onlineStatus:o,userIntent:s}}),(function(t){return{updateUserIntent:function(e){return t(v({intent:e}))}}}))(j),k=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(i)))).state={show:!1},a.player=r.a.createRef(),a.play=function(t){a.player.current.play(t)()},a.getPlayer=function(){return a.player.current},a.offlineMessage=function(){return a.props.onlineStatus?null:r.a.createElement("div",{className:"offlineMessage"},"YOU ARE OFFLINE, MUSIC WILL RESUME WHEN YOU ARE ONLINE")},a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.props.onlineStatus?"":"offline"},r.a.createElement("h1",{className:"colored"},"RADIO KILLER"),r.a.createElement(y.a,{in:this.state.show,timeout:300,classNames:"rkAnim"},r.a.createElement("div",{className:"rkContainer"},r.a.createElement(N,{ref:this.player}),r.a.createElement(L,{play:this.play,getPlayer:this.getPlayer}),r.a.createElement(w,{getPlayer:this.getPlayer})))),r.a.createElement(this.offlineMessage,null))}}]),e}(r.a.PureComponent),A=Object(l.b)((function(t){return{onlineStatus:t.onlineStatus}}))(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function C(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?U(a,!0).forEach((function(e){Object(h.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var M={playerStatus:"INITIALISING",playListLoader:!0,playList:[],currentStation:null,onlineStatus:navigator.onLine,userIntent:"PLAY"},R=Object(s.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_PLAYER_STATUS":return C({},t,{playerStatus:e.status});case"UPDATE_PLAYLIST":return C({},t,{playList:e.list,playListLoader:!1,currentStation:e.list[0]});case"UPDATE_PLAYER_TIME":return C({},t,{playerTime:e.timeStamp});case"SET_STATION":return C({},t,{currentStation:e.station});case"UPDATE_ONLINE_STATUS":return C({},t,{onlineStatus:e.status});case"UPDATE_USER_INTENT":return C({},t,{userIntent:e.intent});default:return t}}));o.a.render(r.a.createElement(l.a,{store:R},r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.caf51b5d.chunk.js.map