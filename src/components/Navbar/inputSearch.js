"use client"
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
    const searchRef = useRef(); //menangkap inputan dan passing ke button
    const router = useRouter();

    const handleSearch = (event) => {
        if(event.key === "Enter" || event.type === "click"){
            event.preventDefault();
            const keyword = searchRef.current.value;
            router.push(`/search/${keyword}`);
        }
    }
    return (
        <div className="relative">
            <input placeholder="cari anime..." className="p-2 rounded w-full" ref={searchRef} onKeyDown={handleSearch}/>
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch;