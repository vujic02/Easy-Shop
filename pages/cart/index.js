import React from 'react'
import Layout from '../../components/Layout';
import Article from '../../components/Article';
import Head from 'next/head';
import { useAppContext } from '../../context/state'
import { Container, TextH1, Img } from '../../styles/styled/cart-styles';

const Cart = () => {

    const {articles, setArticles} = useAppContext();

    console.log(articles, "cart page")


    return (
        <Layout>

        <Head>
            <title>Easy Shop | Cart {articles.length > 0 ? articles.length + " Items" : ""} </title>
        </Head>

        {articles.length > 0 ?  (
            <Container shadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )" bFilter="backdrop-filter: blur( 4px )" borR="10px" m="5%" bg="var(--whiteFaded)" flexDir="column" justify="space-between" align="flex-start" h="100%" p="2%">
                <TextH1 fontS="2rem" fontSM="1.5rem" fontW="400" align="center" p="0" pM="2% 0 0 0">My shopping cart ({articles.length} Items)</TextH1>
                {articles.map((article, idx) => (
                    <Article key={idx} article={article}/>
                ))}
        </Container>
        ) : (
            <Container flexDir="column" justify="center" align="center" h="100vh" w="100%">
                <Img src="./images/cartSvg.svg" w="60%" h="60%" wM="80%" hM="60%" />
                <TextH1 fontS="3rem" fontSM="2.2rem" fontW="500" col="var(--black)" p="3% 0 0 0">Cart Is Empty.</TextH1>
            </Container>
        )}
        </Layout>
    )
}

export default Cart
