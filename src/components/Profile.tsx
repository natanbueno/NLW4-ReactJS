import { Profiler } from "inspector";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from '../styles/components/Profile.module.css';

export function Profile(){  
    const  { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
        
            <img src="https://github.com/natanbueno.png" alt="natan bueno" />
            <div>
                <strong>Natan Ferreira da Silva Bueno</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>    
            </div>

        </div>
    );
}