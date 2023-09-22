import { Component } from '@angular/core';
import { IProducts } from './models/product';
import { Store } from '@ngrx/store';
import { addProduct, clearItem } from './ngrx-flow/item.cart.action';
import { Observable } from 'rxjs';
import { listOfProducts, selectCountProducts, selectTotalPrice } from './ngrx-flow/item.cart.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ngrx-sample';
  counter$: Observable<number>;
  totalPrice$: Observable<number>;
  listOfProducts$!: Observable<IProducts[]>;

  products: any[] = {} as IProducts[];

  productList : any =[{
    "name":"Product 1",
    "price": 150
  },{
    "name":"Product 2",
    "price": 120
  },{
    "name":"Product 3",
    "price": 220
  },{
    "name":"Product 4",
    "price": 440
  }]

  addItem(product: any){
    this.store.dispatch(addProduct(product))
  }

  resetAll(){
    this.store.dispatch(clearItem());
  }

  constructor(private store: Store){
     this.counter$ = store.select(selectCountProducts);
     this.totalPrice$ = store.select(selectTotalPrice);
     this.listOfProducts$ = store.select(listOfProducts);
  }
}
