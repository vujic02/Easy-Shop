import React from 'react';
import {Container, TextP, TextH1, Button, Img, QuantityButton} from '../styles/styled/cart-styles';
import { useAppContext } from '../context/state'

const Article = ({article}) => {

    const {articles, setArticles} = useAppContext();

    console.log(articles, "each article")

    const increment = () => {
        let items = articles;
        let index = article.item.id;
        for(let i = 0; i < articles.length; i++) {
                if(articles[i].item.id === index) {
                    items[i].count = items[i].count + 1;
                }
            }
        setArticles([...items])
        console.log(items)
    }

    const decrement = () => {
        if(article.count <= 1) {
            return
        }
        
        else {

            let items = articles;
            let index = article.item.id;

            for(let i = 0; i < articles.length; i++) {
                if(articles[i].item.id === index) {
                    items[i].count = items[i].count - 1;
                }
            }

            console.log(items)
            setArticles([...items])
        }

    }

    const handleRemove = () => {
        let items = articles;
        let index = article.item.id;
        for(let i = 0; i < articles.length; i++) {
            if(articles[i].item.id === index) {
                items.splice(i, 1)
            }
        }
        setArticles([...items])
    }


    return (
        <Container flexDir="row" flexDirM="column" bor="1px solid var(--lightGray)" p="3% 0 3% 0">
            <Container flexDir="row" flexNum="1">
                <Img src={article.item.headingImages} w="100%" h="100%" objF="cover" objP="center"/>
            </Container>
            <Container flexDir="column" justify="center" p="0 0 0 5%" pM="0" flexNum="1">
                <TextH1 fontS="1.7rem" fontW="700" col="var(--brickOrange)" m="1% 0">{article.item.name}</TextH1>
                <TextP fontS="1.2rem" fontW="400" col="var(--black)" m="1% 0">{article.item.description}</TextP>
                <TextH1 fontS="1.6rem" fontW="700" col="var(--black)" m="1% 0">{article.item.price}€</TextH1>
                <Container>
                <TextP fontS="1.3rem" fontW="500" col="var(--black)" m="1% 1% 0 0">Quantity:</TextP>
                    <Container w="6rem">
                        <Container cur="pointer" p="0 3%" bg="var(--brickOrange)" flexDir="row" justify="center" align="center">
                            <QuantityButton w="100%" onClick={decrement}>-</QuantityButton>
                        </Container>
                        <Container  bg="var(--whiteGray)" w="2rem" p="0 3%" flexDir="row" justify="center" align="center">
                            <TextP w="100%" fontS="1.3rem" fontW="500" col="var(--black)" align="center"> {article.count}</TextP>
                        </Container>
                        <Container cur="pointer" p="0 3%" bg="var(--brickOrange)" flexDir="row" justify="center" align="center">
                            <QuantityButton w="100%" onClick={increment}>+</QuantityButton>
                        </Container>
                    </Container>
                </Container>
                <Container>
                    <Button onClick={handleRemove} m="2% 0" p="2% 5%" flexDir="row" justify="center" align="center" bg="var(--brickOrange)" bor="1px solid transparent" fontS="1.5rem" fontW="200" col="var(--white)" colH="var(--brickOrange)" bgH="transparent" borH="1px solid var(--brickOrange)">
                        Remove from cart
                    </Button>
                </Container>
            </Container>
        </Container>
    )
}

export default Article
