import styled from "styled-components";

export const GalleryComponent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
    margin: 2rem auto;
    grid-auto-rows: 250px;
    grid-auto-flow: dense;

    .item {
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        transition: 0.3s;
    }

    .item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.3s;
    }

    .item-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 1rem;
        box-sizing: border-box;
        color: white;
        transition: 0.3s;
        transform: translateY(100%);
    }

    .item:hover .item-overlay {
        transform: translateY(0);
    }

    .item-overlay h3 {
        margin: 0;
    }

    .item-overlay p {
        margin: 0;
    }
`;
