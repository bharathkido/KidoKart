import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Input() data:Product
  @Output() item = new EventEmitter();
  addButton:boolean = false;
  amount:number = 1
  constructor(public service: ProductsService) { }

  ngOnInit(): void {
  }


  add() {
    this.item.emit({item:this.data ,quantity:this.amount });
  }
 
}
