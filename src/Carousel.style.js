import styled from 'styled-components';

export const CarouselContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CarouselSlide = styled.div`
    display: flex;
    width: ${(props) => props.width}px;
    transition: transform 300ms ease-in-out;
    transform: translateX(${(props) => -props.index * props.width}px);
`;

export const CarouselImage = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 50px;
    margin: 1rem;
    box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.4);
`;

export const CarouselButton = styled.button`
    transform: translateY(-50%);
    border: 2px solid #000;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    background-color: transparent;
    margin: 20px;
`;

export const DivButton = styled.div`
    margin-top: 20rem;
`;