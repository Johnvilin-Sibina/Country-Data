var result = fetch ("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>console.log(data1));

var res = fetch ("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>bar(data1));

var container = document.createElement("div");
container.className = "container"

var row = document.createElement("div");
row.className = "row"


function bar(data1){
   for(var i=0;i<data1.length;i++){
      var col = document.createElement("div");
      col.className = "col-md-4"

      col.innerHTML = `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data1[i].name.common}</h5>
        <h6>${data1[i].capital ? data1[i].capital : "Capital not found"}<h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>`
    row.append(col);
    container.append(row);
    document.body.append(container)
   }
}


















