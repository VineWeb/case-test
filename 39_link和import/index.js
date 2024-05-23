
async function add(a, b) {
  await delay(5000)
  return a + b
}
async function delay(timeout) {
  return new Promise((resolve, reject) => setTimeout(resolve, timeout))
}
(async function() {
  console.log('IIFE')
  document.body.style.backgroundColor = "lightgreen";
  const num = await add(2, 3)
  document.body.style.backgroundColor = "skyblue";
})()