import { Bebas_Neue,Roboto } from 'next/font/google';
import styles from "./about.module.css"
import Image from 'next/image'
import Slider from "react-slick";

const roboto = Roboto({weight:'400', subsets: ['latin'] });
const bebasneue = Bebas_Neue({weight:'400', subsets: ['latin'] });

import AE from '../public/logos/aftereffects.png';
import css from '../public/logos/css.png';
import django from '../public/logos/django.png';
import figma from '../public/logos/figma.png';
import firebase from '../public/logos/firebase.png';
import flutter from '../public/logos/flutter.png';
import html from '../public/logos/html.png';
import illustrator from '../public/logos/illustrator.png';
import js from '../public/logos/js.png';
import mongo from '../public/logos/mongo.png';
import next from '../public/logos/next.png';
import node from '../public/logos/node.png';
import premiere from '../public/logos/premiere.png';
import psql from '../public/logos/psql.png';
import react from '../public/logos/react.png';
import socket from '../public/logos/socketio.png';
import ts from '../public/logos/ts.png';

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
                    <div className={styles.img}><Image src={css}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/> </div>
                    <div className={styles.img}><Image src={django}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}/></div>
                    <div className={styles.img}><Image src={figma}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={firebase} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={flutter}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={html}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={illustrator}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={js} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={mongo}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={next}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={node}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={premiere}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={psql} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={react}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={socket}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
                    <div className={styles.img}><Image src={ts}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/></div>
            </Slider>
    </div>
    );
}