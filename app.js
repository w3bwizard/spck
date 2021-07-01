var study = new Vue({
  el: "#vue-app",
  data: {
    heading: 
    "Vue (\\/)_(o_O)_(\\/)",
    timerWorking: false,
    count: 0
  },
  created(){
    window.onpopstate =
      function(event) {
        console.log(JSON.stringify(event.state))
      }
    console.log('qq')
  },
  methods: {
    pushState() {
     this.count += 1
     const state = 
     { 'id': this.count}
     const title = ''
     const url = ''
     history.
     pushState(state, title, url)
    },
    setState(id) {
      count = id
    }
  }
});
