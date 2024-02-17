import Link from "next/link";

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between p-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            { linkHref && linkTitle ? 
            <Link href={linkHref} className="text-xl underline hover:text-indigo-500 transition-all">{linkTitle}</Link> 
            : null }
        </div>
    )
}

export default Header;