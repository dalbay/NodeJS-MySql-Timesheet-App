

/*Login button - Displays Login Modal*/
var btnLogin = document.getElementById("btnLogin").addEventListener('click',function(){modalLogin.style.display='block'});
var modalLogin = document.getElementById("loginModal");

/*SignUp button - Displays Signup Modal */
var modalSignup = document.getElementById("signupModal");
var btnSignup = document.getElementById("btnSignup").addEventListener('click',function(){modalSignup.style.display='block'});

/*Hide the Modal*/
document.getElementById('loginClose').addEventListener('click',()=>{modalLogin.style.display='none'});
document.getElementById('signupClose').addEventListener('click',()=>{modalSignup.style.display='none'});

