import React from "react";
import Button from "./Button";
import LogoBTN from "../Images/LogoTBNpng.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between text-white p-4">
        <div className="flex items-stretch pl-16 p-4 w-1/6">
          <img
            src={LogoBTN}
            alt="gambar"
            className="w-10/12 h-auto object-cover max-w-[500px] max-h-[500px]"
          />
        </div>
        <div className="flex justify-end items-center p-4">
          <p className="px-4">Tentang Kami</p>
          <p className="px-4">Kerja Kami</p>
          <p className="px-4">Komunitas</p>
          <p className="px-4">Berita dan Cerita</p>
          <Link to="/Register"><Button borderButton="2px solid #CFBD28" backgroundColorButton="transparent" name="Daftar" /></Link>
          <Link to="/Login"><Button borderButton="2px solid #D9CA53" backgroundColorButton="#D9CA53" name="Masuk" /></Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;