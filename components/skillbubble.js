import styles from '../styles/skillbubble.module.css'
import {Roboto } from 'next/font/google';
const robotobold = Roboto({weight:'900', subsets: ['latin'] });

export default function SkillBubble(props){
    return(<div className={`${robotobold.className} ${styles.bubble}`}>
            {props.skill}
    </div>);
}