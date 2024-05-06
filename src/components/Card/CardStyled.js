import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    border-radius: 10px;
    justify-content: center;
        .card-container {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            max-width: 1200px; /* Limit the maximum width of the card */
            border-radius: 10px;
           
        }
        .card-image {
            display: flex;
            position: relative;
            top: 20px;
            width: 100%;
            overflow: hidden;
            img {
                object-fit: cover; 
                height: 100%;
                max-width: 500px;
                border-radius: 10px;
                transition: 0.3s;
                &:hover {
                    transform: scale(0.7);
                }
            }
            .artist {
                position: relative;
                top: 450px;
                right: -40px;
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
            .card-title{
                position: absolute;
                left: 30%;
                top: 10px;
                max-width: 400px;
                padding: 50px;
                background-color: #f8f8f8;
                border-radius: 10px;
                    h2 {
                        font-size: 3.5rem;
                    }
                    p {
                        font-size: 1rem;
                        padding-top: 10px;
                        color: #777;
                    }
            }
        }
    .card-text {
        display: flex;
        flex-direction: column;
        position: absolute;
        max-width: 400px;
        right: -2%;
        top: 20px;
        overflow: hidden;
        padding: 20px;
        background-color: #f8f8f8;
        span {
            position: relative;
            top: -70px;
            right: 90px;
            font-size: 15rem;
            font-weight: 700;
            color: #F3F3F3;
        }
        p {
            position: relative;
            font-size: 1.2rem;
            top: -200px;
            padding: 20px 0;
            color: #777;
            text-align: justify;
        }
        a {
            position: relative;
            font-size: 1rem;
            color: #777;
            top: -180px;
            text-decoration: none;
            transition: 0.3s;
            &:hover {
                color: #555;
            }
        }
    }

    @media (max-width: 1024px) { 
        .card-container{
            flex-direction: column;
            padding: 20px;
           
        }   
        .card-image {
            order: 1;
            justify-content: center;
            img {
                max-width: 400px;
            }
            .artist {
                top:350px;
            }
        }
        .card-text {
            order: 2; 
            justify-content: center;
            position: relative; 
            top: 70px;
            left: 250px;
        }

    }

    @media (max-width: 768px) {
        .card-container {
            flex-direction: column;
            padding: 30px;
                .artist {
                    display: none;
                }
        }

        .card-image {
            order: 1; 
                img:hover {
                    transform: none;
                }
                .card-title {
                    top: 0;
                    left: 50%;
                   max-width: 300px;
                        h2 {
                            font-size: 2.5rem;
                        }
                        p {
                            font-size: 1rem;
                        }
                }
        }
        .card-text {
            order: 2; 
            position: relative; 
            top: 50px;
            left: 50px;
        }
    }
`;