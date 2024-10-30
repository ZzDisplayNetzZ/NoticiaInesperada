const yesBTN = document.querySelector('#yesBTN');

yesBTN.addEventListener('click',function () {
    alert ('“Según el pronóstico del día, tú deberías estar a mi lado.”')
});

const noBTN = document.querySelector('#noBTN');

noBTN.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBTN.style.setProperty('top',randomY+'%');
    noBTN.style.setProperty('left',randomX+'%');
    noBTN.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})