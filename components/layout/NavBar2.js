import styles from "./NavBar2.module.css"
import { FiInstagram } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";


function NavBar2() {
  return (
    <div className={styles.navBar}>
    <div className={styles.connect}>
    <FaPhone style={{position: 'relative', top: '5px', right: '24px', fontSize:"20px"}}/>
        <a href="tel:09156021090">09156021090</a>
        <Link href="https://maps.app.goo.gl/oJTph22yEfzt3sqy6"><IoLocationSharp/>مکان</Link>
        <MdEmail style={{position: 'relative', top: '4px', right: '21px', fontSize:"23px"}}/>
        <Link href="lkjh">info@rezqorazeq.ir</Link>
    </div>
    <div className={styles.media}>
    <Link href="https://www.instagram.com/rezqorazeq/">< FiInstagram/></Link>
    <Link href="https://web.eitaa.com/#43815059"><Image src="/eitaa.svg" alt="eitaa" width={300} height={400} style={{ filter: 'invert(100%)' }}/></Link>
    <Link href="https://t.me/rezqorazeq"><FaTelegramPlane/></Link>
    </div>
    </div>
  )
}

export default NavBar2