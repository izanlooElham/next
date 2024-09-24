import { MdOutlineStar } from "react-icons/md";
import styles from "./star.module.css"

const Star = () => {
  return (
   <div className={styles.container}>
        <MdOutlineStar color="#ffa723" style={{fontSize:"10px"}}/>
        <MdOutlineStar color="#ffa723" style={{fontSize:"10px"}}/>
        <MdOutlineStar color="#ffa723" style={{fontSize:"10px"}}/>
        <MdOutlineStar color="#8e8e8e" style={{fontSize:"10px"}}/>
        <MdOutlineStar color="#8e8e8e" style={{fontSize:"10px"}}/>
   </div>
  );
}

export default Star;