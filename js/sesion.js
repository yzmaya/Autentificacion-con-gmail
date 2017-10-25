(function() {

//Inicializar Firebase
  var config = {
   apiKey: "AIzaSyBOylNl-Ka7T5yo5EWl2KMaIqXu4cuj4fg",
    authDomain: "vue-test-e6acb.firebaseapp.com",
    databaseURL: "https://vue-test-e6acb.firebaseio.com",
    projectId: "vue-test-e6acb",
    storageBucket: "vue-test-e6acb.appspot.com",
    messagingSenderId: "920258140742"
  };
  firebase.initializeApp(config);



  // Obtener elementos
var Aatrox = document.getElementById("Aatrox");

  const btnLogout = document.getElementById('btnLogout');

  btnLogout.addEventListener('click', e => {

    firebase.auth().signOut().then(function() {
      // Sign-out successful.
       window.location.href = 'index.html';
    }).catch(function(error) {
      // An error happened.
    });

  });

  // Añadir un listener en tiempo real
   firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);

     var miNombre = firebaseUser.displayName; 
     var myImage = firebaseUser.photoURL; 

      document.querySelector("h3.test").textContent = "Bienvenido " + miNombre; 
      Aatrox.setAttribute("src", myImage);
    } else {
      console.log('no logueado');
      window.location.href = 'index.html';
    }    
  });
}());