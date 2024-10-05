document.addEventListener('DOMContentLoaded', () => {
    const films = [
        { title: 'Musik Episch', src: 'filme/Test_Mit_Clipchamp_erstellt.mp4', imgSrc: 'images/image_cdc47045-8342-49b9-afe3-63403389b9b6.jpg' },
        { title: 'Film 2', src: 'filme/Film2.mp4', imgSrc: 'filme/image2.jpg' },
        { title: 'Film 3', src: 'filme/Film3.mp4', imgSrc: 'filme/image3.jpg' },
        // Weitere Filme
    ];

    const filmCarousel = document.querySelector('.film-carousel');
    const filmGrid = document.querySelector('.film-grid');

    films.forEach(film => {
        const imgElement = document.createElement('img');
        imgElement.src = film.imgSrc;
        imgElement.alt = film.title;
        imgElement.addEventListener('click', () => {
            window.location.href = `film.html?title=${encodeURIComponent(film.title)}&src=${encodeURIComponent(film.src)}`;
        });
        filmCarousel.appendChild(imgElement.cloneNode(true));
        filmGrid.appendChild(imgElement);
    });
});
