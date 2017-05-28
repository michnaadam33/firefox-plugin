var blockedElement = "<h1>ERROR</h1>";
for(var i in self.options.arr){
    var obj = self.options.arr[i];
    console.log(obj.regex);
    var str = self.options.url;
    var re = new RegExp(obj.regex);
    if (str.match(re)) {
        $('body').css('border','15px solid red');
        if(obj.selector !== null){
            $(obj.selector).replaceWith(blockedElement);
        }else {
            $('body').html(blockedElement);
        }
    }
}