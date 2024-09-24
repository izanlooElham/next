"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./StoryCard.module.css"
import Image from "next/image";


function StoryCard({story}) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);
  const [isSelected, setIsSelected] = useState(false); // اضافه کردن state جدید

  const handleOpen = () => {
    setIsOpen(true);
    setIsSelected(true)
  };

  const handleClose = () => {
    setIsOpen(false);
    if (videoRef.current) {
      videoRef.current.pause(); // توقف ویدیو هنگام بسته شدن
      videoRef.current.currentTime = 0; // بازنشانی زمان ویدیو
    }
  };

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play(); // پخش ویدیو هنگام باز شدن
    }
  }, [isOpen]);

  return (
    <>
    <div   className={`${isSelected ? styles.selected : styles.container}`}  onClick={handleOpen}>
      <div className={styles.circle}>
         <Image width={400} height={400} src={`http://localhost:4000/${story.image}`} style={{borderRadius:"50%"}} alt={story.title}/>
      </div>
    </div>
  
    {isOpen && (
      <>
        <div className={styles.videoModal} onClick={handleClose}>
          <div className={styles.videoModalContent}>
            <video  ref={videoRef} controls >
              <source
                src={`http://localhost:4000/${story.video}`}
                type="video/mp4"
                ></source>
            </video>
          </div>
        </div>
        <div className={styles.backdrop} onClick={handleClose}></div>
        </>
      )}
    </>
  )
}

export default StoryCard