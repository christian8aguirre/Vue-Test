var vm = new Vue({
    el: 'main',
    data: {
        numero: 0,
    },
    methods: {
        sumar: function(){
            this.numero = this.numero += 1;
            $('button').css({'background-color':'#28D34A', 'color':'#eee'});
        }
    }
})