import { Venue } from '@futbol-pro/types';
import Image from 'next/image'
import styled from 'styled-components'

export const ABox = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width: fit-content;
  text-align: center;
  background:#143055;
  width:100%;
  height:20rem;
  background-image: url("/ball.png");
  background-repeat: repeat;
  background-position: 30px;
  `

export const ImgContainerGeneral = styled.div`
    justify-content: center;
    width: max-content;
    height: max-content;

    display:block;
    margin:auto;
    `

export const TextContainerGeneral = styled.div`
  box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.1);
  border-radius: 3px;
  padding: 10px;
  background:  #ffff;
  line-height: 19px;
  font-size: 14px;
  display:flex;
`

export const TextContainerBody = styled.div`
  padding:2rem;
`

export const TextContainer = styled.h3`
  margin: 20px 0px 10px 0px;
  color: #00294b;
  font-size: 18px;
  text-align: left;
  `

export const StyledContainer = styled.div`
  border: 1px solid black;
  padding: 25px 12px 18px;
  background:  #ffff;
`

export const WrapperHover = styled.div`
  &:hover ${TextContainerGeneral} {
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.1);
  }
`

export function StadiumCard(props: Venue) {
  const { name, image, address, capacity, city } = props
  return (

      <ABox>
        <TextContainerGeneral>
          <ImgContainerGeneral>
            {image &&
              <Image
                alt={'Bandera de ' + name}
                width={300}
                height={200}
                loader={() => image}
                src={image}
              />
            }
          </ImgContainerGeneral>
          <TextContainerBody>
            <TextContainer>{"Estadio: " + name}</TextContainer>
            <TextContainer>{"Ubicación: " + city}</TextContainer>
            <TextContainer>{"Dirección: " + address}</TextContainer>
            <TextContainer>{"Capacidad: " + capacity + " espectadores"}</TextContainer>
          </TextContainerBody>
        </TextContainerGeneral>
      </ABox>
  )
}

export default StadiumCard
