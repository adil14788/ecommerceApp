import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    font-size:14px;
    background-color:teal;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;


`;

const Announcement = () => {
    return (
        <Container>
            Free shopping on order over $50
        </Container>
    )
}

export default Announcement
