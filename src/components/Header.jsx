function Header() {

  function idioma(){
    alert ("idioma")
  } 
const lenguaje=() => {
alert("lenguaje")
}

    return (
      <>
      <h1>Bienvenidos a la galeria Horned Beasts</h1>
      <button onClick={idioma}>Cambiar idioma</button>
      <button onClick={lenguaje}>Cambiar lenguaje</button>
      </>
    );

  }
  
  export default Header;