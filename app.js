//import {test} from 'api.js' 

var study = new Vue({
  el: "#vue-app",
  data: {
    heading: 
    "Vue (\\/)_(o_O)_(\\/)",
    timerWorking: false,
    count: 0
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
