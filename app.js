var study = new Vue({
  el: "#vue-app",
  data: {
    heading: 
    "Vue (\\/)_(o_O)_(\\/)",
    timerWorking: false
  },
  methods: {
  timer(){
    if 
    (this.timerWorking != true)
    {
    let looper =
    setTimeout(loop = () => {
      console.log('tick')
      this.timerWorking = true
      looper =
        setTimeout(loop, 2000)
      }, 2000)       
      }
    },
  }
});
