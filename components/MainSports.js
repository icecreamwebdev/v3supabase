import React from 'react';
import MainSportLi from './MainSportLi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFootballBall, faFutbol, faBasketballBall, faGolfBall, faMitten, faBaseballBall, faStar } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';



const MainSports = () => {

    const footballIcon = <FontAwesomeIcon icon={faFootballBall}  color="#334155" />
    const soccerIcon = <FontAwesomeIcon icon={faFutbol} color="#334155" />
    const basketballIcon = <FontAwesomeIcon icon={faBasketballBall} color="#334155" />
    const golfIcon = <FontAwesomeIcon icon={faGolfBall} color="#334155" />
    const boxingIcon = <FontAwesomeIcon icon={faMitten} color="#334155" />
    const baseballIcon = <FontAwesomeIcon icon={faBaseballBall} color="#334155" />
    const premierLeagueIcon = <Image src='/premier-league.png' alt="me" width="20" height="20" ObjectFit="contain" />
    const eflChampionshipIcon = <Image src='/efl-championship.png' alt="me" width='20' height='20' objectFit='contain'/>
    const nflIcon = <Image src='/nfl.png' alt="nfl" width='20' height='20' objectFit='contain'/> 
    const nbaIcon = <Image src='/nba.png' alt="nfl" width='20' height='20' objectFit='contain'/> 
    const spflIcon = <Image src='/spfl.png' alt="nfl" width='20' height='20' objectFit='contain'/> 
    const uefaChampionsLeague = <Image src='/uefa-champions-league.png' alt="nfl" width='20' height='20' objectFit='contain'/> 
    const faCup = <Image src='/fa-cup.png' alt="nfl" width='20' height='20' objectFit='contain'/> 

    

    return (
        <div className='flex-col flex-nowrap bg-gray-200 shrink-0 p-5 px-7 rounded shadow-md'>
            <h2 className='m-2 font-semibold'>Popular Sports</h2>
            <ul className='m-2 text-gray-600'>
                <MainSportLi icon={soccerIcon} name='Football'/>
                <MainSportLi icon={golfIcon} name='Golf'/>
                <MainSportLi icon={boxingIcon} name='Boxing'/>
                <MainSportLi icon={footballIcon} name='Rugby'/>
                <MainSportLi icon={footballIcon} name='American Football'/>
                <MainSportLi icon={basketballIcon} name='Basketball'/>
                <MainSportLi icon={baseballIcon} name='Baseball'/>
            </ul>
            <h2 className='m-2 font-semibold mt-8'>Popular Comps</h2>
            <ul className='m-2 text-gray-600'>
            <MainSportLi icon={premierLeagueIcon} name='Premier League'/>
            <MainSportLi icon={eflChampionshipIcon} name='EFL Championship'/>
            <MainSportLi icon={nflIcon} name='NFL'/>
            <MainSportLi icon={nbaIcon} name='NBA'/>
            <MainSportLi icon={spflIcon} name='SPFL'/>
            <MainSportLi icon={uefaChampionsLeague} name='UEFA Champions League'/>
            <MainSportLi icon={faCup} name='FA Cup'/>
            </ul>
          </div>
    );
};

export default MainSports;