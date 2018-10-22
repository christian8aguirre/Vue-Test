let vm = new Vue({
    el: '#misTareas',
    data:{
        nuevaTarea: '',
        tareas: [],
    },
    methods: {
        // addTarea: function () {
        //     if(this.nuevaTarea != '')
        //     this.tareas.push({ text: this.nuevaTarea, completada: false})
        //     this.nuevaTarea='';
        // }
    }
})