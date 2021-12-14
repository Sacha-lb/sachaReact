import React, {useEffect, useState} from "react";
import styles from '../styles/Card.module.css';
import Image from 'next/image';
import Router from 'next/router';

export default function Marketplace(props){
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        console.log(selected)
    }, [selected]);

    const gotoproductpage = (name) => {
        Router.push('/[productname]', `/${props.title}`)
    }

    return (
        <div className={styles.cardcontainer}>
            <p className={styles.cardtitle}>{props.title}</p>
            <Image className={styles.cardimg} width="100%" height="100%" src={props.img} alt=""/>
            <p>{props.desc}</p>
            <p>{props.price} euros</p>
            <button onClick={() => {gotoproductpage(props.title), localStorage.setItem("selected_product", JSON.stringify(props))}} className={styles.cardbtn}>BUY</button>
        </div>
    )
}