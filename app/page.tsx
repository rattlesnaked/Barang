"use client"

import { useProductContext } from "./controllers/ProductContext";

export default function Home() {
  const { products } = useProductContext();
  return (
    <div className="p-4 bg-white h-fit rounded-lg">
      <h1 className="flex text-xl font-bold text-black mb-4">Product List</h1>
      <div className='flex max-h-96 overflow-auto rounded-lg shadow-lg'>
        <table className="table min-w-full bg-gray-800 rounded-lg">
          <thead className="sticky top-0">
            <tr className="bg-gray-700">
              <th className="py-3 px-4 text-left text-gray-300">Nama</th>
              <th className="py-3 px-4 text-left text-gray-300">Harga Beli</th>
              <th className="py-3 px-4 text-left text-gray-300">Harga Jual</th>
              <th className="py-3 px-4 text-left text-gray-300">Stok</th>
              <th className="py-3 px-4 text-left text-gray-300">Kode</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b border-gray-600 hover:bg-gray-700">
                <td className="py-3 px-4 text-gray-200">{product.nama}</td>
                <td className="py-3 px-4 text-gray-200">Rp {product.hargaBeli.toLocaleString()}</td>
                <td className="py-3 px-4 text-gray-200">Rp {product.hargaJual.toLocaleString()}</td>
                <td className="py-3 px-4 text-gray-200">{product.stok}</td>
                <td className="py-3 px-4 text-gray-200">{product.kode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className="flex text-xl mt-10 font-bold text-black mb-4">Recent Activity</h1>
    </div>
  );
}
