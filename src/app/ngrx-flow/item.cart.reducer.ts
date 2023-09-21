import { createReducer, on } from "@ngrx/store";
import { IProducts } from "../models/product";
import { addProduct, clearItem, removeProduct } from "./item.cart.action";

export const intialProducts : IProducts[] = [];

export const itemReducer = createReducer(
    intialProducts,
    on(clearItem, _ => []),
    on(addProduct, (entries, product) => {
        const entriesClone: IProducts[] = JSON.parse(JSON.stringify(entries));
        entriesClone.push(product);
        return entriesClone;
    }),
    on(removeProduct, (entries, product) => {
        const entriesClone: IProducts[] = JSON.parse(JSON.stringify(entries));
        const found = entriesClone.find(e => e.name == product.name);
        if (found){
            entriesClone.splice(entriesClone.indexOf(found), 1);
        }

        return entriesClone;
    })    
    
    )