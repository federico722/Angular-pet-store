import { Injectable } from '@angular/core';

// definimos la interfas para representar un un producto
interface Product {
  id: number;
  name: string;
  price: number;
  description:string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {
  
  
  // Array para almacenar los productos del carrito
  private cart: Product[] = [];
  
  constructor() { }

    // Crear Método para añadir un producto al carrito
    addToCart(product: Product): void {
      this.cart.push(product);
    }
    
  
    removeProductById(productId: number): void{
      this.cart = this.cart.filter(product => product.id !== productId);
    }
  
    // Crear Método para obtener todos los productos del carrito
    getAllProducts(): Product[] {
      return this.cart;
    }

    // Crear Método para calcular el precio total de los productos en el carrito
    getTotalPrice(): number {
      return this.cart.reduce((total, product)=> total + product.price, 0)
    }

      // Crear Método para vaciar el carrito
    clearCart(): void{
      this.cart = [];
    }
}
