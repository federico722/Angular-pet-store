import { Component, OnInit } from '@angular/core';
import { CartServicesService } from '../../services/cart-services.service';
import { ApiService } from '../../services/api.service';
import { Producto } from '../../Dto/productoRepository';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})



export class CatalogoComponent implements OnInit{

  

  title = 'pet-store';

  public productos: Producto[] = [];

  	// inyectar la dependencia del servicio en el constructor.
    constructor(
      private cartServicesService: CartServicesService,
      private apiService: ApiService
    ){}

    ngOnInit(): void {
      this.apiService.getProducts()
      .subscribe((res : any) => {
        this.productos = res;
      });
    }

  // crea un metodo para añadir un producto al carrito
  // !actualizar el método para añadir un producto al carrito mediante el servicio
    addToCart(product: any){
      
    // !utilizacion del metodo addTocart del servicio cartServicesService 
    this.cartServicesService.addToCart(product);
    console.log(product);
    
    // ?utilizacion del metodo getCart del servicio cartServicesService 
    // !para mostrar en el console.log los producto añadidos
    console.log( this.cartServicesService.getAllProducts());
    
  }

  // Array de objetos de productos 
  products = [{
    name: 'Bike_1',
    price: 120,
    description: 'Product Description',
    inventory: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cantidad: 0
  },
  {
    name: 'Bike_2',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
  },
  {
    name: 'Bike_3',
    price: 120,
    description: 'Product Description',
    inventory: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cantidad: 0
  }, 
  {
    name: 'Bike_4',
    price: 120,
    description: 'Product Description',
    inventory: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cantidad: 0
  },
  {
    name: 'Bike_5',
    price: 120,
    description: 'Product Description',
    inventory: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cantidad: 0
  }, 
  {
    name: 'Bike',
    price: 120,
    description: 'Product Description',
    inventory: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cantidad: 0
  },
  {
    name: 'Bike_6',
    price: 120,
    description: 'Product Description',
    inventory: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cantidad: 0
  }, 
  {
    name: 'Bike_7',
    price: 120,
    description: 'Product Description',
    inventory: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cantidad: 0
  },
  {
    name: 'Bike_8',
    price: 120,
    description: 'Product Description',
    inventory: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cantidad: 0
  }, 
  {
    name: 'Bike_9',
    price: 120,
    description: 'Product Description',
    inventory: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cantidad: 0
  },
  ]

}

