webpackJsonp([0], [,
    function(t, e, n) {
        "use strict";
        var i = n(2),
        o = n(20),
        r = n(15),
        a = n.n(r),
        s = n(16),
        c = n.n(s),
        u = location.hash;
        i.a.use(o.a);
        var l = new o.a({
            mode: "" === u ? "history": "hash",
            routes: [{
                path: "/short-link/",
                name: "index ",
                component: a.a
            },
            {
                path: "/short-link/:id",
                name: "item ",
                component: c.a
            }]
        });
        e.a = l
    },
    ,
    function(t, e, n) {
        "use strict";
        var i = function() {
            var t = document.location.pathname.split("/"),
            e = t[t.length - 1].split("?")[0];
            return "" === e ? t[t.length - 2] : e
        };
        e.a = i
    },
    ,
    function(t, e, n) {
        n(11);
        var i = n(0)(n(6), n(17), null, null);
        t.exports = i.exports
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        n(1),
        n(3);
        e.
    default = {
            data: function() {
                return {}
            },
            methods: {}
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(9);
        e.
    default = {
            data: function() {
                return {
                    copy: i.a,
                    uri: "https://ie34.com/short-link"
                }
            },
            mounted: function() {
                this.onReady()
            },
            methods: {
                logError: function(t) {
                    var e = this.$refs.h5,
                    n = this.$refs.button;
                    e.style.color = "red",
                    e.textContent = t,
                    n.style.display = "none"
                },
                logSuccess: function(t) {
                    var e = this.$refs.h5,
                    n = this.$refs.button;
                    e.style.color = "#fff",
                    e.textContent = t,
                    n.style.display = "block"
                },
                upload: function() {
                    this.$refs.upload.click()
                },
                weibo: function() {},
                onReady: function() {
                    var t = this,
                    e = new QrCode,
                    n = this.$refs.upload;
                    e.callback = function(e, n) {
                        if (n) {
                            var i = n.result,
                            o = i.split("qr.alipay.com");
                            o[1] ? (t.uri = "https://ie34.com/short-link" + o[1], t.logSuccess(t.uri)) : t.logError("无效二维码")
                        } else t.logError("二维码无法识别，请换一个二维码"),
                        console.error(e)
                    },
                    n.addEventListener("change",
                    function() {
                        for (var n = 0; n < this.files.length; n++) {
                            var i = this.files[n];
                            if (!/^image\//.test(i.type)) return t.logError("请上传图片"),
                            !1;
                            var o = new FileReader;
                            o.addEventListener("load",
                            function() {
                                var n = t.$refs.image;
                                n.style.margin = "20px",
                                n.style.width = "240px",
                                n.src = this.result,
                                e.decode(this.result)
                            }.bind(o), !1),
                            o.readAsDataURL(i)
                        }
                    },
                    !1)
                }
            }
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3);
        e.
    default = {
            data: function() {
                return {
                    loadingTxt: "拼命加载中..."
                }
            },
            mounted: function() {
                this.onReady()
            },
            methods: {
                onReady: function() {
                    function t() {
                        return !! navigator.userAgent.toLowerCase().match(/(Android|SymbianOS)/i)
                    }
                    function e() {
                        return !! /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
                    }
                    function o() {
                        WeixinJSBridge.invoke("jumpToInstallUrl", {},
                        function(t) {}),
                        window.close(),
                        WeixinJSBridge.call("closeWindow")
                    }
                    function r() {
                        "" != c ? location.href = c: (window.close(), WeixinJSBridge.call("closeWindow"))
                    }
                    function a() {
                        return t() ? (o(), !1) : e() ? (r(), !1) : void 0
                    }
                    var s = n.i(i.a)(),
                    c = "https://qr.alipay.com/" + s,
                    u = "https://qr.alipay.com/" + s; !
                    function() {
                        return !! /MicroMessenger/i.test(navigator.userAgent)
                    } () ? "" != u ? location.href = u: window.close() : "undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", a, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", a), document.attachEvent("onWeixinJSBridgeReady", a)) : a()
                }
            }
        }
    },
    function(t, e, n) {
        "use strict";
        var i = function(t, e) {
            try {
                var n = document.getElementById("copyInput");
                n.value = t,
                n.focus(),
                n.select(),
                document.execCommand("copy", !1, null) ? alert("复制成功") : alert("当前浏览器不支持复制操作，请使用Ctrl+c手动复制")
            } catch(t) {
                alert("复制出错")
            }
        };
        e.a = i
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
        o = n(1),
        r = n(5),
        a = n.n(r);
        new i.a({
            el: "#app",
            router: o.a,
            template: "<App/>",
            components: {
                App: a.a
            }
        })
    },
    function(t, e) {},
    , , ,
    function(t, e, n) {
        var i = n(0)(n(7), n(18), null, null);
        t.exports = i.exports
    },
    function(t, e, n) {
        var i = n(0)(n(8), n(19), null, null);
        t.exports = i.exports
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                n = t._self._c || e;
                return n("div", {
                    staticClass: "app"
                },
                [n("input", {
                    staticStyle: {
                        position: "absolute",
                        opacity: "0"
                    },
                    attrs: {
                        type: "text",
                        name: "copyInput",
                        id: "copyInput"
                    }
                }), t._v(" "), n("router-view")], 1)
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "content"
                    }
                },
                [n("h2", [t._v("请上传您的支付宝红包二维码")]), t._v(" "), n("h5", {
                    ref: "h5"
                },
                [t._v("这里显示您的短链接")]), t._v(" "), n("div", {
                    ref: "button",
                    attrs: {
                        id: "button"
                    }
                },
                [n("span", {
                    staticClass: "primary",
                    on: {
                        click: function(e) {
                            t.copy(t.uri)
                        }
                    }
                },
                [t._v("复制链接")]), t._v(" "), t._e()]), t._v(" "), n("input", {
                    ref: "upload",
                    staticStyle: {
                        display: "none"
                    },
                    attrs: {
                        id: "upload",
                        type: "file"
                    }
                }), t._v(" "), n("div", {
                    ref: "preview",
                    attrs: {
                        id: "preview"
                    },
                    on: {
                        click: t.upload
                    }
                },
                [n("img", {
                    ref: "image",
                    attrs: {
                        src: "https://zos.alipayobjects.com/cmsmng/cms/images/ixszvlta/df0ea6a6-170a-4b76-ba00-8c9b860d32a3.png",
                        alt: ""
                    }
                })])])
            },
            staticRenderFns: []
        }
    },
    function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement;
                return (t._self._c || e)("div", [t._v(t._s(t.loadingTxt))])
            },
            staticRenderFns: []
        }
    }], [10]);