var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");
var Request = require("sdk/request").Request;
var $ = require("jquery");

var button = buttons.ActionButton({
    id: "home-link",
    label: "Visit homepage",
    icon: {
        "16": "./icon/icon-16.png",
        "32": "./icon/icon-32.png",
        "64": "./icon/icon-64.png"
    },
    onClick: handleClick
});

function handleClick(state) {
    tabs.open("http://localhost:8000/url");
}

tabs.on("ready", runScript);

function runScript(tab) {
    Request({
        url: "http://localhost:8000/ping",
        onComplete: function (response) {
            if (response.status === 200){
                var arr = response.json;
                if(arr[0] === 'pong'){
                    blockWebsite(tab);
                    return;
                }
            }
            errorServer(tab);
        }
    }).get();
}

function errorServer(tab) {
    tab.attach({
        contentScriptFile: [
            self.data.url("../node_modules/jquery/dist/jquery.min.js"),
            self.data.url("./content-error.js")
        ]
    });
}
function blockWebsite(tab) {
    Request({
        url: "http://localhost:8000/urls",
        onComplete: function (response) {
            var arr = response.json;
            tab.attach({
                contentScriptFile: [
                    self.data.url("../node_modules/jquery/dist/jquery.min.js"),
                    self.data.url("./content-script.js")
                ],
                contentScriptOptions: {"arr" : arr, 'url': tab.url}
            });
        }
    }).get();
}