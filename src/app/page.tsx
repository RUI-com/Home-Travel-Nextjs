import { Page1, Page2, Page3, Popup } from '@/components';
import Script from 'next/script'

export default function Home() {
  return (
    <>
     <main className='main'>
     <div className="swiper-container gallery-top">
     <div className="swiper-wrapper">
        <Page1/>
        <Page2/>
        <Page3/>
        <Popup/>
      </div>
      </div>
      
            <div className="controls gallery-thumbs">
                <div className="controls__container swiper-wrapper">
                    <img src="/img/borabora.jpg" alt="" className="controls__img swiper-slide"/>
                    <img src="/img/bali.jpg" alt="" className="controls__img swiper-slide"/>
                    <img src="/img/palawan.jpg" alt="" className="controls__img swiper-slide"/>
                </div>
            </div>

     </main>
     <Script src="/js/gsap.min.js"/>
     <Script src="/js/swiper-bundle.min.js"/>
 <Script src="/js/main.js"/>

    </>
    
  );
}
