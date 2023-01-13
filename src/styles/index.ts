import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #424B54;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    flex-direction: column;
    > input {
        width: 200px;
        height: 30px;
        padding-left: 8px;
        background-color: #FFFFFF;
    }
    > button {
        width: 200px;
        height: 40px;
        background-color: #E2B4BD;
        border-radius: 5px;
        font-size: 20px;
    }
`;
