import { Profiler } from "inspector";
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(

        <div className={styles.profileContainer}>
        
            <img src="https://github.com/natanbueno.png" alt="natan bueno" />
            <div>
                <strong>Natan Ferreira da Silva Bueno</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>    
            </div>

        </div>
    );
}