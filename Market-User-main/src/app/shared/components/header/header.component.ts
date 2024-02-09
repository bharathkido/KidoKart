import { Component, Input, OnInit } from '@angular/core';
import { CartsService } from 'src/app/carts/services/carts.service';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() cart: any
  cartView: any=[];
  cartLen: any =[];
  cartViewNew: any =[];
  constructor(
    public service: ProductsService,
    public cartService: CartsService
    ) { }

  ngOnInit(): void {
    console.clear();
    console.log(10,'dsf','dsf')
    this.cartLen = localStorage.getItem('cart');
    let cartNew = JSON.parse(this.cartLen)
    this.cartView = cartNew.length ? cartNew : []
    this.service.subject.subscribe((res:any)=>{
        this.cartView = res
    })

    // this.cartService.cartData.subscribe((res:any)=>{
    //   console.log("ressss",res)
    //   this.cartViewNew.push(res)
    // })
  }
  
  ngOnDestroy(){
    this.service.subject.unsubscribe();
  }

}
