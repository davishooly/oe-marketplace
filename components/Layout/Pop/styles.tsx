import Styled from "styled-components";

const PopContainer =  Styled.div`
  height: 200px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
  z-index: 999;
  position: absolute;
  top: 8%;
  right: 10%;
  background-color: #FFFFFF;
  border-radius: 4px;
  .ant-popover-arrow {
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    position: absolute;
    display: block;
    width: 12px;
    height: 12px;
    background: #fff;
    border-style: solid;
    border-width: 4.24264069px;
    top: -6px;
    border-top-color: #fff;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: #fff;
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  }
`;

export default PopContainer;
