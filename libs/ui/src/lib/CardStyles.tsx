import styled from 'styled-components'

export const ABox = styled.div`
  justify-content: center;
  width: fit-content;
  text-align: center;
  cursor: pointer;
  `

export const ImgContainerGeneral = styled.div`
    justify-content: center;
    display: flex;
    width: 200px;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 0px 0px 20px 20px;
    `

export const InnerSkew = styled.div`
    display: inline-block;
    width: 140px;
    border-radius: 18px;
    overflow: hidden;
    font-size: 0px;
    background: #f9feff75;
`

export const TextContainerGeneral = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  padding: 80px 30px 30px 30px;
  border-radius: 20px;
  background:  linear-gradient(45deg, #fff2f2, #afefff);
  margin: -100px 0px 0px 0px;
  line-height: 19px;
  font-size: 14px;
`

export const TextContainer = styled.h3`
  margin: 20px 0px 10px 0px;
  color: #048eff;
  font-size: 18px;
  `

export const StyledContainer = styled.div`
  cursor: pointer;
  border: 1px solid black;
  padding: 25px 12px 18px;
  background:  linear-gradient(45deg, #e66465, #9198e5);
`

export const WrapperHover = styled.div`
  &:hover ${ABox} {
    transform: skew(0deg, 5deg);
  }

  &:hover ${TextContainerGeneral} {
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.3);
  }
`
