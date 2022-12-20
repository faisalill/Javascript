const button = document.getElementById('btn')
const parent = document.getElementById('parent')
const secbutton = document.getElementById('btnn')
button.addEventListener('click', ()=>{
    const newElement = document.createElement('span')
    newElement.innerText = "Appended Child"
    newElement.addEventListener('click',()=>{
        parent.removeChild(newElement)
    })
    parent.appendChild(newElement)
})
secbutton.addEventListener('click', ()=>{
    const newElement = document.createElement('span')
    newElement.innerText = "Appended Child"
    newElement.addEventListener('click',()=>{
        parent.removeChild(newElement)
    })
    parent.prepend(newElement)
})