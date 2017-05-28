var blockedElement = "";
blockedElement += '<div style="text-align: center !important; color: red !important; background-color: yellow !important;">';
blockedElement +='<h1>Treść zablokowana</h1>';
blockedElement +='<p>Niestety treść została dla Ciebie zablokowana :-(</p>';
blockedElement +='<p>Poproś o dostęp administratora.</p>';
blockedElement +='<div>';
for(var i in self.options.arr){
    var obj = self.options.arr[i];
    console.log(obj.regex);
    var str = self.options.url;
    var re = new RegExp(obj.regex);
    if (str.match(re)) {
        $('body').css('border','15px solid red');
        if(obj.selector !== null){
            $(obj.selector).attr('style', '');
            $(obj.selector).html(blockedElement);
            console.log(blockedElement);
        }else {
            $('body').html(blockedElement);
        }
    }
}