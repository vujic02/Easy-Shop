import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
    HomePage,
    Header,
    Paragraph,
    Button,
    Container,
    Grid,
    LandingImg,
    DownArrow,
} from '../styles/styled/home-styles'
import {useAppContext} from '../context/state'

export default function Home() {

  const {articles, setArticles} = useAppContext()

  console.log(articles)

  return (
    <Layout>
      <HomePage>

      <Head>
        <title>Easy Shop | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid style={{overflowX: "hidden"}}>
        <Container pM="5% 0 0 0" flexDir="column">
          <div>
            <Header p="2px 0">Easy & Fast</Header>
            <Paragraph p="10px 0" col="var(--lightGray)">Have a look at what<br/>we offer!</Paragraph>
            <Button p="5px 10px" m="5px 0"><Link href="/shop">Shop Now</Link></Button>
          </div>
        </Container>

        <Container p="5% 0 0 0" pM="0 15% 0 15%" flexDir="column">
          <LandingImg src="./images/landingSvg.svg" />
        </Container>
      </Grid>

        <Container flexDir="column" flexAlign="center" pos="absolute" bot="0" L="50%" transL="translate(-50%, -50%)">
          <Paragraph col="var(--white)"><Link href="/shop">Shop Now</Link></Paragraph>
          <Link href="/shop"><DownArrow src="./images/downArrow.svg" /></Link>
        </Container>

      </HomePage>
    </Layout>
  )
}
