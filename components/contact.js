import PurpleButton from "./button";
import styles from "../styles/contact.module.css"
import { mdiPhone,mdiEmail,mdiLinkedin,mdiInstagram } from '@mdi/js';
import { Bebas_Neue,Roboto } from 'next/font/google';


const roboto = Roboto({weight:'400', subsets: ['latin'] });
const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });

export default function ContactSection(){
    return (
    <div className={styles.bg}>
        <h1 className={`${bebasneue.className} ${styles.heading}`}>Contact me</h1>
        <h2 className={`${roboto.className} ${styles.txt}`}>You can get in touch with me through a few media, in case you do decide to 
contact me, I hope we have a nice conversation.</h2>
        <div className={styles.flex}>
            <PurpleButton ico={mdiPhone} txt="+91 7715065136" goto="tel:+917715065136"/>
            <PurpleButton ico={mdiEmail} txt="Mail" goto="mailto:wadkararyan01@gmail.com"/>
            <PurpleButton ico={mdiLinkedin} txt="LinkedIn" goto="https://www.linkedin.com/in/aryan-wadkar-784966200/"/>
            <PurpleButton ico={mdiInstagram} txt="Instagram" goto="https://www.instagram.com/awwwwyoufoundme/?hl=en"/>
        </div>
    </div>
    );
}