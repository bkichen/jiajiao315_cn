function onResize() {
    var wid = document.documentElement.clientWidth || document.body.clientWidth;
    var loc = window.location.href.split('index')[0];
    var loc1 = window.location.href.split('index')[1];
    console.log(wid)
    if (wid <= 1024) {
        window.location.href = loc + 'indexPhone' + loc1;
    }
}
onResize()
window.onresize = onResize