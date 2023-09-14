import PurpleButton from "./button";
import styles from "./hero.module.css"
import { mdiLinkedin,mdiDownload,mdiXml,mdiGithub } from '@mdi/js';
import { Bebas_Neue,Roboto } from 'next/font/google';
import Image from 'next/image'

const roboto = Roboto({weight:'400', subsets: ['latin'] });
const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });

import hero from '../public/hero/hero.png';

export default function HeroSection(){
    return (
    <div className={styles.bg}>
        <div className={styles.memphis}></div>
        <div className={styles.memphis}></div>
        <div className={styles.memphis}></div>
        <div className={styles.memphis}></div>
        <div className={styles.memphis}></div>
        <div className={styles.memphis}></div>
        <div className={styles.memphis}></div>
        <div className={styles.memphis}></div>
        <div className={styles.memphis}></div>
        <div className={styles.memphis}></div>
        <div className={styles.yellowcircle}></div>
        <div className={styles.hero}><Image src={hero} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/></div>
        <h1 className={`${bebasneue.className} ${styles.heading}`}>Hi! I am Aryan</h1>
        <h2 className={`${roboto.className} ${styles.txt}`}>A software developer working with all kinds of technologies. I love to learn!</h2>
        <div className={styles.flex}>
            <PurpleButton ico={mdiLinkedin} txt="Linkedin" goto="https://www.linkedin.com/in/aryan-wadkar-784966200/"/>
            <PurpleButton ico={mdiGithub} txt="Github" goto="https://github.com/AryanWadkar"/>
            <PurpleButton ico={mdiXml} txt="Coding Profile" goto="https://www.codingninjas.com/studio/profile/aryanw"/>
            <PurpleButton ico={mdiDownload} txt="Get Resume" goto="https://drive.google.com/file/d/1IKERU_U9WOOECIQtS7YKyv9F9XfSWAyR/view?usp=drive_link"/>
        </div>
    </div>
    );
}