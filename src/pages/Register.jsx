import styled from 'styled-components';
import { mobile } from '../Responsive';

const Container = styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
      background-size:cover;
      display:flex;
      align-items:center;
      justify-content:center;

`;
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`;

const Wrapper = styled.div`
    width:40%;
    padding:20px;
    background-color:white;

    ${mobile({ width: "70%" })}
`;

const Input = styled.input`
        flex:1;
        min-width:40%;
        margin:20px 10px 0 0;
        padding:10px;
`;

const Form = styled.form`
    display:flex;
    flex-wrap:wrap;

`;
const Agreement = styled.span`
    font-size:12px;
    margin:20px 0;
`;
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input type="text" placeholder="name" />
                    <Input type="text" placeholder="last-name" />
                    <Input type="text" placeholder="user-name" />
                    <Input type="email" placeholder="email" />
                    <Input type="password" placeholder="password" />
                    <Input type="text" placeholder="confirm password" />
                    <Agreement>
                        By creating my account, I consent to the processing of my personal data
                        in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register