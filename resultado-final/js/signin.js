document.addEventListener('DOMContentLoaded', function () {
    const signInFormContainer = document.getElementById('signInFormContainer');
    const signUpFormContainer = document.getElementById('signUpFormContainer');
    const toggleSignInButton = document.getElementById('toggleSignIn');
    const toggleSignUpButton = document.getElementById('toggleSignUp');
    const logoContainer = document.getElementById('logoContainer');
    const signinContainer = document.getElementById('signinContainer');

    // Mostrar logo durante 4 segundos
    setTimeout(function () {
    logoContainer.style.display = 'none';
    signinContainer.style.display = 'flex';
  }, 4000);
  
    // Función para cambiar entre formularios
    function toggleForms() {
      signInFormContainer.style.display = (signInFormContainer.style.display === 'none') ? 'block' : 'none';
      signUpFormContainer.style.display = (signUpFormContainer.style.display === 'none') ? 'block' : 'none';
    }
  
    // Agregar evento de clic a los botones de cambio de formulario
    toggleSignInButton.addEventListener('click', toggleForms);
    toggleSignUpButton.addEventListener('click', toggleForms);
  });
  