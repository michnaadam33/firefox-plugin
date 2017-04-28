console.log(self.options.url);
for(var i in self.options.arr){
    console.log("Cos" + self.options.arr[i]);
    var str = self.options.url;
    var re = new RegExp(self.options.arr[i]);
    if (str.match(re)) {
        document.body.style.border = '15px solid red';
    }
}