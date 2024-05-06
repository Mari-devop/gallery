import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 40px;
    padding: 20px;
    border-top: 1px solid #999;
    width: 100%;

    @media (max-width: 768px){
        top: -80px;
    }
`;