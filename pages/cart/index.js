import React from "react";
import Layout from "../../components/Layout";
import Article from "../../components/Article";
import Head from "next/head";
import Link from "next/link";
import { useAppContext } from "../../context/state";
import {
  Container,
  TextH1,
  Img,
  Button,
  ArrowRight,
} from "../../styles/styled/cart-styles";

const Cart = () => {
  const { articles, setArticles } = useAppContext();

  return (
    <Layout>
      <Head>
        <title>
          Easy Shop | Cart{" "}
          {articles.length > 0 ? articles.length + " Items" : ""}{" "}
        </title>
      </Head>

      {articles.length > 0 ? (
        <>
          <Container
            m="5%"
            flexDir="column"
            justify="space-between"
            align="flex-start"
            h="100%"
            p="2%"
          >
            <Container
              w="100%"
              h="100%"
              flexDir="row"
              justify="space-between"
              p="0 2% 0 0"
            >
              <TextH1
                fontS="2rem"
                fontSM="1.5rem"
                fontW="400"
                align="center"
                p="0"
                pM="2% 0 0 0"
              >
                My shopping cart ({articles.length} Items)
              </TextH1>
              <Container>
                <Button
                  p="2% 3%"
                  fontS="1.5rem"
                  fontW="500"
                  flexDir="row"
                  justify="center"
                  align="center"
                  col="var(--brickOrange)"
                  bg="transparent"
                  colH="var(--black)"
                >
                  <Link href="/checkout">Checkout</Link>
                  <ArrowRight />
                </Button>
              </Container>
            </Container>
            {articles.map((article, idx) => (
              <Article key={idx} article={article} />
            ))}
          </Container>
        </>
      ) : (
        <Container
          flexDir="column"
          justify="center"
          align="center"
          h="100vh"
          w="100%"
        >
          <Img src="./images/cartSvg.svg" w="60%" h="60%" wM="80%" hM="60%" />
          <TextH1
            fontS="3rem"
            fontSM="2.2rem"
            fontW="500"
            col="var(--black)"
            p="3% 0 0 0"
          >
            Cart Is Empty.
          </TextH1>
        </Container>
      )}
    </Layout>
  );
};

export default Cart;
