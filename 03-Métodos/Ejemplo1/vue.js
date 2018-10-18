var vm = new Vue({
    el: 'main',
    data: {
        mensaje: 'Pulsa para obtener la segunda parte del mensaje!!!',
    },
    methods: {
        nuevoMensaje: function () {
            this.mensaje = 'Perfecto! Ya cambió.';
        }
    }
})