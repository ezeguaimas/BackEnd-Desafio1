class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Validar campos obligatorios
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.log("Error: Todos los campos son obligatorios");
    }

    // Validar key code
    const codeRepeat = this.products.find((p) => p.code === product.code);
    if (codeRepeat) {
      console.log("Error: El código del producto ya existe");
      return;
    }

    // Asignar id autoincrementable
    product.id = this.products.length + 1;

    // Agregar el producto al array
    this.products.push(product);
    console.log("Producto agregado exitosamente");
  }

  // Obtener el array de productos
  getProducts() {
    console.log(this.products);
    return this.products;
  }

  // Obtener un producto por id
  getProductById(idProduct) {
    const reqProduct = this.products.find(
      (product) => product.id === idProduct
    );
    if (reqProduct) {
      return reqProduct;
    } else {
      console.error("Not found");
      return "Not found";
    }
  }
}
