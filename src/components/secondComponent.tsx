import styles from "../styles/container2.module.css";
import Image from "next/image";

function SecondComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.bgimg}>
        <img src="/Rectangle 29.png" alt="Overlay Image" />
      </div>
      <h1 className={styles.text1}>What You will Find here</h1>
      <div className={styles.main}>
        <div className={styles.submain}>
          <img src="/ic 1.png" alt="Overlay Image" />
          <p className={styles.text8}>
          Absolutely Unique <br /> Shows and Freakish <br /> Photos
          </p>
         
          <p className={styles.text2}>
            from your favorite bands <br /> all over the world
          </p>
        </div>
        <div className={styles.submain}>
          <img src="/Vector (4).png" alt="Overlay Image" />
          <p className={styles.text8}>
          Hundreds of top bands <br />
and outstanding  <br />singers
          </p>
          
           <p className={styles.text2}>
           with fresh content created <br />
especially for you
          </p>
        </div>
        <div className={styles.submain}>
          <img src="/Vector (4)...png" alt="Overlay Image" />
          <p className={styles.text8}>
          Powerful platform for <br /> monetization your <br /> performances
          </p>
        
         
           <p className={styles.text2}>
           Easily share music with your <br /> followers and earn money <br /> from subscriptions
          </p>
        </div>
        <div className={styles.submain}>
          <img src="/Union.png" alt="Overlay Image" />
          <p className={styles.text8}>
          Collaboration <br />
with the most post <br /> popular artists
          </p>
        
           <p className={styles.text2}>
           to create outstanding works <br />
and share it with the whole world
          </p>
        </div>
      </div>
       <div className={styles.main}>
        <div className={styles.submain5}>
          <img src="img 5.png" alt="Overlay Image" />
          <p className={styles.text8}>
          Host your HD videos
          </p>
          
          <p className={styles.text2}>
          on our high-quality, fast- <br />loading, ad-free platform
          </p>
        </div>
        <div className={styles.submain5}>
          <img src="/img 6.png" alt="Overlay Image" />
          <p className={styles.text8}>
          Capture Audience <br /> Attention
          </p>
         
           <p className={styles.text2}>
           by bringing the goodness of <br />cinema quality to your Fans!
          </p>
        </div>
        <div className={styles.submain5}>
          <img src="/img 7.png" alt="Overlay Image" />
          <p className={styles.text8}>
          Users can enjoy your <br /> content
          </p>
          
           <p className={styles.text2}>
           with the best playback sound <br /> quality
          </p>
        </div>
        <div className={styles.submain5}>
          <img src="/img 8.png" alt="Overlay Image" />
          <p className={styles.text8}>
          Immerse users in a <br />360º, fully-virtual <br />experience. 
          </p>
         
           <p className={styles.text2}>
           We create one of a kind VR <br /> experiences for every headset <br />available
          </p>
        </div>
        <img className={styles.dollar} src="$.png" alt="Overlay Image" />
        <img className={styles.vr} src="VR.png" alt="Overlay Image" />
        <img className={styles.ak} src="4.png" alt="Overlay Image" />
        <img className={styles.k} src="k.png" alt="Overlay Image" />
      </div>
    </div>
  );
}

export default SecondComponent;
