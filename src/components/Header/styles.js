import styled from "styled-components";

export const Content = styled.div`
background: #27272A;
max-width: 1440px;
margin: 0 auto;
margin-left: 2rem;
padding: 0 3rem;
align-items: end;
justify-content: space-between;
margin-top: 2rem;  
display: flex;

    button {
        background: #27272A;
        width: 2rem;
        height:3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: filter 0.2s;
        margin-top: 2rem;
        
      img{
        width: 4rem;
        height: 3rem;
        margin-top: -1rem;  
        margin-left: -2rem; 
        border-radius: 40%;
                 
        &:hover{
            filter: brightness(0.9);
        }           
    }

`;


