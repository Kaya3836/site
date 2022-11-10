import styles from "../styles/components/Home.module.css"
import sec2pic from "../assets/sec2.png"
import sec3pic from "../assets/sec3.png"
import sec4pic from "../assets/sec4.png"
import arrow from "../assets/arrow.png"

export const Home = (props) => {
    return (
     <>
        <div className={styles.section01}>
            <div className={styles.box}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.exp}>{props.exp}</p>
                <input placeholder="Email" type="email" className={styles.email}></input>
                <button className={styles.access}>Get early access</button>
            </div>
        </div>

        <div className={styles.section}>
            <div className={styles.first}>
                <div className={styles.text2}>
                    <p className={styles.heading}>{props.h2}</p>
                    <p className={styles.heading1}>{props.p}</p>
                    <div className={styles.learnmore}>
                        <p className={styles.learn}>Learn more</p>
                        <img className={styles.arrow} src={arrow}/>
                    </div>
                </div>
            </div>
            <div className={styles.second}>
                <img className={styles.image} src={sec2pic}/>
            </div>
        </div>

        <div className={styles.section}>
            <div className={styles.first3}>
                <img className={styles.sec3pic} src={sec3pic}/>
            </div>
            <div className={styles.first}>
                <div className={styles.text3}>
                    <p className={styles.heading}>{props.h3}</p>
                    <p className={styles.heading1}>{props.p}</p>
                    <div className={styles.learnmore}>
                        <p className={styles.learn}>Learn more</p>
                        <img className={styles.arrow} src={arrow}/>
                        </div>
                </div>
            </div>
        </div>

        <div className={styles.section}>
            <div className={styles.first}>
                <div className={styles.text3}>
                    <p className={styles.heading}>{props.h4}</p>
                    <p className={styles.heading1}>{props.p}</p>
                    <div className={styles.learnmore}>
                        <p className={styles.learn}>Learn more</p>
                        <img className={styles.arrow} src={arrow}/>
                    </div>
                </div>
            </div>
            <div className={styles.first3}>
                <img className={styles.sec3pic} src={sec4pic}/>
            </div>
        </div>

        <div className={styles.section}>

        </div>

    </>
    )
}
