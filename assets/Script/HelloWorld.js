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

    // called if button click
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
          }, function() {
          pinus.request("connector.entryHandler.entry", "hello pinus", function(data) {
            console.log(data.msg);
            that.label.string = data.msg;
            });
          });
    },
});
