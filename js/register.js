const nombre = document.querySelector('.regName');
const regIdentif = document.querySelector('.regIdentif');
const materia = document.querySelector('.materia');
const grupo = document.querySelector('.grupo');
const email = document.querySelector('.email');
const regButton = document.querySelector('.registerBtn');


regButton.addEventListener('click' , ()=>{
    auth.createUserWithEmailAndPassword(email.value , regIdentif.value).then(
        (data)=>{
            let user = {
                id: data.user.uid,
                nombre: nombre.value,
                materia: materia.value,
                grupo: grupo.value,
                email: email.value,
                identificacion: regIdentif.value
            };

            db.ref('Profesores/' + user.id).set(user);
        }

    );

});
