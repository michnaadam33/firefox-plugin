for(var i in self.options.arr){
    var obj = self.options.arr[i];
    console.log(obj.regex);
    var str = self.options.url;
    var re = new RegExp(obj.regex);
    if (str.match(re)) {
        document.body.style.border = '15px solid red';
    }
}