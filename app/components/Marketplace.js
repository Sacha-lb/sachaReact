import React, {useEffect, useState} from "react";
import styles from '../styles/Marketplace.module.css';
import Card from '../components/Card';

export default function Marketplace(){
    const [user, setUser] = useState(null);
    return (
        <div>
            <h3 className={styles.marketTitle}>Marketplace</h3>
                <div className={styles.marketcontainer}>
                <Card title="card1" desc="test" price="125" img="https://cdn.pixabay.com/photo/2021/02/06/09/03/man-5987447_960_720.jpg"/>
                <Card title="card1" desc="test" price="125" img="https://cdn.pixabay.com/photo/2021/02/06/09/03/man-5987447_960_720.jpg"/>
                <Card title="card1" desc="test" price="125" img="https://cdn.pixabay.com/photo/2021/02/06/09/03/man-5987447_960_720.jpg"/>
                <Card title="card1" desc="test" price="125" img="https://cdn.pixabay.com/photo/2021/02/06/09/03/man-5987447_960_720.jpg"/>
                <Card title="card1" desc="test" price="125" img="https://cdn.pixabay.com/photo/2021/02/06/09/03/man-5987447_960_720.jpg"/>
                <Card title="card1" desc="test" price="125" img="https://cdn.pixabay.com/photo/2021/02/06/09/03/man-5987447_960_720.jpg"/>
                <Card title="card1" desc="test" price="125" img="https://cdn.pixabay.com/photo/2021/02/06/09/03/man-5987447_960_720.jpg"/>
            </div>
        </div>
    )
}