
import styles from "./workex.module.css"
import { Bebas_Neue,Roboto } from 'next/font/google';
import SkillBubble from "./skillbubble";
import { RectButton } from "./button";
import { useState } from 'react';
import {default as fulldata} from "../public/content";


const roboto = Roboto({weight:'400', subsets: ['latin'] });
const robotobold = Roboto({weight:'700', subsets: ['latin'] });
const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });

export default function WorkEx(){

    const [currsel,setsel] = useState("fusion");

    const changeproj =(newproj)=>{
        setsel(newproj);
    };
    const data=fulldata.workex;
    return (
    <div className={styles.bg} id="exp">
        <h1 className={`${bebasneue.className} ${styles.heading}`}>i have worked at</h1>
        <div className={`${bebasneue.className} ${styles.flex}`}>
            <div className={styles.labels}>
                <div className={currsel=="fusion"?styles.sel:styles.notsel} onClick={(e)=>changeproj("fusion")}>Fusion IIITDMJ</div>
                <div className={currsel=="stlf"?styles.sel:styles.notsel} onClick={(e)=>changeproj("stlf")}>STLF IIITDMJ</div>
                <div className={currsel=="vh"?styles.sel:styles.notsel} onClick={(e)=>changeproj("vh")}>Vigorus Healthtech</div>
            </div>
            <div className={`${styles.divider}`} style={{"--pos":data[currsel].pos}}></div>
            <div className={styles.desc}>
                <div className={styles.position}>{data[currsel].heading}</div>
                <div className={`${robotobold.className} ${styles.duration}`}>{data[currsel].duration}</div>
                <div className={styles.skills}>
                    {data[currsel].skills.map(d => (<SkillBubble skill={d} key={d}></SkillBubble>))}
                </div>
                <div className={`${roboto.className} ${styles.details}`}>{data[currsel].desc}</div>
                {data[currsel].link!="" &&<RectButton label="View Certificate" goto={data[currsel].link}/>}
            </div>
        </div>
    </div>
    );
}