Vue.component("mi-componente", {
  template: `#mi-plantilla`,
  /**
   * Primer alternativa para el template
   * `
   * <div>
        <h1>Componentes</h1>
        <p>Esto es un componente</p>
        <p> lo puedo utilizar tantas veces como quiera.</p>
        <p><b>{{ nuevoTexto }}</b></p>
    </div>
    `
   */
  data: function() {
    return {
      nuevoTexto: "Este es un nuevo texto."
    };
  }
});

new Vue({
  el: "main"
});

/**
 * Template solo puede tener un root, por eso se envuelve en un div
 * Para poder escribir html en distintas líneas debes introducir las comillas invertidas o backticks ``
 * dentro de un componente, data debe ser una función y por lo tanto devolver los datos
 * */
