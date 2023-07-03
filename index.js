

class ProductManager {
    constructor (){
      this.products = [];      
      this.id = 1;
    } 

    addProduct(title,description,price,thumbnail,code,stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log('Error: Todos los campos son obligatorios');
        return;
      }
      const producto = {
        id: this.id++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      }

      const productoExistente = this.products.find(product => product.code === code);
      if (productoExistente) {
        console.log('El código del producto ya existe');
        return;
      }

      this.products.push(producto);
    }; 

    getProducts = () => {
      return this.products;
    };

    getProductById(id){
    const buscador = this.products.find(elemento => elemento.id === id);
    
    if (buscador) {
      console.log('producto encontrado');
    }else{
      console.log('no se encontro el producto');
    }
        
    };
    
  }

  const productosPosibles = new ProductManager();

  productosPosibles.addProduct('auto','auto increible',1000,'ruta-de-imagen.jpg',2,3);
  productosPosibles.addProduct('moto','moto chica', 500,'ruta-de-imagen-2',1,2);
  productosPosibles.addProduct('bici', 'bici roja', 200, 'ruta-de-imagen-3',3,5);

  console.log(productosPosibles.getProducts());

  productosPosibles.getProductById(2);
  productosPosibles.getProductById(3);
  productosPosibles.getProductById(5);

  




  














/* const producto2 = productosPosibles.addProduct('moto','moto chica', 500,'ruta-de-imagen-2',2,2);
const producto3 = productosPosibles.addProduct('bici', 'bici roja', 200, 'ruta-de-imagen-3',3,5);

/* this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock; */