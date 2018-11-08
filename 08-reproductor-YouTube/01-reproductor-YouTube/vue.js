let vm = new Vue({
  el: "#main",
  data: {
    laURL: "",
    elTitulo: "",
    videoActivo: "",
    mostrar: false,
    videos: []
  },
  created() {
    //Añade las pistas al objeto videos
    this.videos = JSON.parse(localStorage.getItem("pistas"));
  },
  methods: {
    showTitulo: function() {
      if (this.laURL != "") this.mostrar = !this.mostrar;
      setTimeout(function() {
        $("#ttl").focus();
      }, 100);
    },
    addDatos: function() {
      if (this.elTitulo != "") this.mostrar = !this.mostrar;
      this.videos.push({
        url: this.laURL,
        titulo: this.elTitulo,
        activo: false
      });
      //Guarda el objeto como un string
      localStorage.setItem("pistas", JSON.stringify(this.videos));
      this.laURL = this.elTitulo = "";
    },
    playVideo: function(video) {
      let laURL = video.url;
      let nuevaUrl = laURL.replace("watch?v=", "embed/");
      this.videoActivo = nuevaUrl + "?&autoplay=1";
      for (i = 0; i < this.videos.length; i++) {
        this.videos[i].activo = false;
      }
      video.activo = true;
    },
    delVideo: function(video) {
      this.videos.splice(this.videos.indexOf(video), 1);
      localStorage.setItem("pistas", JSON.stringify(this.videos));
    }
  }
});
