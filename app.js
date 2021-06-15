var study = new Vue({
  el: "#vue-app",
  data: {
    heading: 
    "Vue (\\/)_(o_O)_(\\/)",
    val: 0
  },
  methods: {
    smartTimer() {
      let i = 0
      return () => {
        return i += 1
      }
    },
    updateVal() {
      this.val = this.smartTimer()
    }
  }
});
