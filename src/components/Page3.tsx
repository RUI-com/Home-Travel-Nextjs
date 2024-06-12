import React from 'react'
import { IoMdPlayCircle } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
export const Page3 = () => {
  return (

                    <section className="islands swiper-slide">
                        <img src="/img/palawan.jpg" alt="" className="islands__bg"/>

                        <div className="islands__container bd-container">
                            <div className="islands__data">
                                <h2 className="islands__subtitle">Islands</h2>
                                <h1 className="islands__title">Palawan</h1>
                                <p className="islands__description">Also known as La Paragua, it is the largest island in the province of Palawan.</p>
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
