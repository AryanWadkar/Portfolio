import { Bebas_Neue,Roboto } from 'next/font/google';
import styles from "./projects.module.css"
import Icon from '@mdi/react';
import { mdiChevronLeft,mdiChevronRight } from '@mdi/js';
import SkillBubble from './skillbubble';
import { RectButton } from './button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import data from "../public/content"
import Image from 'next/image'

const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });
const roboto = Roboto({weight:'400', subsets: ['latin'] });
const robotobold = Roboto({weight:'700', subsets: ['latin'] });
export default function Projects(props){
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        centerMode:true,
        dotsClass: styles.button__bar,
};
const slider = useRef(null);
    return(
        <div className={`${styles.bg}`} id="projects">
            <div className={`${styles.arrbg} ${styles.left}`} style={{"--dir":-50}} onClick={() => slider.current.slickPrev()}><Icon path={mdiChevronLeft}size={2}color="white"/></div>
            <div className={styles.slidesholder}> 
                <h1 className={`${bebasneue.className} ${styles.heading}`}>{props.idx==="default"? "MY PROJECTS":"OTHER PROJECTS"}</h1>
                <Slider ref={slider} {...settings}>
                    {data.projects.map(
                            element => {
                                if(element.id!==props.idx)
                                {
                                    return <ProjCard data={element} key={element.id}/>
                                }
                            }
                        )
                    }
                </Slider> 
            </div>
            <div className={`${styles.arrbg} ${styles.right}`} style={{"--dir":50}} onClick={() => slider.current.slickNext()}><Icon path={mdiChevronRight}size={2}color="white"/></div>
        </div>
    )
}

function ProjCard(props){
    return(
        <div className={styles.card}>
            <div className={styles.flex}> 
                <div>
                    <h2 className={`${bebasneue.className} ${styles.cardtitle}`}>{props.data.title}</h2>
                    <h3 className={robotobold.className}>{props.data.subtitle}</h3>
                    <div className={styles.wrap}>
                        {props.data.skills.map(ele=><SkillBubble skill={ele} key={ele}/>)}
                    </div>
                </div>
                <div className={styles.img}><Image src={props.data.images[0]} width={0} height={0} sizes="100vw" fill={true} style={{ width: '100%', objectFit: 'cover' }}/></div>
            </div>
            <p className={`${roboto.className} ${styles.desc}`} >{props.data.desc}</p>
            <RectButton label="View details" goto={`/projects/${props.data.id}`}/>
        </div>
    );
}
