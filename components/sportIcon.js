import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFootballBall, faFutbol, faBasketballBall, faGolfBall, faMitten, faBaseballBall } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';

const footballIcon = <FontAwesomeIcon icon={faFootballBall}  size='lg' color="#334155" />
    const soccerIcon = <FontAwesomeIcon icon={faFutbol} size='lg' color="#334155" />
    const basketballIcon = <FontAwesomeIcon icon={faBasketballBall} color="#334155" />
    const golfIcon = <FontAwesomeIcon icon={faGolfBall} color="#334155" />
    const boxingIcon = <FontAwesomeIcon icon={faMitten} color="#334155" />
    const baseballIcon = <FontAwesomeIcon icon={faBaseballBall} color="#334155" />

export default function sportIcon(sport) {

    switch(sport) {
        case 'football':
          return soccerIcon
        case 'afootball':
          return footballIcon
        case 'golf':
        return golfIcon
        case 'boxing':
        return boxingIcon
        case 'basketball':
        return basketballIcon
        default:
          return baseballIcon
      }

}
