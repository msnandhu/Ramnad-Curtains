import { createContext, useContext } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export { ProductContext };
