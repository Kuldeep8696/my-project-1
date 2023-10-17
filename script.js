const h2 = document.querySelector('h2')
const body = document.querySelector("body")
const button = document.querySelector('button')
const color =['red','#3bc50d','yellow','pink','purple','skyblue','blue','#68c427','#cb48b9','#bc88b5','#3a11b4']
body.style.backgroundColor = 'voilet'
button.addEventListener('click',changeb)
function changeb(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor =color[colorIndex]
    h2.style.backgroundColor = color[colorIndex+1]
}