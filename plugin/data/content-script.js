var blockedElement = "";
blockedElement += '<div style="text-align: center !important; color: red !important; background-color: yellow !important;">';
blockedElement +='<h1>Treść zablokowana</h1>';
blockedElement +='<p>Niestety treść została dla Ciebie zablokowana :-(</p>';
blockedElement +='<p>Poproś o dostęp administratora.</p>';
blockedElement +='<div>';
var now = new Date();
for(var i in self.options.arr){
    var obj = self.options.arr[i];
    var str = self.options.url;
    var re = new RegExp(obj.regex);
    if (str.match(re)) {



        if(obj.startDate !== null){
            var startDate = new Date(obj.startDate*1000);
            if(startDate.getTime() > now.getTime()){
                break;
            }
        }
        if(obj.endDate !== null) {
            var endDate = new Date(obj.endDate * 1000);
            if(endDate.getTime() < now.getTime()){
                break;
            }
        }

        $('body').css('border','15px solid red');
        if(obj.selector !== null){
            $(obj.selector).attr('style', '');
            $(obj.selector).html(blockedElement);
        }else {
            $('body').html(blockedElement);
        }
    }
}