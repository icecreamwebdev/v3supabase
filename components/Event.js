import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFootballBall, faFutbol, faBasketballBall, faGolfBall, faMitten, faBaseballBall } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import Live from './Live';


const Event = ({event}) => {

    const footballIcon = <FontAwesomeIcon icon={faFootballBall}  size='lg' color="#334155" />
    const soccerIcon = <FontAwesomeIcon icon={faFutbol} size='lg' color="#334155" />
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
    const manchesterUnitedIcon = <Image src='/manchester-united.png' alt="nfl" width='20' height='20' objectFit='contain'/> 
    const rangersFCIcon = <Image src='/rangers-fc.png' alt="nfl" width='20' height='20' objectFit='contain'/> 
    const btSport1 = <Image src='https://d3asjubmbjds9v.cloudfront.net/ch/bt-sport-2.png' alt="bt" layout='fill' objectFit='contain' /> 
    const premierSports1 = <Image src='/premier-sports-1.png' alt="premier"  layout='fill' objectFit='contain' /> 



    return (
        <div>
        <div className='flex w-full z-1 flex-row items-center  py-5 border-b '>
            <div className='basis-16  px-1 flex shrink-0 justify-center  '>{footballIcon}</div>
            <div className='basis-32  px-1 flex  shrink-0 justify-center  items-center'><Live /></div>
            <div className='basis-72  flex-grow px1 flex  items-center justify-center  pl-3 '><div className='flex justify-center items-start flex-col flex-wrap'><div className='flex'><span className='mr-2 align-middle items-center pb-3 flex'>{manchesterUnitedIcon}</span> Manchester United </div> <div className='flex'><span className='mr-2 align-middle items-center flex'>{rangersFCIcon}</span>Rangers F.C

</div></div></div>
            <div className='basis-72  px-1 flex  justify-center  '><span className='mr-2 align-middle items-center flex'>{premierLeagueIcon}</span>Premier League</div>
            <div className='basis-80 shrink-0 px-1 flex justify-center items-center '><ul className='flex flex-wrap justify-center'><li className='m-1 relative w-32 h-[18px]'>{btSport1}</li> <li className='m-1 relative w-32 h-[18px]'>{premierSports1}</li></ul></div>
        </div>


</div>

        
    );
};

export default Event;