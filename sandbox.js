// // // const para = document.querySelector('body > h1')

// // // console.log(para)

// // const paras = document.querySelectorAll('p')
// // const errors = document.querySelectorAll('.error')

// // console.log(errors)

// // grabe element by id
// const title = document.getElementById('page-title')
// console.log(title)
// // get all elements by class name
// const errors = document.getElementsByClassName('error')
// console.log({ errors })
// // get elements by Classname
// const paras = document.getElementsByTagName('p')
// console.log({ paras })

// const paras = document.querySelectorAll('p')

// paras.forEach((para) => {
//   para.innerText += ' new text'
//   console.log(para.innerText)
// // })

// const content = document.querySelector('.content')
// // content.innerHTML += "<h2>f'yall all</h2>"
// // console.log(content.innerHTML)

// const people = ['mario', 'luigi', 'yoshi']

// people.forEach((person) => {
// //   content.innerHTML += `<p>${person}</p>`
// })

// const link = document.querySelector('a')
// link.setAttribute('href', 'https://www.yandex.com')
// link.innerText = 'net whinger web zone'
// console.log(link.getAttribute('href'))

// const msg = document.querySelector('p')

// msg.setAttribute('class', 'success')
// console.log(msg.getAttribute('class'))
// msg.setAttribute('style', 'color: green')

// const title = document.querySelector('h1')

// title.setAttribute('style', 'margin:50px')

// console.log(title.style)
// console.log(title.style.color)

// title.style.margin = '50px'
// title.style.color = 'crimson'
// title.style.fontSize = '60px'
// title.style.margin = ''

const paras = document.querySelectorAll('p')

paras.forEach((name) => {
  if (name.textContent.includes('error')) {
    name.classList.add('error')
  }
  if (name.textContent.includes('success')) {
    name.classList.add('success')
  }
})

const title = document.querySelector('.title')

title.classList.toggle('test')
title.classList.toggle('test')
console.log(title.classList)
