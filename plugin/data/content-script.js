$(function () {
    //Block element view
    var blockedElement = "";
    blockedElement += '<div style="text-align: center !important; color: red !important; background-color: yellow !important;">';
    blockedElement += '<h1>Treść zablokowana</h1>';
    blockedElement += '<p>Niestety treść została dla Ciebie zablokowana :-(</p>';
    blockedElement += '<p>Poproś o dostęp administratora.</p>';
    blockedElement += '<div>';
    //Now date
    var now = new Date();
    for (var i in self.options.arr) {
        var obj = self.options.arr[i];
        var str = self.options.url;
        var re = new RegExp(obj.regex);
        if (str.match(re)) {
            if (obj.startDate !== null) {
                var startDate = new Date(obj.startDate * 1000);
                if (startDate.getTime() > now.getTime()) {
                    break;
                }
            }
            //Check end day
            if (obj.endDate !== null) {
                var endDate = new Date(obj.endDate * 1000);
                if (endDate.getTime() < now.getTime()) {
                    break;
                }
            }

            // Replace phraze
            if (obj.phrase !== null) {
                var regexStr = "[^a-zA-Z0-9]"+obj.phrase+"[^a-zA-Z0-9]";
                console.log(regexStr);
                var regex = new RegExp(regexStr, 'gi');
                $("body").html($("body").html().replace(regex, '<b style="color: red">!########!</b>'));
                console.log('Blocked phrase: ' + obj.phrase);
            }

            //Block all website
            if (obj.selector !== null) {
                $(obj.selector).attr('style', '');
                $(obj.selector).html(blockedElement);
                console.log('Blocked website: ' + str + ' selector ' + obj.selector);
            } else if (obj.phrase === null) {
                $('body').css('border', '1px solid red');
                $('body').html(blockedElement);
                console.log('Blocked all website: ' + str);
            }
            console.log(obj);
        }
    }
});