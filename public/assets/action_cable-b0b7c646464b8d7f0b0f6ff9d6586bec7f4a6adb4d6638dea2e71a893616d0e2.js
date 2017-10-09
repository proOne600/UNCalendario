(function(){(function(){(function(){var n=[].slice;this.ActionCable={INTERNAL:{message_types:{welcome:"welcome",ping:"ping",confirmation:"confirm_subscription",rejection:"reject_subscription"},default_mount_path:"/cable",protocols:["actioncable-v1-json","actioncable-unsupported"]},WebSocket:window.WebSocket,logger:window.console,createConsumer:function(n){var e;return null==n&&(n=null!=(e=this.getConfig("url"))?e:this.INTERNAL.default_mount_path),new t.Consumer(this.createWebSocketURL(n))},getConfig:function(t){var n;return n=document.head.querySelector("meta[name='action-cable-"+t+"']"),null!=n?n.getAttribute("content"):void 0},createWebSocketURL:function(t){var n;return t&&!/^wss?:/i.test(t)?(n=document.createElement("a"),n.href=t,n.href=n.href,n.protocol=n.protocol.replace("http","ws"),n.href):t},startDebugging:function(){return this.debugging=!0},stopDebugging:function(){return this.debugging=null},log:function(){var t,e;if(t=1<=arguments.length?n.call(arguments,0):[],this.debugging)return t.push(Date.now()),(e=this.logger).log.apply(e,["[ActionCable]"].concat(n.call(t)))}}}).call(this)}).call(this);var t=this.ActionCable;(function(){(function(){var n=function(t,n){return function(){return t.apply(n,arguments)}};t.ConnectionMonitor=function(){function e(t){this.connection=t,this.visibilityDidChange=n(this.visibilityDidChange,this),this.reconnectAttempts=0}var o,i,r;return e.pollInterval={min:3,max:30},e.staleThreshold=6,e.prototype.start=function(){if(!this.isRunning())return this.startedAt=i(),delete this.stoppedAt,this.startPolling(),document.addEventListener("visibilitychange",this.visibilityDidChange),t.log("ConnectionMonitor started. pollInterval = "+this.getPollInterval()+" ms")},e.prototype.stop=function(){if(this.isRunning())return this.stoppedAt=i(),this.stopPolling(),document.removeEventListener("visibilitychange",this.visibilityDidChange),t.log("ConnectionMonitor stopped")},e.prototype.isRunning=function(){return null!=this.startedAt&&null==this.stoppedAt},e.prototype.recordPing=function(){return this.pingedAt=i()},e.prototype.recordConnect=function(){return this.reconnectAttempts=0,this.recordPing(),delete this.disconnectedAt,t.log("ConnectionMonitor recorded connect")},e.prototype.recordDisconnect=function(){return this.disconnectedAt=i(),t.log("ConnectionMonitor recorded disconnect")},e.prototype.startPolling=function(){return this.stopPolling(),this.poll()},e.prototype.stopPolling=function(){return clearTimeout(this.pollTimeout)},e.prototype.poll=function(){return this.pollTimeout=setTimeout(function(t){return function(){return t.reconnectIfStale(),t.poll()}}(this),this.getPollInterval())},e.prototype.getPollInterval=function(){var t,n,e,i;return i=this.constructor.pollInterval,e=i.min,n=i.max,t=5*Math.log(this.reconnectAttempts+1),Math.round(1e3*o(t,e,n))},e.prototype.reconnectIfStale=function(){if(this.connectionIsStale())return t.log("ConnectionMonitor detected stale connection. reconnectAttempts = "+this.reconnectAttempts+", pollInterval = "+this.getPollInterval()+" ms, time disconnected = "+r(this.disconnectedAt)+" s, stale threshold = "+this.constructor.staleThreshold+" s"),this.reconnectAttempts++,this.disconnectedRecently()?t.log("ConnectionMonitor skipping reopening recent disconnect"):(t.log("ConnectionMonitor reopening"),this.connection.reopen())},e.prototype.connectionIsStale=function(){var t;return r(null!=(t=this.pingedAt)?t:this.startedAt)>this.constructor.staleThreshold},e.prototype.disconnectedRecently=function(){return this.disconnectedAt&&r(this.disconnectedAt)<this.constructor.staleThreshold},e.prototype.visibilityDidChange=function(){if("visible"===document.visibilityState)return setTimeout(function(n){return function(){if(n.connectionIsStale()||!n.connection.isOpen())return t.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = "+document.visibilityState),n.connection.reopen()}}(this),200)},i=function(){return(new Date).getTime()},r=function(t){return(i()-t)/1e3},o=function(t,n,e){return Math.max(n,Math.min(e,t))},e}()}).call(this),function(){var n,e,o,i,r,s=[].slice,c=function(t,n){return function(){return t.apply(n,arguments)}},u=[].indexOf||function(t){for(var n=0,e=this.length;n<e;n++)if(n in this&&this[n]===t)return n;return-1};i=t.INTERNAL,e=i.message_types,o=i.protocols,r=2<=o.length?s.call(o,0,n=o.length-1):(n=0,[]),o[n++],t.Connection=function(){function n(n){this.consumer=n,this.open=c(this.open,this),this.subscriptions=this.consumer.subscriptions,this.monitor=new t.ConnectionMonitor(this),this.disconnected=!0}return n.reopenDelay=500,n.prototype.send=function(t){return!!this.isOpen()&&(this.webSocket.send(JSON.stringify(t)),!0)},n.prototype.open=function(){return this.isActive()?(t.log("Attempted to open WebSocket, but existing socket is "+this.getState()),!1):(t.log("Opening WebSocket, current state is "+this.getState()+", subprotocols: "+o),null!=this.webSocket&&this.uninstallEventHandlers(),this.webSocket=new t.WebSocket(this.consumer.url,o),this.installEventHandlers(),this.monitor.start(),!0)},n.prototype.close=function(t){var n,e;if(n=(null!=t?t:{allowReconnect:!0}).allowReconnect,n||this.monitor.stop(),this.isActive())return null!=(e=this.webSocket)?e.close():void 0},n.prototype.reopen=function(){var n;if(t.log("Reopening WebSocket, current state is "+this.getState()),!this.isActive())return this.open();try{return this.close()}catch(e){return n=e,t.log("Failed to reopen WebSocket",n)}finally{t.log("Reopening WebSocket in "+this.constructor.reopenDelay+"ms"),setTimeout(this.open,this.constructor.reopenDelay)}},n.prototype.getProtocol=function(){var t;return null!=(t=this.webSocket)?t.protocol:void 0},n.prototype.isOpen=function(){return this.isState("open")},n.prototype.isActive=function(){return this.isState("open","connecting")},n.prototype.isProtocolSupported=function(){var t;return t=this.getProtocol(),u.call(r,t)>=0},n.prototype.isState=function(){var t,n;return n=1<=arguments.length?s.call(arguments,0):[],t=this.getState(),u.call(n,t)>=0},n.prototype.getState=function(){var t,n;for(n in WebSocket)if(WebSocket[n]===(null!=(t=this.webSocket)?t.readyState:void 0))return n.toLowerCase();return null},n.prototype.installEventHandlers=function(){var t,n;for(t in this.events)n=this.events[t].bind(this),this.webSocket["on"+t]=n},n.prototype.uninstallEventHandlers=function(){var t;for(t in this.events)this.webSocket["on"+t]=function(){}},n.prototype.events={message:function(t){var n,o,i,r;if(this.isProtocolSupported())switch(i=JSON.parse(t.data),n=i.identifier,o=i.message,r=i.type,r){case e.welcome:return this.monitor.recordConnect(),this.subscriptions.reload();case e.ping:return this.monitor.recordPing();case e.confirmation:return this.subscriptions.notify(n,"connected");case e.rejection:return this.subscriptions.reject(n);default:return this.subscriptions.notify(n,"received",o)}},open:function(){if(t.log("WebSocket onopen event, using '"+this.getProtocol()+"' subprotocol"),this.disconnected=!1,!this.isProtocolSupported())return t.log("Protocol is unsupported. Stopping monitor and disconnecting."),this.close({allowReconnect:!1})},close:function(){if(t.log("WebSocket onclose event"),!this.disconnected)return this.disconnected=!0,this.monitor.recordDisconnect(),this.subscriptions.notifyAll("disconnected",{willAttemptReconnect:this.monitor.isRunning()})},error:function(){return t.log("WebSocket onerror event")}},n}()}.call(this),function(){var n=[].slice;t.Subscriptions=function(){function e(t){this.consumer=t,this.subscriptions=[]}return e.prototype.create=function(n,e){var o,i,r;return o=n,i="object"==typeof o?o:{channel:o},r=new t.Subscription(this.consumer,i,e),this.add(r)},e.prototype.add=function(t){return this.subscriptions.push(t),this.consumer.ensureActiveConnection(),this.notify(t,"initialized"),this.sendCommand(t,"subscribe"),t},e.prototype.remove=function(t){return this.forget(t),this.findAll(t.identifier).length||this.sendCommand(t,"unsubscribe"),t},e.prototype.reject=function(t){var n,e,o,i,r;for(o=this.findAll(t),i=[],n=0,e=o.length;n<e;n++)r=o[n],this.forget(r),this.notify(r,"rejected"),i.push(r);return i},e.prototype.forget=function(t){var n;return this.subscriptions=function(){var e,o,i,r;for(i=this.subscriptions,r=[],e=0,o=i.length;e<o;e++)(n=i[e])!==t&&r.push(n);return r}.call(this),t},e.prototype.findAll=function(t){var n,e,o,i,r;for(o=this.subscriptions,i=[],n=0,e=o.length;n<e;n++)r=o[n],r.identifier===t&&i.push(r);return i},e.prototype.reload=function(){var t,n,e,o,i;for(e=this.subscriptions,o=[],t=0,n=e.length;t<n;t++)i=e[t],o.push(this.sendCommand(i,"subscribe"));return o},e.prototype.notifyAll=function(){var t,e,o,i,r,s,c;for(e=arguments[0],t=2<=arguments.length?n.call(arguments,1):[],r=this.subscriptions,s=[],o=0,i=r.length;o<i;o++)c=r[o],s.push(this.notify.apply(this,[c,e].concat(n.call(t))));return s},e.prototype.notify=function(){var t,e,o,i,r,s,c;for(s=arguments[0],e=arguments[1],t=3<=arguments.length?n.call(arguments,2):[],c="string"==typeof s?this.findAll(s):[s],r=[],o=0,i=c.length;o<i;o++)s=c[o],r.push("function"==typeof s[e]?s[e].apply(s,t):void 0);return r},e.prototype.sendCommand=function(t,n){var e;return e=t.identifier,this.consumer.send({command:n,identifier:e})},e}()}.call(this),function(){t.Subscription=function(){function t(t,e,o){this.consumer=t,null==e&&(e={}),this.identifier=JSON.stringify(e),n(this,o)}var n;return t.prototype.perform=function(t,n){return null==n&&(n={}),n.action=t,this.send(n)},t.prototype.send=function(t){return this.consumer.send({command:"message",identifier:this.identifier,data:JSON.stringify(t)})},t.prototype.unsubscribe=function(){return this.consumer.subscriptions.remove(this)},n=function(t,n){var e,o;if(null!=n)for(e in n)o=n[e],t[e]=o;return t},t}()}.call(this),function(){t.Consumer=function(){function n(n){this.url=n,this.subscriptions=new t.Subscriptions(this),this.connection=new t.Connection(this)}return n.prototype.send=function(t){return this.connection.send(t)},n.prototype.connect=function(){return this.connection.open()},n.prototype.disconnect=function(){return this.connection.close({allowReconnect:!1})},n.prototype.ensureActiveConnection=function(){if(!this.connection.isActive())return this.connection.open()},n}()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd&&define(t)}).call(this);