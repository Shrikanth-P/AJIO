import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  products:any;
  math = Math;

  constructor(private productData:ProductService, private cartsvc : CartService) { 
    this.productData.getProductDetails().subscribe(res=>{
    this.products=res
    })
  }

  
  ngOnInit(): void {
  }
 
 
 
  cart:Cartitem={
    pid:0,
    pname:'',
    pdescription:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1    
  }
  quantity:number=1;

  addToCart(product:any){
    this.cart.pname=product.pname;
    this.cart.pdescription=product.pdescription;
    this.cart.price=product.price;
    this.cart.img=product.img;
    this.cart.price=product.price;
    this.cart.totalPrice=product.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.pid=product.id;
    this.cartsvc.addToCart(this.cart);
    console.log(product.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })
    this.cartsvc.getCount();
    
    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    
  }
  @Input()product:any

}
