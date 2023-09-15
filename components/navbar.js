
import styles from '../styles/nav.module.css'
import { Bebas_Neue } from 'next/font/google';


const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });

export default function Navbar() {
    return (
      <>
        <div className={`${bebasneue.className} ${styles.bg} ${styles.nav}`}>
            <a className={styles.txt} href="/#">Aryanwadkar.live</a>
            <div className={styles.sections}>
                <a className={styles.txt} href="/#about">About</a>
                <a className={styles.txt} href="/#exp">Experience</a>
                <a className={styles.txt} href="/#projects">Projects</a>
            </div>
        </div>
      </>
    )
  }