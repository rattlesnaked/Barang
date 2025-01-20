"use client"

import { useProductContext } from "@/app/controllers/ProductContext";
import { Product } from "@/app/models/Product";
import { useState } from "react";

const ProductOut: React.FC = () => {
    const {products, updateProduct } = useProductContext();
    const [outProducts, setOutProducts] = useState<Product[]>([]);

    const handleAdd = (product: Product) => {
        setOutProducts((prevProducts) => [...prevProducts, product])
    }

    const handleDelete = (product: Product) => {
        setOutProducts((prevProducts) => [...prevProducts, product])

        setOutProducts((prevProduct) => prevProduct.filter(key => key !== product))
    }

    const handleUpdate = () => ({

    })
    

    return(
        <div className="flex flex-row h-fit min-h-fit">
            <div className="p-4 bg-white max-h-min w-3/6 rounded-lg shadow-md">
            {outProducts?.length}
                <h1 className="text-xl font-bold text-black mb-4">Produk Keluar</h1>
                <p className="text-base font-bold py-3 px-4 text-left text-gray-950">Pilih Produk :</p>
                <div className='flex  max-h-[35rem] overflow-y-scroll rounded-lg shadow-lg hover:overflow-y-scroll'>
                    <table className="table min-w-full bg-gray-800 rounded-lg">
                        <thead className="">
                            <tr className="sticky top-0 bg-gray-700 py-3 px-4 text-left text-gray-300">
                                <th className="py-3 px-4 text-sm text-left text-gray-300">Nama</th>
                                <th className="py-3 px-4 text-sm text-left text-gray-300">Stok</th>
                                <th className="py-3 px-4 text-sm text-left text-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                            <tr key={index} className="border-b border-gray-600">
                                <td className="py-3 px-4 text-sm text-gray-200">{product.nama}</td>
                                <td className="py-3 px-4 text-sm text-gray-200">{product.stok}</td>
                                <td>
                                    <button type="button" onClick={() => handleAdd(product)} disabled={outProducts.some(p => p.kode === product.kode)}
                                    className={`bg-blue-500 text-xs text-white py-2 px-4 rounded-md 
                                    ${outProducts.some(p => p.kode === product.kode) ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600 text-white hover:bg-blue-600 transition duration-200'}`}>
                                        {outProducts.some(p => p.kode === product.kode) ? 'Sudah Ditambahkan' : 'Tambah'}
                                    </button>
                                </td>
                                <td>
                                    <button type="button" onClick={() => handleDelete(product)} disabled={!outProducts.some(p => p.kode === product.kode)}
                                    className={`bg-blue-500 text-xs text-white py-2 px-4 rounded-md 
                                    ${outProducts.some(p => p.kode === product.kode) ? 'bg-red-500 hover:bg-red-600 text-white hover:bg-red-600 transition duration-200' : 'bg-gray-500'}`}>
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            {/* <div className="p-4 bg-white basis-1/3 h-fit rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-black mb-4">Produk Keluar</h1>
                <p className="sticky top-0 text-base font-bold py-3 px-4 text-left text-gray-950">Pilih Produk :</p>
                <div className='flex  max-h-96 overflow-y-scroll rounded-lg shadow-lg hover:overflow-y-scroll'>
                    <table className="table min-w-full bg-gray-800 rounded-lg">
                        <thead className="">
                            <tr className="sticky top-0 bg-gray-700 py-3 px-4 text-left text-gray-300">
                                <th className="py-3 px-4 text-sm text-left text-gray-300">Nama</th>
                                <th className="py-3 px-4 text-sm text-left text-gray-300">Stok</th>
                                <th className="py-3 px-4 text-sm text-left text-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                            <tr key={index} className="border-b border-gray-600">
                                <td className="py-3 px-4 text-sm text-gray-200">{product.nama}</td>
                                <td className="py-3 px-4 text-sm text-gray-200">{product.stok}</td>
                                <td>
                                    <button type="button" 
                                    className="bg-blue-500 text-xs text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
                                        Tambah
                                    </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> */}

        </div>
    )
}

export default ProductOut;