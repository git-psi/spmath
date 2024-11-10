document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.header__icon');
    const menu = document.querySelector('.menu');
    
    menuButton.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('with--sidebar');
        menu.classList.toggle('active');
    });

    document.querySelector('.menu').innerHTML = `
        <ul>
            <li><a href="index.html" class="active">ACCUEIL</a></li>
            <li><a href="html-2.html">QUI ENSEIGNE ?</a></li>
            <li><a href="html-3.html">COURS PARTICULIERS</a></li>
            <li><a href="html-4.html">PUBLICATIONS</a></li>
            <li><a href="html-5.html">LE LIEU ?</a></li>
            <li><a href="html-6.html">LIENS</a></li>
            <li><a href="mailto:veronique.perdu@polytechnique.org" id="contact-link">
                <img src="images/courrier.jpeg" width="60" height="70" alt="email">
            </a></li>
        </ul>`;
});