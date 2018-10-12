$(document).ready(function(){
//Initialize Firebase
const config = {
    apiKey: "AIzaSyDgDtafkyqRZ2seT7wE6nWx6fujFIurDn4",
    authDomain: "authentification-f2a3e.firebaseapp.com",
    databaseURL: "https://authentification-f2a3e.firebaseio.com",
    projectId: "authentification-f2a3e",
    storageBucket: "authentification-f2a3e.appspot.com",
    messagingSenderId: "598085076281"
};
firebase.initializeApp(config);

//Get elements
const txtEmail= $('#txtEmail')
const txtPassword= $('#txtPassword');
const btnLogIn= $('#btnLogIn');
const btnSignUp= $('#btnSignUp');
const btnSignOut= $('#btnLogOut');

//Add Log In event
    btnLogIn.on('click', e => {
    //Get email and passes
        const email = txtEmail.val();
        const password = txtPassword.val();
        const auth = firebase.auth();
     //Sign In
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(console.log(e.message));

    });
    btnSignUp.on('click', e => {
       //Get email and passes
        const email = txtEmail.val();
        const password = txtPassword.val();
        const auth = firebase.auth();
     //Sign In
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message)); 
    });
    btnLogOut.addEventListener('click', e =>{
        firebase.auth().signOut();
    });
    //Add a real listener
    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            console.log(firebaseUser);
            btnLogOut.classList.remove('hide');
        }
        else{
            console.log('not logged in');
            btnLogOut.classList.add('hide');
        }
    });
});







