import styled from "styled-components";

export const SlideshowBtn = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    top: -5px;
        button {
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
        button:hover {
            transform: scale(1.1);
        }
        @media (max-width: 768px){
            top: -50px;
            justify-content: space-evenly;
        }
`;