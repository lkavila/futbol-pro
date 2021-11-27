import { Player } from '@futbol-pro/types';
import Image from 'next/image'


export function PlayerCard(props: Player) {
  const { name, photo, position, age } = props
  return (

    <div  id='PlayerCard' className="fut-player-card">
      <div className="player-card-top">
        <div className="player-master-info">
          <div className="player-rating">
            <span>97</span>
          </div>
          <div className="player-position">
            <span>{position[0]}</span>
          </div>
          <div className="player-nation">
            <img src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg" alt="Argentina" draggable="false" />
          </div>
          <div className="player-club">
            <img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" draggable="false" />
          </div>
        </div>
        <div className="player-picture">
          <img src={photo} alt={name} draggable="false" />
          <div className="player-extra">
            <span>Edad: {age}</span>
          </div>
        </div>
      </div>
      <div className="player-card-bottom">
        <div className="player-info">

          <div className="player-name">
            <span>{name}</span>
          </div>

          <div className="player-features">
            <div className="player-features-col">
              <span>
                <div className="player-feature-value">97</div>
                <div className="player-feature-title">PAC</div>
              </span>
              <span>
                <div className="player-feature-value">95</div>
                <div className="player-feature-title">SHO</div>
              </span>
              <span>
                <div className="player-feature-value">94</div>
                <div className="player-feature-title">PAS</div>
              </span>
            </div>
            <div className="player-features-col">
              <span>
                <div className="player-feature-value">99</div>
                <div className="player-feature-title">DRI</div>
              </span>
              <span>
                <div className="player-feature-value">35</div>
                <div className="player-feature-title">DEF</div>
              </span>
              <span>
                <div className="player-feature-value">68</div>
                <div className="player-feature-title">PHY</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PlayerCard
