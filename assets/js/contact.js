const correo = document.getElementById('correo');
const comment = document.getElementById('comment');
const sinspace = comment.value.replace(" ", '%20');

function contact() {
    window.open(`https://wa.me/34613315749/?text=Correo%20${correo.value},%20${comment.value.replaceAll(" ", '%20')}`, '_blank');
};