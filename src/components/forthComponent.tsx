import styles from "../styles/container4.module.css"
import Image from 'next/image';


function FourthComponent() {
  return (
   <div className={styles.container}>
     <div className={styles.bgimg}>
      <img src="Rectangle 26.png" alt="" />
    </div>
    <div className={styles.guitar}>
        <img src="/Vector (8).png" alt="" />
        <h1 id={styles.h1}>OnlyRiffs</h1>
    </div>

   </div>
  );
}

export default FourthComponent;
