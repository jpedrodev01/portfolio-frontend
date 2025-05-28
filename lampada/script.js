const lamp = document.getElementById('lamp');
const body = document.body;

let isLightOn = false;

lamp.addEventListener('click', () => {
    if (!isLightOn) {
        lamp.src = 'assets/lamp_on.png';
        lamp.alt = 'Lâmpada acesa';
        body.style.background = 'radial-gradient(circle, #fffacd 20%, #ffffff 100%)';
    } else {
        lamp.src = 'assets/lamp_off.png';
        lamp.alt = 'Lâmpada apagada';
        body.style.background = 'radial-gradient(circle, white 8%, black 100%)';
    }

    isLightOn = !isLightOn;
});
