let fake = new XMLHttpRequest()
 fake.open("GET", "https://fakestoreapi.com/products")
fake.send()
fake.addEventListener('load', function () {
    let meat = fake.responseText
    let data = JSON.parse(meat)
    let html = ""
    
    for (let i = 0; i < data.length; i++){
        console.log(data[i])
        html += `

        <img src="${data[i].image}" alt="">
</div>
<div class="details">
  <h3>${data[i].description}</h3>
  <p>${data[i].category}</p>
  <p>${data[i].price}</p>
   <p>${data[i].rating}</p>
    <p>${data[i].title}</p>

</div>
        
        `;
    }
    document.querySelector('.container').innerHTML = html
 })