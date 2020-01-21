import React from "react";
import {NextPage} from 'next';

import Header from "../components/Layout/Header";
import ProductComponent from "../components/Product";
import DeliveryComponent from "../components/DeliveryComponent";
import AdvertComponent from "../components/AdvertPage";

import { HomePageContainer } from '../styles/homePage'

const HomePage: NextPage<any> = () => {

    return (
        <>
            <Header/>
            <HomePageContainer>
                <ProductComponent/>
                <DeliveryComponent/>
                <AdvertComponent/>
            </HomePageContainer>
        </>
    )
};

export default HomePage;
