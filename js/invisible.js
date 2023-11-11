
function togglePasswordVisibility() {
    const inputPass=document.getElementById('inputPassword');
    const iconPass=document.getElementById('icon-pass');
    
    iconPass.addEventListener('click', () => {
        if(inputPass.getAttribute('type') === "password") {
            inputPass.setAttribute('type', 'text')
        } else {
            inputPass.setAttribute('type', 'password')
        }
    })
}
 document.addEventListener('DOMContentLoaded', togglePasswordVisibility);
