import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);

  }

  function RoleCube() {
    if (!selectedNumber) {
      setError("You are not Select any Number");
      return;
    }
    setError("");

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);




    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    }
    else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  }


  return <>
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>

      <RoleDice currentDice={currentDice} RoleCube={RoleCube} />
    </MainContainer>

  </>
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section{
    display:flex;
    justify-content: space-around;
    align-items: end;
  }
`;