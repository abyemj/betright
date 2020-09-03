
let getTwoOdds = () => 
{
  firebase.auth().onAuthStateChanged(function(user)
  {
    if (user) { 
      user.getIdTokenResult().then(IdTokenResult =>{console.log(IdTokenResult.claims.lowodd);
        if (IdTokenResult.claims.lowodd){
      
      db.collection('2 ODDS').get().then((snapshot) => {setupTwoOdds(snapshot.docs)});
      const twoodds = document.querySelector('.tables');
      let setupTwoOdds = (data) => {
        let output = '';
        data.forEach(doc => {
        const tip = doc.data();
        const td =
        `<tr>
        <td width ="350px">${tip.Fixture}</td>
        <td width ="120px">${tip.Prediction}</td>
        <td>${tip.ODDS}</td>
        </tr>`;
        output += td;
        twoodds.innerHTML= output;
        });
      }
    }
      else
      { const twoodds = document.querySelector('.tables');
      const changeText = document.querySelector('.heading');
      twoodds.innerHTML = ('Kindly upgrade to view predictions');
      changeText.innerHTML =('')
    }
  });
    }
    else
    {
      const twoodds = document.querySelector('.tables');
      const changeText = document.querySelector('.heading');
      twoodds.innerHTML = ('Kindly subscribe to view predictions');
      changeText.innerHTML =('')
    }
  });
};
    
 let getThreeOdds = () => 
 {
  firebase.auth().onAuthStateChanged(function(user)
  {
    if (user) { 
      user.getIdTokenResult().then(IdTokenResult =>{console.log(IdTokenResult.claims.lowodd);
        if (IdTokenResult.claims.lowodd){

      db.collection('3 ODDS').get().then((snapshot) => {setupThreeOdds(snapshot.docs)});
      const threeodds = document.querySelector('.tables');
      let setupThreeOdds = (data) => {
        let output = '';
        data.forEach(doc => {
        const tip = doc.data();
        const td =
        `<tr>
        <td width ="350px">${tip.Fixture}</td>
        <td width ="120px">${tip.Prediction}</td>
        <td>${tip.ODDS}</td>
        </tr>`;
        output += td;
        threeodds.innerHTML= output;
       });
      }
    }
      else
      { const threeodds = document.querySelector('.tables');
      const changeText = document.querySelector('.heading');
      threeodds.innerHTML = ('Kindly upgrade to view predictions');
      changeText.innerHTML =('')
    }
  });
    }
    else
    {
      const threeodds = document.querySelector('.tables');
      const changeText = document.querySelector('.heading');
      threeodds.innerHTML = ('Kindly subscribe to view predictions');
      changeText.innerHTML =('')
    }
  });
};
    

  
let getRollover = () => 
{
  firebase.auth().onAuthStateChanged(function(user)
  {
    if (user) { 
      user.getIdTokenResult().then(IdTokenResult =>{console.log(IdTokenResult.claims.lowoddrollover);
        if (IdTokenResult.claims.lowoddrollover ){
      db.collection('ROLLOVER').get().then((snapshot) => {setupRollover(snapshot.docs)});
      const rollover = document.querySelector('.tables');
      let setupRollover = (data) => {
        let output = '';
        data.forEach(doc => {
        const tip = doc.data();
        const td =
        `<tr>
        <td width ="350px">${tip.Fixture}</td>
        <td width ="120px">${tip.Prediction}</td>
        <td>${tip.ODDS}</td>
        </tr>`;
        output += td;
        rollover.innerHTML= output;
      });
    }
  }
    else
    { const rollover = document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
    rollover.innerHTML = ('Kindly upgrade to view predictions');
    changeText.innerHTML =('')
  }
});
  }
  else
  {
    const rollover = document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
    rollover.innerHTML = ('Kindly subscribe to view predictions');
    changeText.innerHTML =('')
  }
});
};



let getFiftyplusOdds = () => 
{
  firebase.auth().onAuthStateChanged(function(user)
  {
    if (user) { 
      user.getIdTokenResult().then(IdTokenResult =>{console.log(IdTokenResult.claims.full);
        if (IdTokenResult.claims.full){

      db.collection('50+ ODDS').get().then((snapshot) => {setupFiftyplusOdds(snapshot.docs)});
      const fiftyplusodds = document.querySelector('.tables');
      let setupFiftyplusOdds = (data) => {
        let output = '';
        data.forEach(doc => {
        const tip = doc.data();
        const td =
        `<tr>
        <td width ="350px">${tip.Fixture}</td>
        <td width ="120px">${tip.Prediction}</td>
        <td>${tip.ODDS}</td>
        </tr>`;
        output += td;
        fiftyplusodds.innerHTML= output;
      });
    }
  }
    else
    { const fiftyplusodds = document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
    fiftyplusodds.innerHTML = ('Kindly upgrade to view predictions');
    changeText.innerHTML =('')
  }
});
  }
  else
  {
    const fiftyplusodds = document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
    fiftyplusodds.innerHTML = ('Kindly subscribe to view predictions');
    changeText.innerHTML =('')
  }
});
};



    
 let getBTTS = () => 
 {
  firebase.auth().onAuthStateChanged(function(user)
  {
    if (user) { 
      user.getIdTokenResult().then(IdTokenResult =>{console.log(IdTokenResult.claims.full);
        if (IdTokenResult.claims.full){

      db.collection('BTTS').get().then((snapshot) => {setupBTTS(snapshot.docs)});
      const btts = document.querySelector('.tables');
      let setupBTTS = (data) => {
        let output = '';
        data.forEach(doc => {
        const tip = doc.data();
        const td =
        `<tr>
        <td width ="350px">${tip.Fixture}</td>
        <td width ="120px">${tip.Prediction}</td>
        <td>${tip.ODDS}</td>
        </tr>`;
        output += td;
        btts.innerHTML= output;
      });
    }
  }
    else
    { const btts = document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
    btts.innerHTML = ('Kindly upgrade to view predictions');
    changeText.innerHTML =('')
  }
});
  }
  else
  {
    const btts= document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
    btts.innerHTML = ('Kindly subscribe to view predictions');
    changeText.innerHTML =('')
  }
});
};





  
let getOnethousandplusOdds = () => 
{
  firebase.auth().onAuthStateChanged(function(user)
  {
    if (user) { 
      user.getIdTokenResult().then(IdTokenResult =>{console.log(IdTokenResult.claims.full);
        if (IdTokenResult.claims.full){

      db.collection('CORRECTSCORE ODDS').get().then((snapshot) => {setupOnethousandplusOdds(snapshot.docs)});
      const onethousandplusodds = document.querySelector('.tables');
      let setupOnethousandplusOdds = (data) => {
        let output = '';
        data.forEach(doc => {
        const tip = doc.data();
        const td =
        `<tr>
        <td width ="350px">${tip.Fixture}</td>
        <td width ="120px">${tip.Prediction}</td>
        <td>${tip.ODDS}</td>
        </tr>`;
        output += td;
        onethousandplusodds.innerHTML= output;
      });
    }
  }
    else
    { const onethousandplusodds = document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
    onethousandplusodds.innerHTML = ('Kindly upgrade to view predictions');
    changeText.innerHTML =('')
  }
});
  }
  else
  {
    const onethousandplusodds= document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
    onethousandplusodds.innerHTML = ('Kindly subscribe to view predictions');
    changeText.innerHTML =('')
  }
});
};



let getFiveOdds = () => 
{
  firebase.auth().onAuthStateChanged(function(user)
  {
    if (user) { 
      user.getIdTokenResult().then(IdTokenResult =>{console.log(IdTokenResult.claims.highodd);
        if (IdTokenResult.claims.highodd){
      db.collection('5 ODDS').get().then((snapshot) => {setupFiveOdds(snapshot.docs)});
      const fiveodds = document.querySelector('.tables');
      let setupFiveOdds = (data) => {
        let output = '';
        data.forEach(doc => {
        const tip = doc.data();
        const td =
        `<tr>
        <td width ="350px">${tip.Fixture}</td>
        <td width ="120px">${tip.Prediction}</td>
        <td>${tip.ODDS}</td>
        </tr>`;
        output += td;
        fiveodds.innerHTML= output;
      });
    }
  }
    else
    { const fiveodds= document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
    fiveodds.innerHTML = ('Kindly upgrade to view predictions');
    changeText.innerHTML =('')
  }
});
  }
  else
  {
    const fiveodds= document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
    fiveodds.innerHTML = ('Kindly subscribe to view predictions');
    changeText.innerHTML =('')
  }
});
};
    
 let getTenOdds = () => 
 
  {
    firebase.auth().onAuthStateChanged(function(user)
    {
      if (user) { 
        user.getIdTokenResult().then(IdTokenResult =>{console.log(IdTokenResult.claims.highodd);
          if (IdTokenResult.claims.highodd){
      db.collection('10 ODDS').get().then((snapshot) => {setupTenOdds(snapshot.docs)});
      const tenodds = document.querySelector('.tables');
      let setupTenOdds = (data) => {
        let output = '';
        data.forEach(doc => {
        const tip = doc.data();
        const td =
        `<tr>
        <td width ="350px">${tip.Fixture}</td>
        <td width ="120px">${tip.Prediction}</td>
        <td>${tip.ODDS}</td>
        </tr>`;
        output += td;
        tenodds.innerHTML= output;
      });
    }
  }
    else
    { const tenodds= document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
  tenodds.innerHTML = ('Kindly upgrade to view predictions');
    changeText.innerHTML =('')
  }
});
  }
  else
  {
    const tenodds= document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
    tenodds.innerHTML = ('Kindly subscribe to view predictions');
    changeText.innerHTML =('')
  }
});
};

  
let getFiftyOdds = () => 
{
  firebase.auth().onAuthStateChanged(function(user)
  {
    if (user) { 
      user.getIdTokenResult().then(IdTokenResult =>{console.log(IdTokenResult.claims.highodd);
        if (IdTokenResult.claims.highodd){
      db.collection('50 ODDS').get().then((snapshot) => {setupFiftyOdds(snapshot.docs)});
      const fiftyodds = document.querySelector('.tables');
      let setupFiftyOdds = (data) => {
        let output = '';
        data.forEach(doc => {
        const tip = doc.data();
        const td =
        `<tr>
        <td width ="350px">${tip.Fixture}</td>
        <td width ="120px">${tip.Prediction}</td>
        <td>${tip.ODDS}</td>
        </tr>`;
        output += td;
        fiftyodds.innerHTML= output;
      });
    }
  }
    else
    { const fiftyodds = document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
    fiftyodds.innerHTML = ('Kindly upgrade to view predictions');
    changeText.innerHTML =('')
  }
});
  }
  else
  {
    const fiftyodds= document.querySelector('.tables');
    const changeText = document.querySelector('.heading');
    fiftyodds.innerHTML = ('Kindly subscribe to view predictions');
    changeText.innerHTML =('')
  }
});
};


const loggedoutLinks = document.querySelectorAll('.loggedout');
const loggedinLinks = document.querySelectorAll('.loggedin');

const setupUI = (user) => {
    if (user) {
    //toggle UI elements
    loggedinLinks.forEach(item => item.style.display = 'block');
    loggedoutLinks.forEach(item => item.style.display = 'none');
}
 else {
    //toggle UI elements
    loggedinLinks.forEach(item => item.style.display = 'none');
    loggedoutLinks.forEach(item => item.style.display = 'block');

}
}
 //set authentication state observer and get user data
 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log('user is signed in');
    setupUI(user);
  
  } else {
   
    console.log('user is not signed in')
    setupUI(user)
  }
  
});

 function logout(){
  firebase.auth().signOut();
 }

 document.getElementById("signup").addEventListener("click", function(){

  $('#signupModal').modal('show');
  
}); 
 function signupForm(){
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      if (email.length < 4) {
        alert('Please enter a valid email address.');
        return;
      }
      if (password.length < 4) {
        alert('password too short');
        return;
      }
      
  
    //create user
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
    $("#signupModal").modal('hide');
  }
// get login info
document.getElementById("login").addEventListener("click", function(){

  $('#loginModal').modal('show');
  
}); 
  function loginForm(){
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    //signin user
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
      $("#loginModal").modal('hide');
    
    }
    
    function sendPasswordReset() {
      let email = prompt("Please enter your email", "");


      //var email = document.getElementById('email').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }
      /**
     * Sends an email verification to the user.
     */
    function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }


const selectplan = document.querySelectorAll(".select-plan");
selectplan.forEach(selectplan => {
  selectplan.addEventListener("click", function(){
     firebase.auth().onAuthStateChanged(function(user) {
        if(user){
        $('.paymentModal').modal('show');
        }else{alert('Kindly signup or login to make payment')}
      }); 
    });
  });
function pay(){
     
let paymentForm= document.querySelector('.paymentForm');

paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {

 e.preventDefault();

  let handler = PaystackPop.setup({

    key: 'pk_test_8d34eea938dd2dc24563ef9b6a0a30518d958689', // Replace with your public key

    email: document.getElementById("email-address").value,

    amount: document.getElementById("amount").value *100,

    firstname: document.getElementById("first-name").value,

    lastname: document.getElementById("last-name").value,

    reference: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you

    // label: "Optional string that replaces customer email"

    onClose: function(){

      alert('Window closed.');

    },

    callback: function(response){

      let message = 'Payment complete! Reference: ' + response.reference;

      alert(message);
      firebase.auth().onAuthStateChanged(function(user) {
        
        console.log(user.email,amount.value)

        if (amount.value== 1500) {
            const addLowoddSubscriber = functions.httpsCallable('addLowoddSubscriber');
            addLowoddSubscriber({email:user.email}).then (result =>{
            console.log(result)})
            }
                  else if (amount.value==2500) {
                  const addLowoddRolloverSubscriber = functions.httpsCallable('addLowoddRolloverSubscriber');
                  addLowoddRolloverSubscriber({email:user.email}).then (result =>{
                  console.log(result)})
                  }
                 else if (amount.value==5000) {
                  const addHighoddSubscriber = functions.httpsCallable('addHighoddSubscriber');
                  addHighoddSubscriber({email:user.email}).then (result =>{ 
                  console.log(result)})
                  }
                  else if (amount.value== 10000) {
                  const addFullSubscriber = functions.httpsCallable('addFullSubscriber');
                  addFullSubscriber({email:user.email}).then (result =>{
                  console.log(result)}) }
                  else {  
                  let notification = 'your plan will be updated shortly';
                    alert(notification); 
                  }
        
});

    }

  });

  handler.openIframe();

}

}
