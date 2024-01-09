var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString("Je m'appelle Mathis")
    .pauseFor(2500)
    .deleteAll()
    .typeString("J'ai 15 ans")
    .pauseFor(2500)
    .deleteChars(7)
    .typeString("me le code")
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>les jeux vidéos</strong>')
    .pauseFor(2500)
    .deleteAll()

    .start();