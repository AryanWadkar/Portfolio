import PurpleButton from "./button";
import { Bebas_Neue,Roboto } from 'next/font/google';
import styles from "./projectdetails.module.css"
import SkillBubble from "./skillbubble";
import Slider from "react-slick";
import { useRef } from 'react';
import Projects from "./projects";
import Image from 'next/image'

const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });
const roboto = Roboto({weight:'400', subsets: ['latin'] });
const robotobold = Roboto({weight:'900', subsets: ['latin'] });

export default function ProjDetail(props){

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows:false
};
const slider = useRef(null);
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
                <Slider ref={slider} {...settings} className={styles.slidesholder}>
                        {props.content.images.map(ele=><div className={styles.img} key={ele}><Image key={ele} src={ele} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/></div>)}
                </Slider> 
            </div>
            <div className={styles.desc}>
                <p className={`${robotobold.className} ${styles.subheading}`}>DETAILS</p>
                <div className={roboto.className} dangerouslySetInnerHTML={{ __html: props.content.details }}></div>
            </div>
            <Projects idx={props.content.id}/>
    </div>
);
}