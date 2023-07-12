import styled from "styled-components";

export const Container = styled.div`
    background: var(--dark-400);
`;

export const Content = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    
    padding: 1rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    button {
        border: 2;
        border-radius: 50%;
        overflow: hidden;
        width: 3rem;
        height: 3rem;
        background: var(--dark-300);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: filter 0.2s;
        
        &:hover{
            filter: brightness(0.9);
        }

        img {
            width: 4rem;
            height: 3rem;
            margin-top: 0rem;  
            margin-left: -1rem; 
            border-radius: 40%;
        }
    }
`;

export const ImageLogo = styled.img`
    padding: 5px 8px;
    background: var(--dark-300);
    border-radius: 8px;
    margin-left: -2rem;   
    }  
`;

