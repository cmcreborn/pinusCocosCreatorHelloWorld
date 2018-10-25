cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
    },

    // called every frame
    update: function (dt) {

    },

    // button click for connect testing
    onButtonEvent: function () {
        console.log('onButtonEvent ...');
        var that = this;
        that.label.string = 'onButtonEvent ...';
        var pinus = window.pomelo;
        var host = "your-server-ip-or-domain";
        var port = "3010";
        pinus.init({
            host: host,
            port: port,
            log: true
        }, function () {
            pinus.request("connector.entryHandler.entry", "hello pinus", function (data) {
                console.log(data.msg);
                that.label.string = data.msg;
                pinus.disconnect();
            });
        });
    },

    // button click for publish testing
    onBtnPublish: function () {
        console.log('onBtnPublish ...');
        var that = this;
        that.label.string = 'onBtnPublish ...';
        var pinus = window.pomelo;
        var host = "your-server-ip-or-domain";
        var port = "3010";
        pinus.init({
            host: host,
            port: port,
            log: true
        }, function () {
            pinus.request("connector.entryHandler.publish", "hello pinus", function (data) {
                console.log(data);
                that.label.string = data.payload;
                pinus.disconnect();
            });
        });

    },
});
