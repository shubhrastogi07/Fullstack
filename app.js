const but = document.querySelector('button')
const getText = document.querySelector('input')
const parent = document.querySelector('div.grid')

const getData = async(item) => {
    console.log(item)
    const url = `https://api.edamam.com/search?app_id=e7c6fc27&app_key=58511197453dd68a356ab410c1b1c877&q=${item}`
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    const recipies = data.hits
    recipies.forEach(item => {
        const { recipe } = item
        console.log(recipe)
        const { label, image, source, calories } = recipe
        const template = ` 
                        <img class="card__image" src="${image}" />
                        <div class="card__data">
                            <div class="card__info">
                                <h2>${label}</h2>
                                <p>From ${source}</p>
                            </div>
                            <h3 class="card__price">${calories.toFixed(2)}</h3>
                            <button class="card__add">+</button>
                        </div>
                    `
        const newCard = document.createElement('article')
        newCard.setAttribute('class', 'card')
        newCard.setAttribute('style', 'margin-bottom:50px')
        newCard.innerHTML = template
        console.log(newCard)
        parent.appendChild(newCard)
    })

}

//  add event listener to the button
but.addEventListener('click', (e) => {
    getData(getText.value)
})