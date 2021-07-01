window.onpopstate = 
function(event) {
  console.log(JSON.stringify(event.state))
}

export function test() {
  console.log('qq')
}