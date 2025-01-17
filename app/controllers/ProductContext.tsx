"use client"
import React, { createContext, useContext, useState } from 'react';
import { Product, dummyProducts } from '../models/Product';

interface ProductContextType {
    products: Product[];
    addProduct: (product: Product) => void;
    updateProduct: (newProduct: Product) => void;
    deleteProduct: (kodeProduct: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>(dummyProducts);

    const addProduct = (newProduct: Product) => {
        const kodeProduct = `P${String(products.length + 1).padStart(3, '0')}`
        const finalProduct = {...newProduct, kode: kodeProduct}
        setProducts((prevProducts) => [...prevProducts, finalProduct]);
    };

    const updateProduct = (newProduct: Product) => {
        setProducts((prevProducts) => 
            prevProducts.map((product) =>
                product.kode === newProduct.kode ? {...product, ...newProduct} : product
            )
        )
    };

    const deleteProduct = (kodeProduct: string) => {
        setProducts((prevProducts) => 
            prevProducts.filter((product) => product.kode !== kodeProduct)
        )
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct}}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
};