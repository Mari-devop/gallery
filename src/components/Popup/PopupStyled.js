import styled from "styled-components";

export const PopupContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    max-width: 80vw; 
    height: auto;
        .popup {
            border-radius: 20px;
            padding: 10px;
            position: relative;
            width: 100%;
            height: 100%;
            img {
                border-radius: 20px;
                width: 100%;
                height: 100%;
            }
        }
        .close {
            background-color: #f9f9f9;
            border: 1px solid #666;
            border-radius: 10px;
            color: #000;
            cursor: pointer;
            font-size: 16px;
            padding: 5px 10px;
            position: relative;
            top:0;
            left: 40%;
            &:hover {
                background-color: #777;
                color: #fff;
            }
        }
`;