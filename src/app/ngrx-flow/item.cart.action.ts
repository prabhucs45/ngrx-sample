import { createAction, props} from '@ngrx/store';
import { IProducts } from '../models/product';

export const addProduct = createAction('Add Item', props<IProducts>());
export const removeProduct = createAction('Remove Item', props<IProducts>());
export const clearItem = createAction('Clear Items');

