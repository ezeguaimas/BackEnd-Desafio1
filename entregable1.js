const products = [];

class ProductManager {
  constructor(title, description, price, thumbnail, code, stock) {
    this.id = products.length + 1;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

function addProduct(title, description, price, thumbnail, code, stock) {
  if (!title || !description || !price || !thumbnail || !code || !stock) {
    console.error("Todos los campos son obligatorios");
  }
  const codeRepeat = products.find((product) => product.code === code);
  if (codeRepeat) {
    console.error("El valor de code no puede repetirse");
  } else {
    products.push(
      new ProductManager(title, description, price, thumbnail, code, stock)
    );
  }
}

function getProducts() {
  console.log(products);
}

function getProductById(idProduct) {
  const reqProduct = products.find((product) => product.id === idProduct);
  reqProduct ? console.log(reqProduct) : console.error("Not found");
}

//----------TEST---------//

//getProducts ANTES de agregar el primer producto
console.log("Primer getProducts - Array vacio: ");

getProducts();

//Se agrega el primer producto
console.log("Se agrega el primer producto: ");

addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

//getProducts DESPUES de agregar el primer producto
console.log(
  "Primer getProducts: getProducts DESPUES de agregar el primer producto"
);

getProducts();

//Se agrega el SEGUNDO producto con los mismos parametros
console.log(
  "Se agrega el SEGUNDO producto con los mismos parametros, debe salir que code no puede repetirse"
);

addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

//Se agrega el TERCER producto con parametros DISTINTOS para no repetir el campo code
console.log("Se agrega el TERCER producto con parametros DISTINTOS para no repetir el campo code ");

addProduct(
  "producto prueba",
  "Este es un producto prueba con otro code",
  200,
  "Sin imagen",
  "cba321",
  25
);

getProducts();

//Se busca un producto por Id 1
console.log("getProducts - Se busca un producto por Id 1");

getProductById(1);

//Se busca un producto por Id 2
console.log("getProducts - Se busca un producto por Id 2");

getProductById(2);

//Se busca un producto por Id que no existe. debe devolver Not Found
console.log("getProducts - Se busca un producto por Id que no existe. debe devolver Not Found");

getProductById(5);

//Fin del test
console.log("Fin del test");
