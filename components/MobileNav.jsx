"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"
import { links } from "@/lib/links";
import { useEffect, useState } from "react";

export default function MobileNav() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = links.map((link) => document.querySelector(link.path));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        // console.log(entry.target.id);      
                    }
                });
            },
            { threshold: 0.6 } // Trigger when 60% of the section is visible
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);


    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">

                <div className="mt-28 mb-20 text-center text-2xl">
                    <Link href={'/'}>
                        <h1 className="text-4xl font-semibold">
                            ki<span className="text-accent">dev</span>
                        </h1>
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={`${link.path === `#${activeSection}` ? "text-accent border-b-2 border-accent" : " " } text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
                        )
                    })}
                </nav>

            </SheetContent>
        </Sheet>
    )
}