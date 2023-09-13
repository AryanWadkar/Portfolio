
import styles from './nav.module.css'
import { Bebas_Neue } from 'next/font/google';


const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });

export default function Navbar() {
    return (
      <>
        <div className={`${bebasneue.className} ${styles.bg} ${styles.nav}`}>
            <div className={styles.txt}><a href="/#">Aryanwadkar.live</a></div>
            <div className={styles.sections}>
                <div className={styles.txt}><a href="/#about">About</a></div>
                <div className={styles.txt}><a href="/#exp">Experience</a></div>
                <div className={styles.txt}><a href="/#projects">Projects</a></div>
            </div>
        </div>
      </>
    )
  }