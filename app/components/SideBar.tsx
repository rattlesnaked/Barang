import Link from "next/link";

const Sidebar: React.FC = () => {
    return(
        <div>
            <nav className="flex flex-col text-xm font-bold text-slate-600  p-4">
                <Link href="/" className="py-2 px-4 hover:text-slate-950"> Dashboard</Link>
                <Link href="/newProduct" className="py-2 px-4 hover:text-slate-950"> New Product</Link>
                <Link href="/addProduct" className="py-2 px-4 hover:text-slate-950"> Add Product</Link>
            </nav>
        </div>
    )
}

export default Sidebar;