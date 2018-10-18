let vm = new Vue({
    el: 'main',
    data:{
        mensaje:true
    },
    methods: {
        cambiar: function() {
            this.mensaje = !this.mensaje;
        }
    }
})