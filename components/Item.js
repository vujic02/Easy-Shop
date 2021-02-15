import Link from 'next/link'
import React from 'react'
import { TextP, Container, CardImg } from '../styles/styled/shop-styles'

const Item = ({imgSrc, itemName, itemPrice, id}) => {

    return (
    <Link href={`/shop/${id}`}>
        <Container flexDir="column" flexAlign="center" p="10% 0 0 0" style={{cursor: "pointer"}}>
            <CardImg src={imgSrc} alt="Image is not available, click on the article for more info" w="100%" h="350px" />
            <TextP fontS="2rem" fontW="300" alignText="center" p="2% 0 0 0">{itemName}</TextP>
            <TextP fontS="1.5rem" fontW="600" alignText="center" p="1% 0 0 0">{itemPrice} €</TextP>
        </Container>
    </Link>
    )
}

export default Item
