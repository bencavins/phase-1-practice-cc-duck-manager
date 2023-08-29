const duckNav = document.querySelector('#duck-nav')
const duckName = document.querySelector('#duck-display-name')
const duckDisplayImg = document.querySelector('#duck-display-image')
const duckLikes = document.querySelector('#duck-display-likes')
const duckForm = document.querySelector('#new-duck-form')

fetch("http://localhost:3000/ducks")
.then(resp => resp.json())
.then(data => {
    data.forEach(duck => {
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
    
    const newDuckImg = document.createElement('img')
    newDuckImg.src = duckImg
    newDuckImg.alt = duckInputName // not required

    newDuckImg.addEventListener('click', event => {
        duckName.textContent = duckInputName
        duckDisplayImg.src = duckImg
        duckDisplayImg.alt = duckInputName
        duckLikes.textContent = 0
    })
    duckNav.append(newDuckImg)
})