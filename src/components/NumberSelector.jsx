
import styled from 'styled-components';

function NumberSelector({ selectedNumber, setSelectedNumber, error }) {

  const arrNumber = [1, 2, 3, 4, 5, 6];



  return <>
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className="flex">
        {
          arrNumber.map((value, i) => (<Box isSelected={value === selectedNumber} onClick={() => setSelectedNumber(value)} key={i}>{value}</Box>))
        }
      </div >
      <p>Select Number</p>
    </NumberSelectorContainer>
  </>
}
export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: end;
.error{
  color: red;
}
.flex{
  display: flex;
  gap:24px;
}
p{
  font-size: 24px;
  font-weight:700;
  align-items: end;
}

`;

const Box = styled.div`
    width:72px;
    height:72px;
    border:1px solid black;
    display:grid;
    place-items: center;
    font-size:24px;
    font-weight: 700;
    line-height:36px;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
    `;