import Image from 'next/image'

function SideCartInProductPage({data}) {
    const {images, title}=data
  return (
    <div>
        <div>
            <Image src={images} width={500} height={500}/>
        </div>
        <div>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default SideCartInProductPage