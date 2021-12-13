import React, {useEffect, useState} from "react";
import styles from '../styles/Card.module.css';
import Image from 'next/image';

export default function Marketplace(props){
    const [user, setUser] = useState(null);
    return (
        <div className={styles.cardcontainer}>
            <p>{props.title}</p>
            <Image width="100%" height="100%" src={props.img} alt="" />
            <p>{props.desc}</p>
            <p>{props.price} euros</p>
        </div>
    )
}