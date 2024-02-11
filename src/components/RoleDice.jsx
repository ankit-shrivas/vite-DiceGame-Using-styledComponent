//import { useState } from 'react';
import styled from 'styled-components';

function RoleDice({ currentDice, RoleCube }) {


  return <>
    <div>
      <Image>
        <div onClick={RoleCube} className='dice'>
          <img src={`images/dice_${currentDice}.png`} alt="cube" />
        </div>
        <p>Click On Dice to Roll</p>
      </Image>

    </div>


  </>
}

export default RoleDice;

const Image = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  .dice{
    cursor: pointer;
  }
  align-items: center;
  img{
    width:250px;
    height:250px;
  }
  p{
    font-size:24px;
  }
`;