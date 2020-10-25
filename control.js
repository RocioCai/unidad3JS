let form = document.querySelector('form');
let usuario = document.getElementById('usuario');
let clave = document.getElementById('clave');
let submit = document.getElementById('submit');
 
form.onsubmit = function(enviar) {
  if(usuario.value.includes("@") == false || clave.value === ""){
    if (clave.value === ""){
      enviar.preventDefault();
      alert(`La contraseña no puede estar vacía`); 
      return false;            
    }
    else{
      enviar.preventDefault();
      alert(`El usuario debe contener @`);         
      return false;   
    }
  }     
  else{
  alert(`Ingresando al sistema...`);   
  return true;     
  }  
  }




