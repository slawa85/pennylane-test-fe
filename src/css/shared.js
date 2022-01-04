import styled from 'styled-components';
import BackgroundImage from '../images/veggie_pattern.svg';

const Header = styled.header `
    z-index: 1;
    padding: 24px;
    min-height: 150px;
    background-color: #d8456b;
    background-image: url(${BackgroundImage});
`;

const Title = styled.div `
    position: relative;
    z-index: 1;
    display: -ms-grid;
    display: grid;
    height: 34px;
    text-align: center;
`;

const Section = styled.section `
    position: relative;
    z-index: 2;
    margin-top: -16px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`;

export {
    Header,
    Title,
    Section
};
