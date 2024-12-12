"use client";

import { links } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = links.map((link) => document.querySelector(link.path));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id); // Update active section
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
        <nav className="flex gap-8">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`${link.path === `#${activeSection}` ? "text-accent border-b-2 border-accent" : ""
                        } capitalize font-medium hover:text-accent transition-all`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}