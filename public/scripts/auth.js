const loginFormWithGmail = document.querySelector('#loginGmail');
var provider = new firebase.auth.GoogleAuthProvider();

// toggle auth modals

const loginWithGmail = () => {
  // console.log(provider);
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => { 
    window.location = 'newCostsplit.html'   
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
// login form with gmail
loginFormWithGmail.addEventListener('click', loginWithGmail);

// auth listener
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    
    window.location = 'newCostsplit.html'
    

  } else {
    console.log('is not log in');
    
  }
});