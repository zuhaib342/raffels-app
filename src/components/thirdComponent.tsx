import styles from "../styles/container3.module.css"
import Image from 'next/image';


function ThirdComponent() {
  return (
   <div className={styles.container}>
     <div className={styles.bgimg}>
      <img src="/div3.png" alt="" />
      <div className={styles.text3}>
        <h1>Don't Lose Our Start</h1>
        <h4>Leave your email to be informed about the start of Only Riffs platform</h4>
        <input type="text" placeholder="Your Email"  className={styles.input}/>
        <button className={styles.button}>Subscribe</button>
      </div>
    </div>
   </div>
  );
}

export default ThirdComponent;
