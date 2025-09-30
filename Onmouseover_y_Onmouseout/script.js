// ===========================================
// BOTÓN LOGIN
// ===========================================
const loginBtn = document.querySelector('.top .btn');
loginBtn.addEventListener('click', () => {
    alert('Login functionality is not implemented yet!');
});

// ===========================================
// BOTÓN SUBSCRIBE
// ===========================================
const subscribeBtn = document.querySelector('.col-l .btn');
let subscribed = false;

subscribeBtn.addEventListener('click', () => {
    subscribed = !subscribed;
    if(subscribed){
        subscribeBtn.textContent = 'Subscribed';
        subscribeBtn.style.backgroundColor = '#6c757d'; // gris
    } else {
        subscribeBtn.textContent = 'Subscribe';
        subscribeBtn.style.backgroundColor = '#ff4b2b'; // naranja
    }
});

// ===========================================
// CAMBIAR VIDEO PRINCIPAL AL HACER CLICK EN MINI VIDEOS
// ===========================================
const videoSmallList = document.querySelectorAll('.col-r .video-small');
const mainVideo = document.querySelector('.col-l .placeholder svg');
const mainVideoTitle = document.querySelector('.col-l .start h1');

videoSmallList.forEach(video => {
    video.addEventListener('click', () => {
        // Cambiar título
        const title = video.querySelector('.video-title').textContent;
        mainVideoTitle.textContent = title;

        // Cambiar color del placeholder para simular un video distinto
        const colors = ['#868e96', '#6c757d', '#adb5bd', '#495057'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        mainVideo.querySelector('rect').setAttribute('fill', randomColor);

        // Cambiar texto del placeholder
        mainVideo.querySelector('text').textContent = 'Now Playing!';
    });
});
