"use client";
import Image from "next/image";

import "../app/styles/global.css";
import Link from "next/link";
import { navLinks } from "@/app/lib/constants";
import { Drawer } from "antd";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDarwer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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
      <Drawer
        title={
          <div className="logo">
            <Image
              src={"/horror-logo.png"}
              alt="horror-logo"
              width={100}
              height={100}
            />
            HauntFlix
          </div>
        }
        headerStyle={{ backgroundColor: "#111" }}
        bodyStyle={{ backgroundColor: "#111" }}
        placement="top"
        onClose={onClose}
        open={open}
        closeIcon={<CloseOutlined style={{ color: "red", fontSize: "20px" }} />}
      >
        <div className="small-navbar-links">
          <ul>
            {navLinks.map((links, indexes) => (
              <li key={indexes}>
                <Link href={links.href}>{links.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
      <div onClick={showDarwer} className="skeleton-img">
        <Image src={"/skeleton.png"} alt="skeleton" width={50} height={50} />
      </div>
    </div>
  );
};

export default Header;
