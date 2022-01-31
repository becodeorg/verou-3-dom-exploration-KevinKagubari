 
const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  const newSquare = document.querySelector('.displayedsquare')
  const clnSquare = newSquare.cloneNode(true)

  console.log(newSquare);
  
  document.querySelector('displayedquare-wrapper').appendChild(clnSquare)




}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

