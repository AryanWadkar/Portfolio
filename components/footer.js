import styles from './nav.module.css'
import { Bebas_Neue } from 'next/font/google';



const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });

export default function Footer() {
    return (
      <>
        <div className={`${bebasneue.className} ${styles.bg} ${styles.footer}`}>
          Designed & Developed by : Aryan Wadkar
        </div>
      </>
    )
  }