import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider  } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';

import { type } from 'os';
import { Logon } from '../components/Logon';

type HomeProps = {
  level: number,
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
   

  return (
    <Logon/>
   

    
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies; 

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)  
    }
  }
}
