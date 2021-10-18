import styled from 'styled-components'
import { categories } from "../data"
import { mobile } from '../Responsive';
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    display:flex;
    flex-direction:${props => props.dir};
    padding:20px;
    jusify-content:space-between;
    ${mobile({ flexDirection: "column", padding: "0" })}

`;
const Title = styled.h1`
    padding:10px;
    width:100%;
    height:5vh;
    display:flex;
    justify-content:center;
    align-items:center

`;


const Categories = () => {
    return (
        <Container dir="column">
            <Title>CATEGORIES</Title>
            <Container dir="row">
                {
                    categories.map(item => (
                        <CategoryItem item={item} key={item.id} />
                    ))
                }

            </Container>
        </Container>
    )
}

export default Categories
