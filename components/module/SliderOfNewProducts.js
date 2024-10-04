import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const products = [
    {
      id: 1,
      image: "https://bucketforrezqorazeq.storage.c2.liara.space/1728027013234-orchids-perfume.png",
      title: 'عطر ارکیده',
      price: '85.000',
    },
    {
      id: 2,
      image: '"https://bucketforrezqorazeq.storage.c2.liara.space/1728026935924-limo-perfume.png"',
      title: 'عطر لیمو',
      price: '$39.99',
    },
    {
      id: 3,
      image: "https://bucketforrezqorazeq.storage.c2.liara.space/1728026721127-gol-yakh.png",
      title: 'عطر گل یخ',
      price: '$49.99',
    },
    {
        id: 4,
        image: "https://bucketforrezqorazeq.storage.c2.liara.space/1728026674715-nana%20%281%29.png",
        title: 'عطر نعنا',
        price: '$49.99',
      },
      {
        id: 5,
        image: "https://bucketforrezqorazeq.storage.c2.liara.space/1728026446571-rose-perfume.png" ,
        title: 'عطر رز',
        price: '$49.99',
      },
      {
        id: 6,
        image: "https://bucketforrezqorazeq.storage.c2.liara.space/1728026293053-mohammadi-perfume.png" ,
        title: 'عطر محمدی',
        price: '$49.99',
      },
      {
        id: 7,
        image: "https://bucketforrezqorazeq.storage.c2.liara.space/1728026216909-shabdar-perfume.png-.png",
        title: 'عطر شبدر',
        price: '$49.99',
      },
      {
        id: 8,
        image: "https://bucketforrezqorazeq.storage.c2.liara.space/1728026183288-lavender-perfume.png",
        title: 'عطر اسطخدوس',
        price: '$49.99',
      },
    // Add more products as needed
  ];
  
export default function SliderOfNew() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {products.map(product => (
                <SwiperSlide key={product.id}>
                <div className="product-slide">
                    <Image src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                </div>
                </SwiperSlide>
         ))}
      </Swiper>
    </>
  );
}
