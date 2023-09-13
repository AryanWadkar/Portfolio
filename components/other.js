import { Bebas_Neue,Roboto } from 'next/font/google';
import styles from "./other.module.css"
import Icon from '@mdi/react';
import { mdiChevronLeft,mdiChevronRight } from '@mdi/js';
import SkillBubble from './skillbubble';
import { RectButton } from './button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import data from "../public/content";
import Image from 'next/legacy/image'

const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });
const roboto = Roboto({weight:'400', subsets: ['latin'] });
const robotobold = Roboto({weight:'700', subsets: ['latin'] });

export default function OtherSection(){
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dotsClass: styles.button__bar,
};

const slider = useRef(null);
    return(
        <div className={`${styles.bg}`}>
                <div className={`${styles.arrbg}`} onClick={() => slider.current.slickPrev()}><Icon path={mdiChevronLeft}size={2}color="white"/></div>
                <div className={styles.slidesholder}>
                        <h1 className={`${bebasneue.className} ${styles.heading}`}>Other Endeavours</h1>
                        <Slider ref={slider} {...settings}>
                            {data.other.map(ele=> <EndeavourDesc content={ele} key={ele}/>)}
                        </Slider> 
                </div>
                <div className={`${styles.arrbg}`} onClick={() => slider.current.slickNext()}><Icon path={mdiChevronRight}size={2}color="white"/></div>
        </div>
    )
}

function EndeavourDesc(props){
    return(
        <div className={styles.card}>
            <div className={styles.flex}> 
            <div className={styles.img}><Image src={props.content.images[0]} style={{ width: '100%'}} layout="fill" objectFit="cover"/></div>
                <div className={styles.desc}>
                    <h2 className={`${bebasneue.className} ${styles.title}`}>{props.content.title}</h2>
                    <h3 className={`${robotobold.className} ${styles.subtitle}`}>{props.content.subtitle}</h3>
                    <p className={roboto.className}>{props.content.desc}</p>
                    <div className={styles.wrap}>
                        {props.content.skills.map(ele=><SkillBubble skill={ele} key={ele}/>)}
                    </div>
                    {props.content.link!="" && <RectButton label="View details" goto={props.content.link}/>}
                </div>
            </div>
        </div>
    );
}
