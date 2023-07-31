import styled from "@emotion/styled";

export const HeaderSearchbar = styled.header`
    padding: 16px;
    background-color: #383fa7;
    display: flex;
    justify-content: center;
`;

export const FormSearchbar = styled.form`
    display: block;
    margin: 0 auto;
    position: relative;
`;

export const ButtonSearchbar = styled.button`
    position: absolute;
    background-color: inherit;
    border: none;
    z-index: 1;
    width: 30px;
    height: 30px;
    top: 3px;
    left: 3px;
    cursor: pointer;
`;

export const InputSearchbar = styled.input`
    padding: 8px 8px 8px 32px;
    border: none;
    border-radius: 4px;
`;