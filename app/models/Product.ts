export type Product = {
    nama: string;
    hargaBeli: number;
    hargaJual: number;
    stok: number;
    kode: string;
};

export const dummyProducts: Product[] = [
    { nama: 'Wireless Mouse', hargaBeli: 15000, hargaJual: 25000, stok: 35, kode: 'P001' },
    { nama: 'Bluetooth Headphones', hargaBeli: 30000, hargaJual: 45000, stok: 20, kode: 'P002' },
    { nama: 'USB-C Charging Cable', hargaBeli: 5000, hargaJual: 12000, stok: 50, kode: 'P003' },
    { nama: 'Portable SSD 1TB', hargaBeli: 400000, hargaJual: 550000, stok: 15, kode: 'P004' },
    { nama: 'HDMI Cable', hargaBeli: 10000, hargaJual: 20000, stok: 40, kode: 'P005' },
    { nama: 'Gaming Keyboard', hargaBeli: 60000, hargaJual: 90000, stok: 10, kode: 'P006' },
    { nama: 'Smartphone Stand', hargaBeli: 8000, hargaJual: 15000, stok: 25, kode: 'P007' },
    { nama: 'Webcam 1080p', hargaBeli: 30000, hargaJual: 45000, stok: 18, kode: 'P008' },
    { nama: 'Wireless Charger', hargaBeli: 25000, hargaJual: 40000, stok: 22, kode: 'P009' },
    { nama: 'Laptop Sleeve', hargaBeli: 20000, hargaJual: 35000, stok: 30, kode: 'P010' },
    { nama: 'Bluetooth Speaker', hargaBeli: 70000, hargaJual: 100000, stok: 12, kode: 'P011' },
    { nama: 'External Hard Drive 2TB', hargaBeli: 600000, hargaJual: 750000, stok: 8, kode: 'P012' },
    { nama: 'Smartwatch', hargaBeli: 250000, hargaJual: 350000, stok: 14, kode: 'P013' },
    { nama: 'Fitness Tracker', hargaBeli: 150000, hargaJual: 225000, stok: 20, kode: 'P014' },
    { nama: 'VR Headset', hargaBeli: 1200000, hargaJual: 1500000, stok: 5, kode: 'P015' },
    { nama: 'Gaming Mouse Pad', hargaBeli: 15000, hargaJual: 25000, stok: 40, kode: 'P016' },
    { nama: 'Phone Case', hargaBeli: 10000, hargaJual: 20000, stok: 45, kode: 'P017' },
    { nama: 'Drone', hargaBeli: 500000, hargaJual: 700000, stok: 7, kode: 'P018' },
    { nama: 'Action Camera', hargaBeli: 300000, hargaJual: 500000, stok: 10, kode: 'P019' },
    { nama: 'Digital Camera', hargaBeli: 1500000, hargaJual: 2000000, stok: 4, kode: 'P020' }
];