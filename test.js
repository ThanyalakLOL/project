const firebase = require('firebase')

firebase.auth().onAuthStateChanged(user => {
    console.log('run')
    if (user) {
      console.log(user)
      // authWrapper.classList.remove('open');
      // authModals.forEach(modal => modal.classList.remove('active'));
    } else {
      console.log('is not log in')
      authWrapper.classList.add('open');
      authModals[0].classList.add('active');
      window.location = 'login.html'
    }
  });