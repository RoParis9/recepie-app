import styled from 'styled-components';

export const Header = styled.div`
    height: 8vh;
    max-width: 980px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    h1 {
        font-size: 2rem;
        color: #c75d12;
        font-family: 'Lato', sans-serif;
    }

    button {
        outline: none;
        border: none;
        font-size: 1.2rem;
        font-family: 'Lato', sans-serif;
        cursor: pointer;
        background-color: transparent;
    }
`;
