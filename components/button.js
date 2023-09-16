import styles from "../styles/button.module.css"
import Icon from '@mdi/react';
import { Bebas_Neue } from 'next/font/google';
import Link from 'next/link'


const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });
export default function PurpleButton(props){
    return(
        <div className={styles.circle} data-hover={props.txt}>
        <Link href={props.goto} target="_blank">
            <Icon 
            className={styles.ico}
            path={props.ico}
            size='1.5em'
            color="white"/>
        </Link>
        </div>
    );
}

export function RectButton(props){
    return(
        <Link className={`${bebasneue.className} ${styles.rect}` } href={props.goto} target="_blank">
            {props.label} &nbsp;&nbsp;<span className={styles.arrow1}>🞂</span><span className={styles.arrow2}>🞂</span>
        </Link>
    );
}