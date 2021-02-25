import styled from "styled-components";

export default function BackSide() {
  return (
    <Back>
      <BlackBar />
      <CCV>
        <CCVText>Autorized Signature-not valid unless signed</CCVText>
        <Container>
          <WhiteBar>
            <CCVNumber className="ccv">123</CCVNumber>
          </WhiteBar>
        </Container>
      </CCV>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
        lacus quis urna tristique fringilla. Etiam ultricies volutpat nunc.
        Curabitur lectus urna, tempus vitae odio vel, sollicitudin ullamcorper
        massa. Aliquam erat volutpat. Nam scelerisque lorem at sem maximus, in
        volutpat risus placerat. Donec quis velit vel orci elementum cursus a
        nec dolor. Sed turpis sapien, cursus a justo et, viverra aliquam tellus.
      </Text>
    </Back>
  );
}

const Back = styled.div`
  /* ::before {
    content: "";
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    opacity: 0.5;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 40px;
    right: 80px;
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    opacity: 0.7;
  } */
  @media screen and (max-width: 550px) {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`
const Container = styled.div`
  @media screen and (max-width: 550px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

const BlackBar = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  height: 80px;
  background: #000;
  @media screen and (max-width: 550px) {
    position: initial;
    top: initial;
    margin-top: 40px;
    width: 100%;
    height: 80px;
    background: #000;
  }
`
const CCV = styled.div`
  position: absolute;
  top: 120px;
  left: 30px;
  margin-top: 20px;
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    top: initial;
    left: initial;
    position: initial;
  }
`
const CCVText = styled.h5`
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  @media screen and (max-width: 550px) {
    text-align: center;
  }
`
const WhiteBar = styled.div`
  position: relative;
  width: 400px;
  height: 40px;
  background: #fff;
  margin-top: 5px;
  @media screen and (max-width: 550px) {
    width: 100%;
    margin: 0 30px;
  }
`
const CCVNumber = styled.div`
  position: relative;
  width: 50px;
  height: 30px;
  background: #ccc;
  margin-top: 5px;
  font-weight: 600;
  letter-spacing: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 395px;
  top: 5px;
  @media screen and (max-width: 550px) {
    position: absolute;
    left: 93%;
    top: 0px;
  }
`
const Text = styled.p`
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
  color: #fff;
  font-size: 10px;
  line-height: 1.4em;
  font-weight: 300;
  @media screen and (max-width: 550px) {
    font-size: 8px;
    bottom: 10px;
  }
  @media screen and (max-width: 360px) {
    bottom: 5px;
    font-size: 7.5px;
  }
`
