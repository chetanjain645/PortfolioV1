import styled from '@emotion/styled';

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40vw;
    height: 70vh;
    & > div > h1 {
        font-size: 60px;
        font-weight: 600;
        line-height: 65px;
        margin: 20px 0;
        padding: 0;
        @media (max-width: 670px) {
            font-size: 40px;
            margin: 20px 0 0 0;
        }
    };
    & > div > h4 {
        font-size: 26px;
        font-weight: 600;
        line-height: 34px;
        margin: 0 0 30px 0;
        padding: 0;
        @media (max-width: 670px) {
            font-size: 18px;
            margin: 0 0 30px 0;
        }
    };
    & > div > p {
        font-size: 20px;
        & > a {
            text-decoration: none;
            color: ${props => props.theme.accentColor};
            &:hover {
                color: #ec467f;
                transition: color 0.5s ease;
            };
        }
    }
    @media (max-width: 670px) {
        width: 100vw;
        height: 55vh;
        align-items: center;
        text-align: center;
    }
`;

export default TextContainer;