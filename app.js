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
    loop = () => {
      console.log('tick')
      this.timerWorking = true
      looper =
        setTimeout(loop, 2000)
    }
    let looper =
    setTimeout(loop, 0)       
      }
    },
    pushState() {
     const state = 
     { 'page_id': 1, 'user_id': 5 }
     const title = ''
     const url = ''
     
     history.
     pushState(state, title, url) 
    }
  }
});
