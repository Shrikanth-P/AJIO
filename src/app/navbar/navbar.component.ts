import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

user : any;
 constructor(private authService:UserService,private cartSvc:CartService) { }
 auth:boolean = false ;
 admin:boolean = false;
 cartCount: number=0;
 productentered: string=' '  


 ngOnInit(): void {
   this.authService.authSubject.subscribe(
     data => 
     {
       console.log('auth inside nav component: ' + data);
       this.auth = data;
     }
   );
   
   this.authService.authad.subscribe(
    data => 
    {
      console.log('auth inside nav component: ' + data);
      this.admin = data;
      console.log(this.admin);
      
    }
  );
    
  this.authService.getUserDetails().subscribe(res=>{
    this.user=res
    })
   
   this.cartSvc.getCartItems().subscribe (     
     (response) =>
      {        
       this.cartCount=response.length;
       console.log(this.cartCount);
      }
    ) 
   this.cartSvc.countSubject.subscribe (     
     (response) =>
      {        
       this.cartCount=response;
       console.log(this.cartCount);
      }
    )
   
    
}
}
