document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const filmTitle = urlParams.get('title');
    const filmSrc = urlParams.get('src');

    if (filmTitle && filmSrc) {
        document.getElementById('film-title').textContent = filmTitle;
        const filmSource = document.getElementById('film-source');
        filmSource.src = filmSrc;

        // Reload the video element to apply the new source
        const filmVideo = document.getElementById('film-video');
        filmVideo.load();
        filmVideo.play(); // Optionally try to play the video automatically
    } else {
        document.getElementById('film-title').textContent = 'Film nicht gefunden';
    }
});
