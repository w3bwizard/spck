var study = new Vue({
  el: "#vue-app",
  data: {
    heading: 
    "Vue (\\/)_(o_O)_(\\/)"
  },
  methods: {
    smartTimer(){
      const timer =
      setTimeout(()=>{
        console.log('timer msg')
      }, 2000)
    }
  }
});
