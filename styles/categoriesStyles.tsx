import styled  from 'styled-components';


const CategoriesContainer = styled.div`
  display: flex;
  width: 86%;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 20px;
  
  .category__container {
    display: flex;
    flex-direction: column;
    height: 130px;
    justify-content: space-between;

    
     img {
    width: 181px;
    height: 91px;
    border-radius: 4px;
     }
     span {
        height: 24px;
        width: 180px;
        color: #0065B0;
        font-family: Roboto;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.15px;
        line-height: 24px;
     }
  }
  
`;


export { CategoriesContainer };
