import { UiProps } from '@futbol-pro/types'
import styled from 'styled-components';

/* eslint-disable-next-line */


const StyledUi = styled.div`
  color: pink;
`;

export function Ui(props: UiProps) {
  const { playerName } = props
  return (
    <StyledUi>
      <h1>{playerName}</h1>
    </StyledUi>
  );
}

export default Ui;
