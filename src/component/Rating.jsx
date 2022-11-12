import star from "../assets/star_purple500_24px.png"
import styles from "../styles/components/Rating.module.css"

export const Rating = (props) => {
    return (
        // <div className={styles.body}>
            <div className={styles.container01}>
                <div className={styles.stars}>
                    {new Array(props.rating).fill(0).map(() => <img src={star} />)}
                </div>
                <p className={styles.text}>{props.text}</p>
                <div className={styles.profile}>
                    <img src={props.picture}></img>
                    <p>{props.firstName}</p>
                    <p>{props.lastName}</p>
                </div>
            </div>
        
    )
}