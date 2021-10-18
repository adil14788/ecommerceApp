import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Pinterest, Twitter } from '@material-ui/icons';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../Responsive';
const Container = styled.div`
    display:flex;
    ${mobile({ flexDirection: "column" })}
`;

const Logo = styled.h1`

`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;

const Desc = styled.p`
    margin:20px 0px;
`;

const SocialContainer = styled.div`
    display:flex;
`;

const SocialIcon = styled.span`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props => props.color};
    display:flex;
    justify-content:center;
    align-items:center;
    margin:20px;

    &:hover{
        transform:scale(1.2);
    }
`;

const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom:30px;

`;

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`;

const Right = styled.div`
    flex:1;
    padding:20px;
`;

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;

const Payment = styled.img`
    width:50%;
`;
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>AdilECOM.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus saepe quasi reiciendis quaerat perferendis adipisci
                    veritatis velit, quibusdam nobis!
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Important Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <RoomIcon style={{ marginRight: "10px" }} /> Cecilia Chapman
                    711-2880 Nulla St.
                    Mankato Mississippi 96522</ContactItem>
                <ContactItem><LocalPhoneIcon style={{ marginRight: "10px" }} /> +91 8101246383</ContactItem>
                <ContactItem><EmailIcon style={{ marginRight: "10px" }} /> contact@adil.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>

        </Container>

    )
}

export default Footer
