const db = firebase.database();
const auth = firebase.auth();

const logEmail = document.querySelector('.logEmail');
const logIdentif = document.querySelector('.logIdentif');
const loginBtn = document.querySelector('.loginBtn');

loginBtn.addEventListener('click', ()=>{

    auth.signInWithEmailAndPassword(logEmail.value, logIdentif.value).then(
        (data)=>{
            window.location.href = 'materias.html';
        }
    ).catch(
        (error)=>{
            alert(error.message);
        }
    );

});