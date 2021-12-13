import React, {useEffect, useState} from "react";
import styles from '../styles/Card.module.css';
import Image from 'next/image';

export default function Marketplace(props){
    const [user, setUser] = useState(null);
    return (
        <div className={styles.cardcontainer}>
            <p className={styles.cardtitle}>{props.title}</p>
            <Image className={styles.cardimg} width="100%" height="100%" src={props.img} alt=""/>
            <p>{props.desc}</p>
            <p>{props.price} euros</p>
            <button className={styles.cardbtn}>BUY</button>
        </div>
    )
}