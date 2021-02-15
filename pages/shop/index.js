import React, {useEffect} from 'react';
import { Button, Container, Grid, ImgContainer, RecentlyAdded, Page, TextH1, TextP } from '../../styles/styled/shop-styles';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Item from './Item';


const Shop = ({items}) => {

    console.log(items[0].id)

    useEffect(() => {
        document.body.style.overflowX = "hidden";
        document.querySelector('.navbar').style.marginTop = "-90px";
    }, [])

    return (
        <Layout>
            <Head>
                <title>Easy Shop | Shop</title>
            </Head>

            <Page>
                <ImgContainer w="100%" h="720px" imgSrc="https://i.ibb.co/0jxg9mN/shop-Landing.jpg">
                    <div className="overlay">
                    <Container flexDir="column" justify="center" h="100%" w="100%">
                        <Container flexDir="row" justify="flex-start" p="0 0 0 15%" pM="0 0 0 1%" >
                            <Container flexDir="column" justify="space-around">
                                <TextH1 fontS="3.2rem" fontW="700" p=".5rem 0" col="var(--white)">Exclusive suits for men.</TextH1>
                                <TextP fontS="2rem" fontW="200" p=".5rem 0" col="var(--white)">The clothes don't suit a <br/>man, the man suits <br/> the clothes. </TextP>
                                <Grid>
                                    <Button bg="var(--brickOrange)" fontS="1.9rem" fontW="300" p=".7rem .5rem" m="0 1rem 0 0" col="var(--white)" bgHover="var(--white)" colHover="var(--brickOrange)" mM="0 10% 1% 0" mM2="0 1% 1% 0"><Link href="/shop">Purchase Suits</Link></Button>
                                    <Button bg="var(--white)" fontS="1.9rem" fontW="300" p=".7rem .5rem" col="var(--brickOrange)" bgHover="var(--brickOrange)" colHover="var(--white)" mM="0 10% 1% 0" mM2="0 1% 1% 0"><Link href="/shop">Browse Products</Link></Button>
                                </Grid>
                            </Container>
                        </Container>
                    </Container>
                    </div>
                </ImgContainer>

                <Container flexDir="row" justify="center" p="10% 0 0 0" pM="15% 0 0 0">
                    <TextH1 fontS="2.3rem" fontW="300" col="var(--black)">Categories</TextH1>
                </Container>
                <Container flexDir="row" justify="space-around" p="10% 0 5% 0" flexDirM="column">
                    <ImgContainer w="100%" h="340px" imgSrc="https://i.ibb.co/PrzDSfc/vehicles.jpg" m="0 1rem" mM=".5rem 0">
                        <div className="overlay">
                            <TextP fontS="2rem" fontW="300" p=".5rem 0" col="var(--white)">Vehicles</TextP>
                        </div>
                    </ImgContainer>
                    <ImgContainer w="100%" h="340px" imgSrc="https://i.ibb.co/JmQW058/electronics.jpg" m="0 1rem" mM=".5rem 0">
                        <div className="overlay">
                            <TextP fontS="2rem" fontW="300" p=".5rem 0" col="var(--white)">Electronics</TextP>
                        </div>
                    </ImgContainer>
                    <ImgContainer w="100%" h="340px" imgSrc="https://i.ibb.co/BnW6MV5/clothes.jpg" m="0 1rem" mM=".5rem 0">
                        <div className="overlay">
                            <TextP fontS="2rem" fontW="300" p=".5rem 0" col="var(--white)">Clothes</TextP>                            
                        </div>
                    </ImgContainer>
                </Container>

                <RecentlyAdded>
                <Container flexDir="row" justify="center" p="5% 0 0 0" pM="10% 0 0 0">
                    <TextH1 fontS="2.3rem" fontW="300" col="var(--black)" fontSM="2rem">Recently Added</TextH1>
                </Container>
                <Grid p="10%">
                {items.map((item, id) => (
                    <Item key={id} itemName={item.name} imgSrc={item.headingImages} itemPrice={item.price} id={item.id}></Item>
                ))}
                </Grid>
                </RecentlyAdded>

            </Page>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`https://easy-shop-api.herokuapp.com/articles`);
    const items = await res.json();

    return { 
        props: { 
            items
        } 
    }
}


export default Shop