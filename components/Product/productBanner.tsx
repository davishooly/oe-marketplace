import React from "react";
import {ProductBannerContainer} from "./styles";
import { Carousel } from 'antd';
import image from '../../static/oe.jpeg';

const images: any = [1,2,3];

const ProductBanner: React.FC<any> = () => {
    return (
        <ProductBannerContainer>
               <div className='carousel__container'>
                   <Carousel>
                       {
                           images.map((i: any, index: number) => (
                               <div key={index.toString()}>
                               <img src={image} alt="image"/>
                               </div>
                           ))
                       }
                   </Carousel>
               </div>
               <div className="static__banner">
                   {
                       images.map((i: any, index: number) => (
                           <img key={index.toString()} src={image} alt="image"/>
                       ))
                   }
               </div>
            </ProductBannerContainer>
    )
};

export default ProductBanner;
