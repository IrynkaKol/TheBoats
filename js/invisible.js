
function togglePasswordVisibility() {
    const inputPass=document.getElementById('inputPassword');
    const iconPass=document.getElementById('icon-pass');
    const iconVisibl=document.getElementById('')
    
    iconPass.addEventListener('click', () => {
        if(inputPass.getAttribute('type') === "password") {
            inputPass.setAttribute('type', 'text')
            iconPass.height === '0px'
        } else {
            inputPass.setAttribute('type', 'password')
            iconPass.height === '14px'
        }
    })
}
 document.addEventListener('DOMContentLoaded', togglePasswordVisibility);
