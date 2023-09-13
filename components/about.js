import { Bebas_Neue,Roboto } from 'next/font/google';
import styles from "./about.module.css"
import Image from 'next/image'
import Slider from "react-slick";
import AE from '../public/logos/aftereffects.png';
const roboto = Roboto({weight:'400', subsets: ['latin'] });
const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });

export default function AboutSection(){

    const settings = {
        dots: false,
        infinite: true,
        fasw:true,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows:false,
        className:styles.slider
      };

      let arr=['aftereffects','css','django','figma','firebase','flutter','html','illustrator','js','mongo','next','node','premiere','psql','react','socketio','ts'];
      let eles=arr.map(element => {
        <div className={styles.img}><Image src={`/../public/logos/${element}.png`} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
    });
    return (
    <div className={styles.bg} id="about">
        <h1 className={`${bebasneue.className} ${styles.heading}`}>about me</h1>
        <h2 className={`${roboto.className} ${styles.txt}`}>I am a final year student at Indian Insititue of Information Technology, Design and Manufacturing (IIITDM) Jabalpur. I love to learn new technologies and use that knowledge to build real world applications and systems, be it for fun or be it actual solutions. When I am not working with code, I like to sit with my guitar and indulge in all kinds of music to relax myself.</h2>
            <Slider {...settings} >
                    <div className={styles.img}> <Image src={AE} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/css.png'}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/> </div>
                    <div className={styles.img}><Image src={'/../public/logos/django.png'}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/figma.png'}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/firebase.png'} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/flutter.png'}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/html.png'}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/illustrator.png'}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/js.png'} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/mongo.png'}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/next.png'}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/node.png'}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/premiere.png'}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/psql.png'} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/react.png'}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/socketio.png'}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={'/../public/logos/ts.png'}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
            </Slider>
    </div>
    );
}