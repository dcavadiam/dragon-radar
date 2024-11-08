import Image from "next/image"
import Link from "next/link"

export const Header = () => {
    return (
        <header className="flex justify-between items-center w-full py-3 px-6 border-b border-gray-800">
            <Link href="/" className="flex items-center gap-1 w-fit">
                <Image src="/dragon-radar-logo.webp" alt="Dragon Radar Logo" className="h-10 w-auto" width={40} height={40} />
                <p className="text-4xl font-bold font-saiyan text-saiyanYellow text-border">Dragon<span className="text-saiyanRed ml-2">Radar</span></p>
            </Link>

            <nav className="flex items-center space-x-4 w-fit">
                <a href="#">Characters</a>
                <a href="#">Planets</a>
            </nav>
        </header>
    )
}