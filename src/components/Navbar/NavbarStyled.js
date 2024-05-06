import styled from "styled-components";

export const NavbarContainer = styled.div`
    .navbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        border-bottom: 1px solid #E5E5E5;
    }
    .navbar-logo h1 {
        font-size: 2rem;
        font-weight: 900;
    }
    .navbar-link ul {
        display: flex;
        list-style: none;
        text-transform: uppercase;
        color: #7D7D7D;
        font-size: 0.9rem;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
    a:visited {
        color: #7D7D7D;
    }
    .navbar-link ul:hover {
        color: #000;
    }
    
`;