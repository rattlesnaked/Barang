"use client"

import { useProductContext } from "@/app/controllers/ProductContext";
import { Product } from "@/app/models/Product";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBarcode, faTrash } from '@fortawesome/free-solid-svg-icons';

const ProductOut: React.FC = () => {
    const {products, updateProduct } = useProductContext();
    const [outProducts, setOutProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        <div className="h-fit min-h-fit py-5 px-5 bg-white rounded-lg shadow-md">
            <h1 className="text-xl font-bold text-black mb-4">Produk Keluar</h1>
            <h2 className="text-base font-bold text-black mb-2">List Produk</h2>
            <div className="flex flex-row my-1">
                <button type="button" className="flex items-center mr-1 text-sm border-cyan-500 border-2 shadow-md py-1 px-2 rounded-md hover:bg-cyan-500 group">
                    <p className="text-slate-950 group-hover:text-sky-50">Scan</p>
                    <FontAwesomeIcon icon={faBarcode} className="ml-1 text-slate-950 group-hover:text-sky-50"/>
                </button>
                <button type="button" className="flex items-center ml-1 text-sm border-cyan-500 border-2 shadow-md py-1 px-2 rounded-md hover:bg-cyan-500 group">
                    <p className="text-slate-950 group-hover:text-sky-50">Tambah</p>
                    <FontAwesomeIcon icon={faPlus} className="ml-1 text-slate-950 group-hover:text-sky-50"/>
                </button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nama</td>
                            <td>Stok</td>
                            <td>Jumlah Keluar</td>
                            <button type="button" className="flex items-center ml-1 text-sm border-red-950 border-2 shadow-md p-1 rounded-md hover: border-red-200 hover:bg-red-500 group">
                                <FontAwesomeIcon icon={faTrash} className="text-slate-950 group-hover:text-sky-50"/>
                            </button>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-base font-bold py-3 px-4 text-left text-gray-950">Pilih Produk :</p>
            <div className="flex flex-row justify-between max-h-min">
                <div className='flex basis-5/12 max-h-[35rem] overflow-y-scroll'>
                    <table className="table min-w-full rounded-lg">
                        <thead>
                            <tr className="sticky top-0 bg-gray-700 py-3 px-4 text-left text-gray-300">
                                <th className="py-3 px-4 text-sm text-left text-gray-300">Nama</th>
                                <th className="py-3 px-4 text-sm text-left text-gray-300">Stok</th>
                                <th className="py-3 px-4 text-sm text-left text-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                            <tr key={index} className="border-b border-gray-600 text-sm text-black">
                                <td className="py-3 px-4">{product.nama}</td>
                                <td className="py-3 px-4">{product.stok}</td>
                                <td>
                                    <button type="button" onClick={() => {handleAdd(product)
                                        setIsModalOpen(true);}
                                    } disabled={outProducts.some(p => p.kode === product.kode)}
                                    className={`bg-blue-500 text-xs text-white py-2 px-4 rounded-md 
                                    ${outProducts.some(p => p.kode === product.kode) ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600 text-white hover:bg-blue-600 transition duration-200'}`}>
                                        {outProducts.some(p => p.kode === product.kode) ? 'Sudah Ditambahkan' : 'Tambah'}
                                    </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-lg font-bold">Konfirmasi Hapus</h2>
                        <p>Apakah Anda yakin ingin menghapus {outProducts[1]?.nama}?</p>
                        <div className="mt-4">
                            <button 
                                onClick={() =>handleDelete} 
                                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                            >
                                Hapus
                            </button>
                            <button 
                                onClick={() => setIsModalOpen(false)} 
                                className="ml-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            )}
                <div>
                    <table className="table min-w-full bg-gray-800 rounded-lg">
                        <thead>

                        </thead>
                        <tbody>
                            {outProducts.map((product, index) => (
                                <tr key={index} className="border-b border-gray-600">
                                    <td>{product.nama}</td>
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