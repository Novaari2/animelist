import Link from "next/link";

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between p-4">
            <h1 className="text-3xl font-bold text-color-primary">{title}</h1>
            { linkHref && linkTitle ? 
            <Link href={linkHref} className="text-xl underline hover:text-color-accent transition-all text-color-primary">{linkTitle}</Link> 
            : null }
        </div>
    )
}

export default Header;