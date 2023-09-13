import styles from "./button.module.css"
import Icon from '@mdi/react';
import { Bebas_Neue } from 'next/font/google';
import Link from 'next/link'


const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });
export default function PurpleButton(props){
    return(
        <div className={styles.circle} data-hover={props.txt}>
        <Link href={props.goto} target="_blank">
            <Icon 
            path={props.ico}
            size={'4vh'}
            color="white"/>
        </Link>
        </div>
    );
}

export function RectButton(props){
    return(
        <Link className={`${bebasneue.className} ${styles.rect}` } href={props.goto} target="_blank">
            {props.label} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🞂
        </Link>
    );
}