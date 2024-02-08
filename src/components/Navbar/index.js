import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
                <Link href="/" className="font-bold text-white text-2xl">CuyAnimeList</Link>
                <input placeholder="cari anime..." className=""/>
            </div>
        </header>
    )
}

export default Navbar