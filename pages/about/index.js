import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import {
  AboutContainer,
  AboutLanding,
  AboutLandingImg,
  AboutPage,
  AboutText,
  Container,
  Icon,
} from "../../styles/styled/about-styles";

const About = () => {
  useEffect(() => {
    // Fix for scrollbar that appears because of grid section
    document.body.style.overflowX = "hidden";
    document.querySelector(".navbar").style.marginTop = "-90px";
  }, []);

  return (
    <Layout>
      <AboutPage>
        <Head>
          <title>Easy Shop | About</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <AboutLanding>
          <AboutLandingImg src="./images/aboutLanding.jpg"></AboutLandingImg>
          <AboutText
            fontS="3rem"
            fontSMedia="2.5rem"
            fontW="600"
            alignText="center"
            textColor="var(--white)"
            transL="translate(-50%, 50%)"
            L="50%"
            T="20%"
            pos="absolute"
          >
            About us
          </AboutText>
          <AboutText
            fontS="2rem"
            fontSMedia="1.5rem"
            fontXSMedia="1.2rem"
            adjustW={true}
            fontW="200"
            alignText="center"
            textColor="var(--white)"
            transL="translate(-50%, 50%)"
            L="50%"
            T="25%"
            pos="absolute"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            bibendum leo in sapien cursus dictum. Ut sodales blandit massa sed
            ultricies.
          </AboutText>
        </AboutLanding>

        <AboutContainer>
          <Container flexDir="column" justify="center">
            <Container flexDir="row">
              <Icon src="./icons/piggybank1.png" />
              <Container flexDir="column" justify="center">
                <AboutText
                  fontS="2rem"
                  fontSMedia="1.6rem"
                  fontW="400"
                  alignText="center"
                  textColor="var(--black)"
                  mgTop="10px"
                  mgLeft="20px"
                >
                  Guaranteed safety
                </AboutText>
              </Container>
            </Container>
            <Container flexDir="column" justify="center" pR="2rem">
              <AboutText
                fontS="1.8rem"
                fontSMedia="1.4rem"
                fontW="300"
                textColor="var(--lightGray)"
                mgTop="10px"
              >
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </AboutText>
            </Container>
          </Container>

          <Container flexDir="column" justify="center">
            <Container flexDir="row">
              <Icon src="./icons/shopping-cart1.png" />
              <Container flexDir="column" justify="center">
                <AboutText
                  fontS="2rem"
                  fontSMedia="1.6rem"
                  fontW="400"
                  alignText="center"
                  textColor="var(--black)"
                  mgTop="10px"
                  mgLeft="20px"
                >
                  Shop Fast
                </AboutText>
              </Container>
            </Container>
            <Container flexDir="column" justify="center" pR="2rem">
              <AboutText
                fontS="1.8rem"
                fontSMedia="1.4rem"
                fontW="300"
                textColor="var(--lightGray)"
                mgTop="10px"
              >
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </AboutText>
            </Container>
          </Container>

          <Container flexDir="column" justify="center">
            <Container flexDir="row">
              <Icon src="./icons/shop1.png" />
              <Container flexDir="column" justify="center">
                <AboutText
                  fontS="2rem"
                  fontSMedia="1.6rem"
                  fontW="400"
                  alignText="center"
                  textColor="var(--black)"
                  mgTop="10px"
                  mgLeft="20px"
                >
                  High Quality
                </AboutText>
              </Container>
            </Container>
            <Container flexDir="column" justify="center" pR="2rem">
              <AboutText
                fontS="1.8rem"
                fontSMedia="1.4rem"
                fontW="300"
                textColor="var(--lightGray)"
                mgTop="10px"
              >
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </AboutText>
            </Container>
          </Container>

          <Container flexDir="column" justify="center">
            <Container flexDir="row">
              <Icon src="./icons/box.png" />
              <Container flexDir="column" justify="center">
                <AboutText
                  fontS="2rem"
                  fontSMedia="1.6rem"
                  fontW="400"
                  alignText="center"
                  textColor="var(--black)"
                  mgTop="10px"
                  mgLeft="20px"
                >
                  Shipped safe
                </AboutText>
              </Container>
            </Container>
            <Container flexDir="column" justify="center" pR="2rem">
              <AboutText
                fontS="1.8rem"
                fontSMedia="1.4rem"
                fontW="300"
                textColor="var(--lightGray)"
                mgTop="10px"
              >
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </AboutText>
            </Container>
          </Container>

          <Container flexDir="column" justify="center">
            <Container flexDir="row">
              <Icon src="./icons/people.png" />
              <Container flexDir="column" justify="center">
                <AboutText
                  fontS="2rem"
                  fontSMedia="1.6rem"
                  fontW="400"
                  alignText="center"
                  textColor="var(--black)"
                  mgTop="10px"
                  mgLeft="20px"
                >
                  Support team
                </AboutText>
              </Container>
            </Container>
            <Container flexDir="column" justify="center" pR="2rem">
              <AboutText
                fontS="1.8rem"
                fontSMedia="1.4rem"
                fontW="300"
                textColor="var(--lightGray)"
                mgTop="10px"
              >
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </AboutText>
            </Container>
          </Container>

          <Container flexDir="column" justify="center">
            <Container flexDir="row">
              <Icon src="./icons/24-hours.png" />
              <Container flexDir="column" justify="center">
                <AboutText
                  fontS="2rem"
                  fontSMedia="1.6rem"
                  fontW="400"
                  alignText="center"
                  textColor="var(--black)"
                  mgTop="10px"
                  mgLeft="20px"
                >
                  All day, all night.
                </AboutText>
              </Container>
            </Container>
            <Container flexDir="column" justify="center" pR="2rem">
              <AboutText
                fontS="1.8rem"
                fontSMedia="1.4rem"
                fontW="300"
                textColor="var(--lightGray)"
                mgTop="10px"
              >
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </AboutText>
            </Container>
          </Container>
        </AboutContainer>
      </AboutPage>
    </Layout>
  );
};

export default About;
