import React, { useEffect, useRef } from 'react';
import PopContainer  from "./styles"


const Index = ({isOpen, children, setOpenPop }: any ) => {
    const ref = useRef(null);

    const checkStuff = (e: any) => {
        // if(ref.current && ref.current.contains(e.target)) {
        //   console.log("this is in here", isOpen);
        //   setOpenPop(true);
        // }
    };
    useEffect(() => {
        document.addEventListener("click",checkStuff);
        return () => document.removeEventListener("click", checkStuff)
    }, [checkStuff]);
    return (
        <>{
            isOpen ? (
                <PopContainer ref={ref}>
                    <div className="ant-popover-arrow"/>
                    {children}
                </PopContainer>
            ) : ''
        }
        </>
    );
};

export default Index;
