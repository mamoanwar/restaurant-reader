if (navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
}
/*it may has an error in serviceWorker but i cant solve it. i searched
a lot and checked my code several times. it is exactly what we got in the course
and i dont why i still get error messages
with it but still got unknown error messages that i cant solve*/
