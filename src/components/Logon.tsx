import styles from '../styles/components/Logon.module.css';


export function Logon() {
    return (
        <div className={styles.logonContainer}>

            <img src="icons/simbolo.svg" alt="move.it"/>
            <section className={styles.form}> 
                
                <img src="icons/logo.svg"/>
                <form>
                    
                    <h1>Bem-vindo</h1>

                    <p>
                        <img src="icons/github.svg" alt=""/>
                        Faça login com seu Github 
                        para começar
                    </p>    

                    <div className={styles.EditButton}>
                        
                        <input placeholder="Digite seu username"></input>
                        <button 
                            className={styles.ButtonLogon} 
                            type="submit"
                        >
                            <img src="/icons/next.svg" alt="Entrar"/>   
                        </button>

                    </div>
                        
                    
                </form>

            </section>

            

        </div>
    )
}

