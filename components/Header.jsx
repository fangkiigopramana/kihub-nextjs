import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

export default function Header(second) {
    return (
        <header className="py-8 xl:py-12 xl:mb-10 text-white xl:fixed xl:top-0 xl:left-0 xl:right-0 xl:z-50">
            <div className="container mx-auto flex justify-between items-center xl:bg-gradient-to-r xl:from-[#070000] xl:via-[#2f80ed] xl:to-[#070000] xl:p-4 xl:rounded-xl">
                {/* logo */}
                <Link href={'/'}>
                    <h1 className="text-normal font-semibold">Kihub <span className="text-accent">.</span></h1>
                </Link>
                {/* logo */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>

                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}