import React, {useEffect, useState} from 'react';
import Link from 'next/link'

import { Input, Select, Icon } from 'antd';
import {Button, StyledHeader, PopContainer, SignUpSpan} from "./styles";
import PopConfirm from '../Pop'

import Logo from '../../../static/omaar-logo.svg';


const { Option } = Select;
const { Search } = Input;


const selectBefore = (
    <Select defaultValue="All" style={{ width: 90 }}>
        <Option value="All">All</Option>
        <Option value="Fashion"> Fashion </Option>
    </Select>
);

export const useCustomModalChange = () => {
    const [isOpen, setOpenPop ] = useState(false);
    const [modalState, openModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(true);

    const handleModalChange = (e: any) => {
        const { name, id } = e.target;
        openModal(!modalState);
        if(name === 'sign in' ){
            setOpenPop(!isOpen);
            setSignUpModal(false);

        }
        else if(id === "sign up"){
            setOpenPop(false);
            openModal(true);
            setSignUpModal(!signUpModal);
        }
    };

    return {
        isOpen,
        setOpenPop,
        modalState,
        openModal,
        signUpModal,
        setSignUpModal,
        handleModalChange
    }

};


const useCustomUserCheck = () => {

    const [ username , setIsLoggedIn] = useState('');
    useEffect(()=>{
        // const user =   JSON.parse<any>(localStorage.getItem('user'));
        // if(user && user.user) {
        //   setIsLoggedIn(user.user.name)
        // }
    });

    return {
        username,
        setIsLoggedIn
    }

};


const Header = () => {
    const { isOpen, setOpenPop, openModal, modalState, signUpModal, handleModalChange } = useCustomModalChange();
    const { username, setIsLoggedIn } = useCustomUserCheck();

    const openPopConfirm  = () => {
        setOpenPop(!isOpen);
    };
    return (
        <StyledHeader>
            <div className="header">
                <img src={Logo} alt='logo' style={{filter: "invert(0)", paddingBottom: 20}}/>

                <ul>
                    <li>
                        <div style={{ marginBottom: 16, marginRight: 30 }}>
                            <Search
                                addonBefore={selectBefore}
                                enterButton={<Icon type="search" />}
                                size="large" defaultValue=""
                                style={{ width: 500, height: 40 }}
                                placeholder="Search"
                            />
                        </div>
                    </li>
                    <div className="pop__container">
                        <li className='account' onClick={openPopConfirm}> <Icon type="user" />{ username ?  username : "Account"} </li>
                        {username ? '' :
                            (
                                <PopConfirm isOpen={isOpen} setOpenPop={setOpenPop}>
                                    <PopContainer>
                                        <span> Returning customer? </span>
                                        <Button name="sign in" onClick={handleModalChange}> Sign in</Button>
                                        <span> Don't have an account? </span>
                                        <SignUpSpan id="sign up" onClick={handleModalChange}> Sign up </SignUpSpan>
                                    </PopContainer>
                                </PopConfirm>
                            )
                        }
                    </div>
                    <li> <Icon type="shopping-cart" /> Cart </li>
                </ul>
            </div>

            <div className="footer">
                <ul>
                    <li> All Categories </li>
                    <li> Top Seller </li>
                    <li> Today's Deals </li>
                    <li> OE Fashion </li>
                    <li> OE Market </li>
                    <li> Customer Service </li>
                    <li> Global Shopping  </li>
                </ul>

                <ul>
                    { username ? <li> <Link href="/new"> Start Selling  </Link> </li> : ""}
                    <li> Blog </li>
                </ul>
            </div>
            {/*<Modal isOpen={modalState}>*/}
            {/*   <ModalContent modalIcon onClick={handleModalChange} modalChange={openModal} setIsLoggedIn={setIsLoggedIn} signUpModal={signUpModal}/>*/}
            {/*</Modal>*/}
        </StyledHeader>
    )
};

export const DashboardHeader = () => {
    const { username } = useCustomUserCheck();

    return (
        <StyledHeader>
            <div className="header">
                <img src={Logo} alt='logo' style={{filter: "invert(0)", paddingBottom: 20}}/>
                <ul>
                    <li>
                        <div style={{ marginBottom: 16, marginRight: 30 }}>
                        </div>
                    </li>
                    <li> <Icon type="user" /> { username } </li>
                </ul>
            </div>

            <div className="footer">
                <ul>
                    <li> <Link href="/dashboard"> Dashboard </Link> </li>
                    <li> <Link href="/dashboard/inventory"> Inventory </Link> </li>
                    <li> <Link href="/dashboard/orders" > Orders </Link> </li>
                    <li> Advertising </li>
                    <li> Reports </li>
                    <li> <Link href="/dashboard/payout" > Payouts </Link> </li>
                    <li> <Link href="/dashboard/settings"> Settings </Link>   </li>
                </ul>

                <ul>
                    <li> <Link href="/new"> Help & FAQs  </Link> </li>
                    <li> View Shop </li>
                </ul>
            </div>
        </StyledHeader>

    )
};


export default Header
