import styles from '../styles/Home.module.css';
import Image from 'next/image';


function FirstComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.bgimg}>
      <img src="/image 4.png" alt="Overlay Image" />
      </div>
      <div className={styles.guitar}>
      <img src="/onlyriffs-logo_horizontal - black 1@2x.png" alt="Overlay Image" />
      </div>
      <div className={styles.overlay}>
       
       
      </div>
      
      <div className={styles.text2}>
       <h1 >We’re launching this fall</h1>
      </div>
      <div className={styles.text3}>
        <h3>Leave your email to be informed about the start of Only Riffs platform</h3>
        <input type="text" placeholder="Your Email"  className={styles.input}/>
        <button className={styles.button}>Subscribe</button>
      </div>
    </div>
  );
}

export default FirstComponent;
