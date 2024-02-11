import styled from "styled-components";

function StartGame({ toggle }) {

  return <>
    <Container>

      <div>
        <img src="images/dices.png" alt="image" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>

    </Container>

  </>
}

export default StartGame;

const Container = styled.div`
   max-width  :1180px ;
   margin: 0 auto;
   height: 100vh;
  display: flex;
  column-gap: 10px;
  align-items: center;

  .content h1{
    font-size: 96px;
    white-space: nowrap;
  }
`;


const Button = styled.button`
  width:220px;
  height:44px;
  border-radius:5px;
  padding: 10px 18px;
  font-size: 16px;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: 1s background ease-in;

  &:hover{
    background-color: white;
    color: black;
    border:1px solid black;
    transition: 1s background ease-in;
  }
`;