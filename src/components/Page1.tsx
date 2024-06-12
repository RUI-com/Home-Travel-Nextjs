import Image from "next/image";
import { IoMdPlayCircle } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
export const Page1 = () => {
  return (
  
    <section className="islands swiper-slide">
        <img src="/img/borabora.jpg" alt=""  className="islands__bg"/>

        <div className="islands__container bd-container">
            <div className="islands__data">
                <h2 className="islands__subtitle">Islands</h2>
                <h1 className="islands__title">Bora Bora</h1>
                <p className="islands__description">Small South Pacific island northwest of Tahiti in French Polynesia, surrounded by motus.</p>
                <a href="#" className="islands__button">Explore <i className='bx bx-right-arrow-alt islands__button-icon'><IoIosArrowBack /></i></a>
            </div>

            <div className="islands__video">
                <div className="islands__video-content">
                    <i className='bx bx-play-circle islands__video-icon'><IoMdPlayCircle /></i>
                </div>
            </div> 
        </div>
    </section>
  );
}
