const box = document.querySelector('.box');
async function fetchUser() {
    try {
        const res = await fetch('https://dummyjson.com/products')
        const user = await res.json()
        const pro = user.products
        pro.forEach((info, i) => {
            const card = document.createElement('div')
            let img = document.createElement('img')
            let brand = document.createElement('h2')
            let name = document.createElement('h2')
            let description = document.createElement('p')
            let price = document.createElement('p')
            let stock = document.createElement('p')
            // img.innerHTML = `Img: ${info.images}`
            // console.log(info.images);
            img.setAttribute('src', pro[i].thumbnail)
            // console.log(img);
            brand.innerHTML = `Brand: ${info.brand}`
            name.innerHTML = `Name: ${info.title}`
            description.innerHTML = `Description: ${info.description}`
            price.innerHTML = `Price: ${info.price}`
            stock.innerHTML = `Stock: ${info.stock}`
            card.append(img)
            card.append(brand)
            card.append(name)
            card.append(description)
            card.append(price)
            card.append(stock)
            box.append(card)
        });
    } catch (error) {
        console.log(error);
    }
}
fetchUser()