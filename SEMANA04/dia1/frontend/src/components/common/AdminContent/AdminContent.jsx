import { useContext, useEffect, useState } from "react";
import {
  postProduct,
  getAllProducts,
} from "../../../services/productsServices";
import { BiSearch } from "react-icons/bi";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import "./AdminContent.scss";
import { AdminContext } from "../../../contexts/AdminContext";
import { signOut } from "../../../services/authServices";

export const AdminContent = ({ children }) => {
  const { adminTitle } = useContext(AdminContext);

  return (
    <div className="DashContent">
      <div className="DashContent-container">
        <div className="DashContent-header">
          <div className="DashContent-header-title">
            <h1>{adminTitle}</h1>
          </div>
          <div className="DashContent-header-search b-shadow">
            <BiSearch />
            <input type="text" placeholder="Search your product" />
          </div>
          <div className="DashContent-header-notifications b-shadow">
            <MdOutlineNotificationAdd />
          </div>
          <div className="DashContent-header-user">
            <img className="picture" src="/vite.svg" alt="" />
            <div className="DashContent-header-user-name">
              <h3>Paolo Soncco</h3>
              <span>Vendedor</span>
            </div>
            <IoIosArrowDown style={{ cursor: "pointer" }} onClick={signOut} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
