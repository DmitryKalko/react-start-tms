import styled from 'styled-components';
const FooterWrapper = styled.footer`
	width: 100%;
    height: 50px;
	background: black;
    color: white;
    color: ${props => props.color || "white"};
    display: flex;
    justify-content: center;
    align-items: center;
`
const Footer = (props) => {
    console.log(props.color);
    return(
        <FooterWrapper {...props}>
            это наш подвальчик
        </FooterWrapper> 
    )
}
export default Footer;