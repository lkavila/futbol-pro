import { UiProps } from '@futbol-pro/types'
import styled from 'styled-components';

/* eslint-disable-next-line */


const StyledUi = styled.div`
  color: #143055;
`;

export function Ui(props: UiProps) {
  const { playerName , playerAge} = props
  return (
    <StyledUi>
      <h1>{playerName} {playerAge}</h1>
    </StyledUi>
  );
}

export default Ui;
