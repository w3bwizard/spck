var study = new Vue({
  el: "#vue-app",
  data: {
    heading: 
    "Vue (\\/)_(o_O)_(\\/)"
  },
  methods: {
    smartTimer(){
      let timer =
      setTimeout(function tick() {
        console.log(timer)
        
        timer = 
        setTimeout(tick, 2000)
      }.bind(this), 2000)
    }
  }
});
