import React, { FunctionComponent} from "react";
import { NextPage } from 'next'
import { CategoriesContainer } from '../styles/categoriesStyles'

import image from '../static/oe.jpeg';


const categories: any = [1,2,3,4,5];
const Categories: NextPage<FunctionComponent> = () => {
    return(
        <>
        <CategoriesContainer>

           {
               categories.map(() => (
                 <div className="category__container">
                     <img src={image} alt="image"/>
                 <span> Home Living </span>
                 </div>
            ))
           }
        </CategoriesContainer>
            </>
    )
};

export default Categories
