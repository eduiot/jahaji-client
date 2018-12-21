
document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady () {

 //   StatusBar.hide();
 if (cordova.platformId == 'android') {
    StatusBar.backgroundColorByHexString("#7B75A8");
}
/*
    cordova.plugins.notification.local.schedule([
    { id: 1, title: 'My first notification' },
    { id: 2, title: 'My first notification' }
    ]);

    */

}

function task() {
    var i=0;

    window.setInterval(function(){
    //  senddata();

    notification(1,"Jahaji","hello");
      //notification(1,"Title"+i,"Hello");
      i++;
    }, 20000); 
   
}

function notification(id,title,text){
 id = (typeof id === "undefined") ? 1 : id;
 title = (typeof title === "undefined") ? "Title 1" : title;
 text = (typeof text === "undefined") ? "text 1" : text;

cordova.plugins.notification.local.schedule({
    id: id,
    title: title,
    text: text,
    foreground: true,
    icon: 'https://raw.githubusercontent.com/robopedia/cdn/master/Jahajibd.png',
    sound: null
});


}
