const peeps = [
    
    "Ahmad",
    "Jian",
    "Michael",
    "Dante",
    "Jawid",
    "Koen",
    "Kevin",
    "Benjamin",
    "Dery",
    "Michelle",
    "Colin",
    "Muhammet",
    "Nicolas",
    "Feruz",
    "Pieter",
    "Ellen",
    "Sara",
    "Jordy",
    "Beryl",
    "Cynthia",
    "Ruben",
    "Magali"

]
const changeColor = () => {
    let x = Math.floor(Math.random() * 256) + ','
    let y = Math.floor(Math.random() * 256) + ','
    let z = Math.floor(Math.random() * 256)
    var rgb = 'rgb(' + x + y + z + ')'

    
  };


console.log(peeps)

for ( let peep of peeps){

    const art = document.querySelector('article');
    const sec = document.createElement('section')
    art.appendChild(sec)

    const para = document.createElement('p')  
    sec.appendChild(para);

    const text = document.createTextNode(peep)
    para.appendChild(text)

    para.style.backgroundColor= changeColor()

}


    





    





