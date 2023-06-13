import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import FirstComponent from '@/components/firstComponent';
import SecondComponent from '@/components/secondComponent';
import ThirdComponent from '@/components/thirdComponent';
import FourthComponent from '@/components/forthComponent';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent/>
       <ThirdComponent/>
       <FourthComponent/>
    </div>
  );
}
