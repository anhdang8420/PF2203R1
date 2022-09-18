let croissant1 = new Product("Croissant", 18000, "images/croissant.jpg", "Croissant");
let croissant2 = new Product("Pain au chocolate", 22000, "images/pain-au-chocolate.jpg", "Croissant");
let croissant3 = new Product("Pain au rasin", 20000, "images/pain-au-rasin.jpg", "Croissant");
let croissant4 = new Product("Baton Nga", 20000, "images/baton-nga.jpg", "Croissant");
let sourdough1 = new Product("Baguette ngũ cốc", 150000, "images/baguette-ngu-coc.jpg", "Sourdough")
let sourdough2 = new Product("Bánh mì lúa mạch 8 loại hạt", 650000, "images/baguette-ngu-coc.jpg", "Sourdough")
let sourdough3 = new Product("Bánh mì lúa mạch hạt dẻ cười", 450000, "images/banh-mi-nguyen-cam.jpg", "Sourdough")
let sourdough4 = new Product("Bánh mì lúa mạch hạt óc chó", 700000, "images/banh-mi-ngu-coc-o-tron.jpg", "Sourdough")
let sourdough5 = new Product("Bánh mì lúa mạch ổ tròn", 200000, "images/baguette-ngan-2.jpg", "Sourdough")
let sourdough6 = new Product("Bánh mì lúa mạch nho", 650000, "images/banh-mi-hoa-cuc-2.jpg", "Sourdough")
let sourdough7 = new Product("Bánh mì lúa mạch bơ", 300000, "images/baguette-ngu-coc.jpg", "Sourdough")

let products  = [croissant1, croissant2, croissant3, croissant4,sourdough1, sourdough2, sourdough3, sourdough4, sourdough5,sourdough6,sourdough7];

function render(array) {
    let content = "<table class='table table-bordered' id='dataTable' width='100%' cellspacing='0'>"
    content += "<tr><td><b>Index</b></td><td><b>Product Name</b></td><td><b>Product Price</b></td>" +
        "<td><b> Image</b></td><td><b>Category</b></td><td></td>" +
        "<td><b id='red'>" + products.length + " products</b></td></tr>"
    for (let i = 0; i < products.length; i++) {
        content += "<tr>"
        content += "<td>" + (i + 1) + "</td>"
        content += "<td>" + products[i].name + "</td>"
        content += "<td>" + products[i].price + "</td>"
        content += "<td>" + "<img class='img-thumbnail' width='100'  alt='Lỗi hiện ảnh' src=" + products[i].image + ">" + "</td>"
        content += "<td>" + products[i].category + "</td>"
        content += "<td><button class='btn btn-secondary' onclick='editProduct(" + i + ")'>Edit</button></td>"
        content += "<td><button class='btn btn-secondary' onclick='deleteProduct(" + i + ")'>Delete</button></td>"
        content += "</tr>"
    }
    content += "</table>"
    document.getElementById("displayElement").innerHTML = content
}


function showListProducts() {
    render(products)
}

// CRUD
function addProduct() {
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let image = document.getElementById("image").value
    let category = document.getElementById("category").value
    let product = new Product(name, price, image, category)
    products.push(product)
    render()
}
function deleteProduct(index) {
    if (confirm("Are you sure you want to delete " +  products[index].name + " ?")) {
         products.splice(index, 1)
    }
    render()
}
let indexEdit;

function editProduct(index) {
    indexEdit = index
    document.getElementById("name").value = products[index].name
    document.getElementById("price").value = products[index].price
    document.getElementById("image").value = products[index].image
    document.getElementById("category").value = products[index].category
    document.getElementById("add").value = "Edit"
    document.getElementById("add").setAttribute("onclick", "changeValueProductEdit()")
}

function changeValueProductEdit() {
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let image = document.getElementById("image").value
    let category = document.getElementById("category").value
    let product = new Product(name, price, image, category)
    products[indexEdit] = product
    document.getElementById("add").value = "Add"
    document.getElementById("add").setAttribute("onclick", "addProduct()")
    render()
}

function addProduct(){
        let name = document.getElementById("name").value
        let price = document.getElementById("price").value
        let image = document.getElementById("image").value
        let category = document.getElementById("category").value
        let product = new Product(name, price, image, category)
        products.push(product)
        render()
    }
render()