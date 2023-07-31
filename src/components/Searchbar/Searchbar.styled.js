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
`;

export const ButtonSearchbar = styled.button`
    background-color: inherit;
    border: none;
    height: 30px;
    border-radius: 4px;
    background-color: #ffffff;
    cursor: pointer;

    :hover {
        background-color: grey; 
        color: #ffffff;
    }
`;

export const InputSearchbar = styled.input`
    padding: 8px;
    border: none;
    border-radius: 4px;
    margin-right: 8px;
`;