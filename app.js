var study = new Vue({
  el: "#vue-app",
  data: {
    heading: 
    "Vue (\\/)_(o_O)_(\\/)",
    val: 0
  },
  methods: {
    timer() {
      let i = 0
      return function() {
        return i += 1
      }
    },
    updateVal() {
      let z = this.timer()
      update = () => {
        console.log(this)
        this.val = z()
      }
      update()
    }
  }
});
