import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin:auto;
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center; 
  flex-wrap: wrap;

  

`
export const Content = styled.div`

    height:auto;
    width:20rem;
    margin: 3rem;
    padding:20px;

    display:flex;
    flex-direction:column;
    position: relative;
    align-items:center;
    justify-content:center;

    background-color: #e1e1e6;
    border-radius: 0.5rem;
    box-shadow: 2rem 3rem 5rem #aaa;

    h2{
        font-family:'lato',sans-serif;
        margin:10px;
    }

    img {
    border-radius: 0.5rem;
    object-fit: cover;
    }

    a{
        text-decoration:none;
        font-family:sans-serif;
        width:70%;
        padding:.3rem;
        margin:10px;
        margin-top:20px;
        border-radius:6px;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        
        background-color:#6161ba;
        color:#fff;

        transition: all .2s ease;
        &:hover{
            width:90%;
        }

        
    }
`;


// .recipes {
//   width: 90%;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: flex-start;
// }

// width: 20rem;
// margin: 3rem;
// display: flex;
// flex-direction: column;
// background-color: #d3d3d3;
// padding: 2rem;
// position: relative;
// border-radius: 0.5rem;
// box-shadow: 2rem 3rem 5rem #aaa;
// font-family:'lato', sans-serif;

// h2 {
// background-color: rgba(161, 161, 161, 0.7);
// border-radius: 0.5rem;
// padding: 0.3rem 0.5rem;
// position: absolute;
// top: 2.5rem;
// left: 2.5rem;
// right: 2.5rem;
// font-size: 2.5rem;
// font-weight: 400;
// text-shadow: 0 0.5rem 0.5rem #555;
// color: #fff;
// }

// img {
// border-radius: 0.5rem;
// object-fit: cover;
// }
