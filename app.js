//в истории присутствует лишнее
//изначальное состояние

var study = new Vue({
  el: "#vue-app",
  data: {
    heading: 
    "Vue (\\/)_(o_O)_(\\/)",
    timerWorking: false,
    count: null
  },
  created(){
    this.count = 0
    this.pushState(this.count)
    window.onpopstate = 
    (event) => {
      this.count = event.state.id
    }
    console.log
    ('created', 'count', this.count)
  },
  methods: {
    pushState(count) {
     const state = 
     { 'id': count}
     const title = ''
     const url = ''
     history.
     pushState(state, title, url)
    },
  }
});
