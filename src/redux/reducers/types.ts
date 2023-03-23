import { ICategoriesState } from "./categories/types";
import { IProductsState } from "./persons/types";

export interface IStoreState {
    categories: ICategoriesState;
    products: IProductsState;
} 