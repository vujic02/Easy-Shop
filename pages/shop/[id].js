import React, {useEffect} from 'react';
import Head from 'next/head';
import {
    Container,
    ImgContainer,
    TextH1,
    TextP,
    Page,
    Grid,
    ButtonSecondary,
    Cart,
}  from '../../styles/styled/shop-styles'
import Layout from '../../components/Layout';
import { SRLWrapper } from "simple-react-lightbox";
import {useAppContext} from '../../context/state';


const Article = ({item}) => {

    const {articles, setArticles} = useAppContext();

    useEffect(() => {
        document.querySelector('.navbar').style.marginTop = "-90px";
    }, [])

    let arr = ["hello" , "hello", "hello", "hi"]

    console.log(articles);

     
    const addToCart = () => {
        let items = articles.slice();
        let index = item.id;
        for(let i = 0; i < articles.length; i++) {
            if(articles[i].item.id === index) {
                items.splice(i, 1)
            }
        }
        setArticles([...items, {item, count: 1}])
    }


    const options = {
        settings: {
          overlayColor: "rgb(0, 0, 0, 0.93)",
          autoplaySpeed: 1500,
          transitionSpeed: 700,
          disablePanzoom: false,
          slideSpringValues: [300, 50],
          slideAnimationType: "slide"
        },
        buttons: {
          backgroundColor: "var(--brickOrange)",
          iconColor: "#fff",
        },
        caption: {
          captionColor: "#fff",
          captionFontFamily:  "'Open Sans', sans-serif",
          captionFontWeight: "300",
          captionFontSize: "1.5rem",
        }
      };

    return (
        <Layout>
            <Page>

            <Head>
                <title>Easy Shop | {item.name}</title>
            </Head>

            <ImgContainer imgSrc={item.headingImages} w="100%" h="80vh"></ImgContainer>

        <SRLWrapper options={options}>
            <Grid p="10% 5%">
                <Container flexDir="column" justify="space-around" bg="var(--whiteGray)" position="relative">
                    <TextH1 fontS="2.5rem" fontW="700" col="var(--black)" p="20px 0 10px 10px">{item.name}</TextH1>
                    <TextP fontS="1.5rem" fontW="300" col="var(--black)" p="10px 0 10px 10px">{item.description}</TextP>
                    <TextH1 fontS="3rem" fontW="800" col="var(--black)" p="10px 0 10px 10px">{item.price}€</TextH1>
                    <Container>
                        <ButtonSecondary bg="var(--brickOrange)" fontS="1.9rem" fontW="300" p=".7rem 1rem" m="10px 0 10px 10px" col="var(--white)" bor="1px solid transparent" bgHover="var(--white)" colHover="var(--brickOrange)" borHover="1px solid var(--brickOrange)" onClick={addToCart}>
                            <a>Add to cart</a>
                            <Cart />
                        </ButtonSecondary>
                    </Container>
                </Container>

                    {item.images && item.images.map((image, index) => (
                        <img key={index} src={image} className="gallery-img" />
                    ))}

            </Grid>
            </SRLWrapper>

            <Container flexDir="row" justify="center">
                <TextP fontS="1.2rem" fontW="400" col="var(--black)" p="0 0 25px 0" alignText="center">{item.companyDescription}</TextP>
            </Container>

            </Page>
        </Layout>
    )
}
export async function getStaticPaths() {
    const res = await fetch(`https://easy-shop-api.herokuapp.com/articles/`);
    const items = await res.json();

    const paths = items.map(item => ({
        params: { id: item.id.toString() }
    }))

    return { paths, fallback: false}
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://easy-shop-api.herokuapp.com/articles/${params.id}`);
    const items = await res.json();

    return { 
        props: { 
            item: items
        } 
    }
}

export default Article