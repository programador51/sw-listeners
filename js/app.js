

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
    .then(reg=>{
        Notification.requestPermission().then(result=>{
            console.log(result);
            reg.showNotification('Hello world');
        });
    });
    // .then(reg=>{
    //     setTimeout(()=>{
    //         // SYNC MANAGER ITS NOT VERY SUPPORTED
    //         reg.sync.register('posteo-gatitos');
    //         console.log('Se enviaron fotos de gatos al server');
    //     },3000);
    // });
}