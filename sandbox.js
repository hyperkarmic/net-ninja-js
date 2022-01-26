// // let speak = (name = 'tim') => {
// //   return `hello ${name}`
// // }

// // console.log(speak())
// const myFunc = (callbackFunc) => {
//   let value = 50
//   callbackFunc(value)
// }

// myFunc( value => {
//     // do something
//   console.log(value)
// })

const ul = document.querySelector('.people')
const people = ['mario', 'luigi', 'toad', 'wario']
let html = ``
people.forEach((person) => {
  html += `<li style="color: purple">${person}</li>`
})

console.log(html)
ul.innerHTML = html
