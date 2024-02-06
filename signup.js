// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getDatabase, set,ref, update } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCIj56ruI4unJjiw0BEzmb_tRO8AgPxRz4",
    authDomain: "authentication-app-f5d99.firebaseapp.com",
    databaseURL: "https://authentication-app-f5d99-default-rtdb.firebaseio.com",
    projectId: "authentication-app-f5d99",
    storageBucket: "authentication-app-f5d99.appspot.com",
    messagingSenderId: "3263955529",
    appId: "1:3263955529:web:fdbcc6eaed7680dea13598"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database =getDatabase();
  const auth = getAuth();

  signup.addEventListener('click', (e) =>{

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid),{
        username:username,
        email:email
      })
      alert('Signup Successful!');
      // ...
      window.location.href = 'signin.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
      // 
    });
});

login.addEventListener('click', (e)=>{
  var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.users;

    const dt = new Date();
    update(ref(database, 'users/' + user.uid),{
      last_login:dt,
      })

      alert('Loged In Successful');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
  });
})


