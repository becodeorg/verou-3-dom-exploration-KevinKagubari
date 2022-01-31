const section = document.querySelector('ol')
console.log(section.children)
const a = section.children[0]
const b = section.children[1]
b.appendChild(a)

console.log(section.children)
console.log(b.children)