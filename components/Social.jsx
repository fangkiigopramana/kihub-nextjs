import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: '#'},
    {icon: <FaLinkedinIn />, path: '#'},
    {icon: <FaYoutube />, path: '#'},
    {icon: <FaTwitter />, path: '#'},
]

export default function Social({ContainerStyle, IconStyle}) {
    return (
        <div className={ContainerStyle}>
            {socials.map((item,index) => {
                return (
                    <Link key={index} href={item.path} className={IconStyle}>{item.icon}</Link>
                )
            })}
            
        </div>
    )
}