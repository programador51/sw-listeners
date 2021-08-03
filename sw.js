
// Ciclo de vida del SW and listeners of SW

// 1. Install
// 2. Activate 
// 3. Wait until

////////////////////////////////////// [1] /////////////////////////////////
self.addEventListener('install',e=>{
   
    // Download assets
    // Create cache etc...  
    console.log('1.- Installing SW...');

    const instalation = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('■ SW Installated');
            self.skipWaiting();
            resolve();
        },1);
    
    });

    e.waitUntil(instalation);

});

self.addEventListener('activate',e=>{
    // Delete old cache
    
    console.log('2.- SW activated');
});

// SYNC - Recuperate connection to internet
self.addEventListener('sync',e=>{
    console.log('There is Wi-Fi connection');
    console.log(e.tag);
});

// PUSH - MANAGE NOTIFICATIONS
self.addEventListener('push',e=>{
    console.log('Notification received');
});