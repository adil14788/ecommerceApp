import styled from 'styled-components'
import { Send } from "@material-ui/icons"
import { mobile } from '../Responsive';

const Container = styled.div`
    width:100%;
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
    ${mobile({ fontSize: "35px" })}
`;
const Description = styled.div`
    font-size:24px;
    font-weight:700;
    margin-bottom:20px;
    ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;

    ${mobile({ width: "80%" })}

    
`;
const Input = styled.input`
    outline:none;
    border:none;
    flex:8;
    padding-left:20px;

    ${mobile({ paddingLeft: "5px" })}

`;

const Button = styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>NEWSLETTER</Title>
            <Description>Get timely updates of our latest collections</Description>
            <InputContainer>
                <Input type="email" placeholder="Your email so we never part away!" />
                <Button><Send /></Button>

            </InputContainer>

        </Container>
    )
}

export default Newsletter
