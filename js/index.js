const logOutBtn = document.querySelector('.logOutBtn');
const currentName = document.querySelector('.nombreProfesor');
const currentCourses = document.querySelector('.materias');


//para conocer el user
auth.onAuthStateChanged(
    (user)=>{
        db.ref('Profesores/'+user.uid).once(
            'value' ,
            (data)=>{
                let userdb = data.val();
                currentName.innerHTML = "Bienvenido/a" + " "  + "profesor/a" + " " + userdb.nombre;
                currentCourses.innerHTML = 
                `<button class="toGraphicButton"> ${userdb.materia}
                 </button>
                 `;
            }
        )
    }
);


//para cerrar sesion
logOutBtn.addEventListener('click', ()=>{
    auth.signOut().then(
        ()=>{
            window.location.href = 'index.html';
            console.log('sirve');
        }
    ).catch(
        (error)=>{
            alert(error.message);
        }
    );
});