
(function () {


//Inicializar Firebase
  const config = {
	    apiKey: "AIzaSyBOylNl-Ka7T5yo5EWl2KMaIqXu4cuj4fg",
    authDomain: "vue-test-e6acb.firebaseapp.com",
    databaseURL: "https://vue-test-e6acb.firebaseio.com",
    projectId: "vue-test-e6acb",
    storageBucket: "vue-test-e6acb.appspot.com",
    messagingSenderId: "920258140742"
  };
  firebase.initializeApp(config);

  //creamos la instancia del objeto del rproveedor de google


 
  // Obtener elementos
  
  
 
function ingresoGoogle(){
  // Añadir Evento login
 // btnGoogle.addEventListener('click', e => {

if(!firebase.auth().currentUser){
   var provider = new firebase.auth.GoogleAuthProvider();

   provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...

  console.log(user);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...

  if (errorCode==='auth/account-exists-with-different-credential'){
    alert('Este usuario ya existe ');
  }


    });
}else{
  firebase.auth().signOut();
}

}
//aqui termina el evento clic de google  
//});

document.getElementById('btnGoogle').addEventListener('click' , ingresoGoogle, false);


} ());