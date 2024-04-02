import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent implements OnInit{
  // creacion del Input que recibe del componente padre el array de productos

  @Input() product = {
    name: 'Bike',
    price: 120,
    description: 'product Description',
    inventory: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cantidad: 0,
  };
  // * 1. agregar output
  @Output() addToCart = new EventEmitter();

  cantidad: number = 0 ; 
  soldOut: boolean=false;

  //fin objeto de producto
  constructor() { }

  ngOnInit() {
      
  }

  addProduct () {
    if (this.cantidad < this.product.inventory ) {
      this.soldOut = false;
      this.cantidad++;
    } else {
      this.soldOut = true;
    }
  }
  /*logica de la funcion addProduct:
    si la cantidad es menor al inventario del producto entonces
    el producto no esta agotado, agotado es falso y la cantidad aumenta en 1
    
    si la cantidad es mayor al inventario del producto entonces 
    el producto esta agotado, agotado es verdadero 
  */

  removeProduct (){
    if(this.cantidad > 0){
      this.soldOut = false;
      this.cantidad--;
    }
  }
  /*logica de la funcion removeProduct
    si la cantidad es mayor a 0 entonces 
    el producto no esta agotado, agotado es falso 
    la cantidad disminuye en 1
  */

    
  addToCartHandler(){ //2. crear un  metodo
    
    if (this.cantidad > 0) { //3. validar si tiena una cantidad de producto      
        this.product['cantidad'] = this.cantidad //4. asigna la cantidad a perdir
        this.addToCart.emit(this.product)  //5. enviar la informacion por el event emiter del output
    }
    return null;
  }
}
