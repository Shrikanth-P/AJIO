import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  formValue!: FormGroup;
  productModelObj : Product = new Product();
  productData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
 
  constructor(private formbuilder: FormBuilder, private api:ProductService) { }
  gendervalue : string =''
  typevalue : string =''
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      pname:[''],
      pdescription:[''],
      gender:[''],
      type:[''],
      size:[''],
      price:[''],
      quantity:[''],
      img:['']
    })
    this.getProducts();
  }

  clickAddProduct(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postProductDetails(){
    this.productModelObj.pname = this.formValue.value.pname;
    this.productModelObj.pdescription = this.formValue.value.pdescription;
    this.productModelObj.gender = this.formValue.value.gender;
    this.productModelObj.type = this.formValue.value.type;
    this.productModelObj.size = this.formValue.value.size;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.quantity = this.formValue.value.quantity;
    this.productModelObj.img = this.formValue.value.img;
    this.api.postProducts(this.productModelObj).subscribe(res=>{
      console.log(res);
      alert("New product added successfully!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    },
    err=>{
      alert("Something went wrong. Please check again!")
    })
  }

  getProducts(){
    this.api.getProductDetails().subscribe(res=>{
      this.productData = res;
    }, err=>{
      
    })
  }

  deleteProducts(product: any){
    this.api.deleteProducts(product.id).subscribe(res=>{
      alert("The Product deleted!")
      this.getProducts();
    }), 
    ({

    })
  }

  onEdit(product: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.productModelObj.id = product.id;
    this.formValue.controls['pname'].setValue(product.pname);
    this.formValue.controls['pdescription'].setValue(product.pdescription);
    this.formValue.controls['gender'].setValue(product.gender);
    this.formValue.controls['type'].setValue(product.type);
    this.formValue.controls['size'].setValue(product.size);
    this.formValue.controls['price'].setValue(product.price);
    this.formValue.controls['quantity'].setValue(product.quantity);
    this.formValue.controls['img'].setValue(product.img);
  }

  updateProductDetails(){
    this.productModelObj.pname = this.formValue.value.pname;
    this.productModelObj.pdescription = this.formValue.value.pdescription;
    this.productModelObj.gender = this.formValue.value.gender;
    this.productModelObj.type = this.formValue.value.type;
    this.productModelObj.size = this.formValue.value.size;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.quantity = this.formValue.value.quantity;
    this.productModelObj.img = this.formValue.value.img;
    this.api.updateProducts(this.productModelObj, this.productModelObj.id).subscribe(res=>{
      alert("The product updated!")

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    })
  }
}