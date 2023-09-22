import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProducts } from "../models/product";

export const selectCountProducts = createSelector(
    createFeatureSelector('items'),
    (state: IProducts[]) => {
        return state.length;
    }
)

export const selectTotalPrice = createSelector(
    createFeatureSelector('items'),
    (state: IProducts[]) => {
        let totalPrice = 0; 
        state.forEach(p => totalPrice += p.price)
        return totalPrice;
    }
)

export const listOfProducts = createSelector(
    createFeatureSelector('items'),
    (state: IProducts[]) => {
        return state;
    }
)