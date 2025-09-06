"use client";
import Image from "next/image";


import "../app/styles/global.css";
import Link from "next/link";

const Header = () => {
  const navLinks = [
    { label: "Horror Movies", href: "/movies" },
    { label: "Horror Dramas", href: "/dramas" },
    { label: "Horror Pictures", href: "/pictures" },
    { label: "Horror Videos", href: "/videos" },
  ];

  return (
    <div className="header">
      <div className="logo">
        <Image
          src={"/horror-logo.png"}
          alt="horror-logo"
          width={100}
          height={100}
        />
        HauntFlix
      </div>
      <div className="nav-links">
        <ul>
          {navLinks.map((links, indexes) => (
            <li key={indexes}>
              <Link href={links.href}>{links.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="skeleton-img">
        <Image src={"/skeleton.png"} alt="skeleton" width={50} height={50} />
      </div>
    </div>
  );
};

export default Header;
