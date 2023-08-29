const duckNav = document.querySelector('#duck-nav')
const duckName = document.querySelector('#duck-display-name')
const duckDisplayImg = document.querySelector('#duck-display-image')
const duckLikes = document.querySelector('#duck-display-likes')
const duckForm = document.querySelector('#new-duck-form')

fetch("http://localhost:3000/ducks")
.then(resp => resp.json())
.then(data => {
    data.forEach(duck => {
        addDuckNav(duck)
    })
})

duckLikes.addEventListener('click', event => {
    const currNum = parseInt(duckLikes.textContent)
    const newNum = currNum + 1
    duckLikes.textContent = newNum
})

duckForm.addEventListener('submit', event => {
    event.preventDefault()
    const duckInputName = event.target['duck-name-input'].value
    const duckImg = event.target['duck-image-input'].value

    const newDuck = {
        img_url: duckImg,
        name: duckInputName,
        likes: 0
    }
    
    addDuckNav(newDuck)
})


function addDuckNav(duck) {
    const duckImg = document.createElement('img')
    duckImg.src = duck.img_url
    duckImg.alt = duck.name  // not required

    duckImg.addEventListener('click', event => {
        duckName.textContent = duck.name
        duckDisplayImg.src = duck.img_url
        duckDisplayImg.alt = duck.name
        duckLikes.textContent = duck.likes
    })
    
    duckNav.append(duckImg)
}