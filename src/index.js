const nav = document.querySelector('#duck-nav')
const displayButton = document.querySelector('#duck-display-likes')
const displayName = document.querySelector('#duck-display-name')
const displayImg = document.querySelector('#duck-display-image')
const form = document.querySelector('#new-duck-form')

fetch("http://localhost:3000/ducks")
.then(resp => resp.json())
.then(duckList => {
    duckList.forEach((duck) => {
        renderDuck(duck)
    })
})

displayButton.addEventListener('click', () => {
    const words = displayButton.textContent.split(' ')
    let count = Number.parseInt(words[0])
    displayButton.textContent = `${count + 1} likes`
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const newDuck = {
        "name": event.target[0].value,
        "img_url": event.target[1].value,
        "likes": 0
    }
    console.log(newDuck)
    renderDuck(newDuck)
})

function renderDuck(duck) {
    const img = document.createElement('img')
    img.src = duck.img_url
    img.alt = duck.name
    nav.appendChild(img)

    img.addEventListener('click', (event) => {
        displayName.textContent = duck.name
        displayImg.src = duck.img_url
        displayImg.alt = duck.name
        displayButton.textContent = `${duck.likes} likes`
    })
}