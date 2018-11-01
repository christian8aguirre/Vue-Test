let vm = new Vue({
    el: '#main',
    data: {
        laURL: '',
        elTitulo: '',
        videoActivo: '',
        mostrar: false,
        videos: [],
    },
    methods: {
        showTitulo: function(){
            if(this.laURL!="")
            this.mostrar=!this.mostrar;
            setTimeout(function () { $('#ttl').focus();}, 100);
        },
        addDatos: function () {
            if(this.elTitulo!='')
            this.mostrar=!this.mostrar;
            this.videos.push({ url: this.laURL, titulo: this.elTitulo, activo: false });
            //Guarda el objeto como un string
            LocalStorage.setItem('pistas', JSON.stringify(this.videos));
            this.laURL = this.elTitulo = '';
        },
        playVideo: function (video) {
            let laURL = video.url;
            let nuevaUrl = laURL.replace('watch?v=', 'embed/');
            this.videoActivo= nuevaUrl + '?&autoplay=1';
        }
    }
})