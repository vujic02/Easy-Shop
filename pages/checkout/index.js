import React,{useState} from 'react';
import Layout from '../../components/Layout';
import {useAppContext} from '../../context/state';
import { TextH1, Container, Img, Card, FaceFront, FaceBack, TextP, Button} from '../../styles/styled/cart-styles';
import Front from '../../components/Front'
import Back from '../../components/Back'

const Checkout = () => {

    const {articles, setArticles} = useAppContext();
    const [rotateCard, setRotateCard] = useState(true);

    const handleOnClick = () => {
      setRotateCard(prev => !prev);
    };

    console.log(articles.length, articles)

    return (
        <Layout>
            <Container flexDir="row" flexDirM="column">

                <Container flexNum="1" borR="10px" m="0 2% 2% 2%" flexDir="column" justify="space-around" align="flex-start" h="100%" p="2%">
                    <TextH1 fontS="1.6rem" fontW="700" col="var(--darkGray)" m="1% 0 0 0">Shopping cart</TextH1>
                    <TextH1 fontS="1rem" fontW="300" col="var(--darkGray)" m="2% 0 5% 0">Store / Shopping cart</TextH1>
                    <Container flexDir="column">
                        <Container flexDir="column" justify="space-between" bor="1px solid var(--whiteGray)">
                            {articles.length > 0 ? (
                            <>
                                {articles.map(article => (
                                    <Container flexDir="row" justify="space-between">
                                        <Container justify="center" align="center">
                                            <Img bor="1px solid var(--rustOrange)" src={article.item.headingImages} w="7rem" h="80%" objF="cover" objP="center" />
                                            <Container flexDir="column" flexNum="1" justify="center" p="0 0 0 5%">
                                                <TextH1 fontS="1.5rem" fontXS="1rem" fontW="500" col="var(--black)" m="5% 0">{article.item.name}</TextH1>
                                                <TextH1 fontS="1.5rem" fontXS="1rem" fontW="400" col="var(--brickOrange)" m="5% 0">Qty: {article.count}</TextH1>
                                            </Container>
                                         </Container>
                                        <Container flexDir="column" justify="center">
                                            <TextH1 fontS="1.5rem" fontXS="1rem" fontW="700" col="var(--black)" m="1% 0">{article.item.price}€</TextH1>
                                        </Container>
                                    </Container>
                                ))}
                            </>
                            ) : (<TextH1 fontS="2rem" fontXS="1.5rem" fontW="700" col="var(--black)">Shopping cart is empty.</TextH1>)}
                            </Container>
                            <Container flexDir="column" justify="space-around">
                                <Container flexDir="row" justify="space-between" align="center" m="3% 0 1% 0">
                                    <TextP fontS=".9rem" fontW="400" col="var(--darkGray)">Subtotal</TextP>
                                    <TextP fontS=".9rem" fontW="700" col="var(--darkGray)">120€</TextP>
                                </Container>
                                <Container flexDir="row" justify="space-between" align="center" m="1% 0 1% 0">
                                    <TextP fontS=".9rem" fontW="400" col="var(--darkGray)" m="1% 0">Discount for orders over 100€ (10% off)</TextP>
                                    <TextP fontS=".9rem" fontW="700" col="var(--darkGray)">-12€</TextP>
                                </Container>
                                <Container flexDir="row" justify="space-between" align="center" m="1% 0 1% 0">
                                    <TextP fontS=".9rem" fontW="400" col="var(--darkGray)" m="1% 0">Shipping</TextP>
                                    <TextP fontS=".9rem" fontW="700" col="var(--darkGray)">FREE</TextP>
                                </Container>
                                <Container flexDir="row" justify="space-between" align="center" m="1% 0 1% 0">
                                    <TextP fontS="1.2rem" fontW="900" col="var(--darkGray)">TOTAL</TextP>
                                    <TextP fontS="1.3rem" fontW="800" col="var(--darkGray)">108€</TextP>
                                </Container>
                            </Container>
                    </Container>

                </Container>
                <Container flexNum="2" m="0 2% 2% 2%" flexDir="column" justify="space-around" align="flex-start" h="100%" p="2%">
                    <Container flexDir="column" align-items="flex-start">
                        <TextH1 fontS="1.6rem" fontW="700" col="var(--darkGray)" m="1% 0 0 0">Checkout</TextH1>
                        <TextH1 fontS="1rem" fontW="400" col="var(--darkGray)" m="2% 0 0 0">Enter your email adress. This will be used to send you order status updates.</TextH1>
                    </Container>
                    <Container flexDir="column">
                        <input></input>
                        <Button></Button>
                        <TextH1 fontS="1rem" fontW="400" col="var(--darkGray)" m="2% 0 0 0">Tip: Click on the card to flip.</TextH1>
                    </Container>
                    <Container bg="linear-gradient(to right,var(--rustOrange), var(--lightBurgundy))" flexDir="column" align="center" h="100%" borR="15px" m="5% 0 0 0">
                        <Card>
                            <FaceFront rotateCard={rotateCard} onClick={handleOnClick}>
                                <Front />
                            </FaceFront>
                            <FaceBack rotateCard={rotateCard} onClick={handleOnClick}>
                                <Back />
                            </FaceBack>
                        </Card>
                    </Container>
                </Container>
            </Container>
        </Layout>
    )
}

export default Checkout
