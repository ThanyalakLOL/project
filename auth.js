// const authSwitchLinks = document.querySelectorAll('.switch');
// const authModals = document.querySelectorAll('.auth .modal');
// const authWrapper = document.querySelector('.auth');
// const registerForm = document.querySelector('.register');
// const loginForm = document.querySelector('.login');
const loginFormWithGmail = document.querySelector('#loginGmail');

var provider = new firebase.auth.GoogleAuthProvider();

// console.log('signout>>>',signOut)
// const firebase = require('firebase')



// toggle auth modals

const loginWithGmail = () => {
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


// authSwitchLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     authModals.forEach(modal => modal.classList.toggle('active'));
//   });
// });

// register form
// registerForm.addEventListener('submit', (e) => {
// e.preventDefault();
// const email = registerForm.email.value;
// const password = registerForm.password.value;
// firebase.auth().createUserWithEmailAndPassword(email,password)
// .then(user => {
//     console.log('registered', user);
//     registerForm.reset();
// })
// .catch((error) => {
//     registerForm.querySelector('.error').textContent = error.message;
// });
// });

// login form
// loginForm.addEventListener('submit', (e) => {
//   e.preventDefault();
  
//   const email = loginForm.email.value;
//   const password = loginForm.password.value;
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(user => {
//       console.log('logged in', user);
//       loginForm.reset();
//     })
//     .catch(error => {
//       loginForm.querySelector('.error').textContent = error.message;
//     });
// });

// login form with gmail
loginFormWithGmail.addEventListener('click', loginWithGmail);



// auth listener
// firebase.auth().onAuthStateChanged(user => {
//   console.log('run')
//   if (user) {
//     console.log(user)
//     window.location = 'newCostsplit.html'
    // authWrapper.classList.remove('open');
    // authModals.forEach(modal => modal.classList.remove('active'));
  // } else {
  //   console.log('is not log in')
    // authWrapper.classList.add('open');
    // authModals[0].classList.add('active');
    // window.location = 'login.html'
//   }
// });