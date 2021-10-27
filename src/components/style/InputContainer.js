import styled from 'styled-components';

export const Container = styled.div`
    background-color: #f0eeb1;
    height: 20vh;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        outline: none;
        border: none;
        padding: 1.2rem;
        &:focus {
            outline: none;
        }
    }
    button {
        border: none;
        padding: 1.1rem;
        background-color: orange;
        transition: all 0.2s ease;
        &:hover {
            transform: scale(1.2);
        }
    }
`;
