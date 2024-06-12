import Image from "next/image";
import { IoMdPlayCircle } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Page2 = () => {
  return (
   
    <section className="islands swiper-slide">
        <img src="/img/bali.jpg" alt=""  className="islands__bg"/>

        <div className="islands__container bd-container">
            <div className="islands__data">
                <h2 className="islands__subtitle">Islands</h2>
                <h1 className="islands__title">Bali</h1>
                <p className="islands__description">It is an Indonesian island known and beautiful for its lush active volcanic mountains.</p>
                <a href="#" className="islands__button">Explore <i className='bx bx-right-arrow-alt islands__button-icon'><IoIosArrowBack /></i></a>
            </div>

            <div className="islands__video">
                <div className="islands__video-content">
                    <i className='bx bx-play-circle islands__video-icon'><IoMdPlayCircle /></i>
                </div>
            </div>  
        </div>
    </section>
  )
}

export default Page2