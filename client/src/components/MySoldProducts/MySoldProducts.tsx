/// IMPORTS
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";
// COMPONENTS
import SoldCards from "../SoldCards/SoldCards";
import CreationPagination from "../CreationPagination/CreationPagination";
// ACTIONS
import { userCompanySalesDetail } from "../../redux/actions/actions"
// STYLES
import styles from "./MySoldProducts.module.css"

// MY SOLD PRODUCTS
const MySoldProducts: React.FC = () => {
    // GLOBAL STATE
    const { accessLogin, companySalesDetail } = useSelector((state: AppState) => state);
    const idCompany = accessLogin.id;
    // LOCAL STATE
    const [currentPage, setCurrentPage] = useState<number>(1);
    // PAGINATION
    const itemsPerPage = 3;
    const indexOfLastNotification = currentPage * itemsPerPage;
    const indexOfFirstNotification = indexOfLastNotification - itemsPerPage;
    let currentNotification = companySalesDetail.slice(indexOfFirstNotification, indexOfLastNotification);
    // PAGINATION FUNCTION
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    // HANDLERS
    const dispatch = useDispatch<any>();
    useEffect(() => {
        dispatch(userCompanySalesDetail(idCompany))
    }, []);
    return (
        <div className={styles.container}>
            <SoldCards/>
            <SoldCards/>
            <SoldCards/>
            <CreationPagination
            itemsPerPage={itemsPerPage}
            totalItems={companySalesDetail.length}
            currentPage={currentPage}
            paginate={paginate}
            />
        </div>
    );
};

export default MySoldProducts