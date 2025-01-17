"use client"

import React, { useState } from 'react';
import {Product, dummyProducts} from '../../models/Product';
import { useProductContext } from "../../controllers/ProductContext";
import { useRouter } from 'next/navigation';


const NewProduct: React.FC = () => {
    const router = useRouter();
    const [TheProduct, setTheProduct] = useState<Product>({
        nama: '',
        hargaBeli: 0,
        hargaJual: 0,
        stok: 0,
        kode: ''
    });

    const { addProduct } = useProductContext();

    const handleClear = () => {
        setTheProduct({
            nama: '',
            hargaBeli: 0,
            hargaJual: 0,
            stok: 0,
            kode: ''
        });
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        // Memperbarui state berdasarkan nama input
        setTheProduct((prevProduct) => ({
            ...prevProduct,
            [name]: name === "hargaBeli" || name === "hargaJual" || name === "stok" ? Number(value) : value,
            
        }));
        
        
    };

    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addProduct(TheProduct); // Menambahkan produk ke konteks
        router.push("/")
        // Reset form setelah submit jika diperlukan
        handleClear();
    };

    return(
        <div className='flex flex-row w-full'>
            <div className="p-4 basis-1/2 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Nama</label>
                    <input
                        type="text"
                        name="nama"
                        value={TheProduct.nama}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-1/2 border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Harga Beli</label>
                    <input
                        type="number"
                        name="hargaBeli"
                        value={TheProduct.hargaBeli > 0 ? TheProduct.hargaBeli:""}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-1/2 border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Harga Jual</label>
                    <input
                        type="number"
                        name="hargaJual"
                        value={TheProduct.hargaJual > 0 ? TheProduct.hargaJual:""}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-1/2 border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Stok</label>
                    <input
                        type="number"
                        name="stok"
                        value={TheProduct.stok > 0 ? TheProduct.stok:""}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-1/2 border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className='flex flex-row justify-between mt-10 mb-10'>
                    <button type="button" onClick={handleClear} 
                            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200">
                            Clear All
                    </button>
                    <button type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
                            Next Step
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default NewProduct;
