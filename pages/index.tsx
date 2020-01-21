import React from "react";
import { NextPage } from 'next';

import Header from "../components/Layout/Header";
import ProductComponent from "../components/Product";
import DeliveryComponent from "../components/DeliveryComponent";

const HomePage: NextPage<any> = () => {

    return (
        <>
            <Header/>
            <ProductComponent/>
            <DeliveryComponent/>
            </>
    )
};

export default HomePage;
