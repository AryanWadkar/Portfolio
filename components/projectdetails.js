import PurpleButton from "./button";
import { Bebas_Neue,Roboto } from 'next/font/google';
import styles from "../styles/projectdetails.module.css"
import SkillBubble from "./skillbubble";

import Projects from "./projects";
import Image from 'next/image'

import Carousel from "nuka-carousel"


const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });
const roboto = Roboto({weight:'400', subsets: ['latin'] });
const robotobold = Roboto({weight:'900', subsets: ['latin'] });

export default function ProjDetail(props){
    let items=[];
    props.content.images.forEach(element => {
        items.push(<Img img={element}></Img>)
    });
    return(
    <div className={styles.bg}>
            <div className={styles.flex}> 
                <div className={styles.header}>
                    <h2 className={`${bebasneue.className} ${styles.heading}`}>{props.content.title}</h2>
                    <h3 className={`${robotobold.className} ${styles.subheading}`}>{props.content.subtitle}</h3>
                    <p className={`${roboto.className} ${styles.preface}`}>
                        {props.content.desc}
                    </p>
                    <div className={styles.wrap}>
                        {props.content.skills.map(ele=><SkillBubble skill={ele} key={ele}/>)}
                    </div>
                    <div className={styles.wrap}>
                        {props.content.links.map(ele=><PurpleButton ico={ele.ico} txt={ele.txt} goto={ele.url} key={ele}/>)}
                    </div>
                </div>
                <div className={styles.slidesholder}>
                        <Carousel autoplay='true' wrapAround='true'>
                            {items}
                        </Carousel>
                </div>

            </div>
            <div className={styles.desc}>
                <p className={`${robotobold.className} ${styles.subheading}`}>DETAILS</p>
                <div className={roboto.className} dangerouslySetInnerHTML={{ __html: props.content.details }}></div>
            </div>
            <Projects idx={props.content.id}/>
    </div>
);
}

function Img(props){
    return(
        <div className={styles.imgx}>
            <Image src={props.img} width={0} height={0} sizes="100vw" fill={true} style={{ width: '100%', objectFit: 'cover', borderRadius:'30px' }}/>
        </div>
    );
}