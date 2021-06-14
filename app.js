var study = new Vue({
  el: "#vue-app",
  data: {
    heading: 
    "Vue (\\/)_(o_O)_(\\/)"
  },
  methods: {
    smartTimer(){
      let timer =
      setTimeout(tick => {
        console.log('tick')
        
        timer = 
        setTimeout(tick, 2000)
      }, 2000)
    }
  }
});
