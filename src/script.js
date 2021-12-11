function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const iframe = document.querySelector('iframe');
    trailer.classList.toggle('active')

    iframe.currentTime = 0;
    iframe.pause();
}