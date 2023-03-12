let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #6a4079; ">Desarrollo sitios web,además estoy aprendiendo sobre lenguajes de programación y escribo artículos sobre programación. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
