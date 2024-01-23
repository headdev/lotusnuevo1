

import Link from 'next/link'


import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop:false,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
};

export default function FlatExplore4() {
    return (
        <>
            <section className="flat-explore tf-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section center">
                                <h2>Nuestros mejores destinos</h2>
                                <h3 className="text-color-4 " >Contamos con proyectos en las siguientes ciudades</h3>
                            </div>
                            <div className="swiper-container carousel-8">
                                <Swiper {...swiperOptions}>
                                    <SwiperSlide>
                                        <div className="box center  w-full h-full hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="alainimagenescirculo" src="/assets/images/img-box/tulum.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>Tulúm</h3></Link>
                                                <p className="text-color-2">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center w-full h-full hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="alainimagenescirculo" src="/assets/images/img-box/cancun.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1" className="link-style-2"><h3>Cancun </h3></Link>
                                                <p className="text-color-2">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="alainimagenescirculo" src="/assets/images/img-box/islacozumel.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>Isla cozumel</h3></Link>
                                                <p className="text-color-2">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="alainimagenescirculo" src="/assets/images/img-box/mazatlan.jpeg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>Mazatlán</h3></Link>
                                                <p className="text-color-2">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="alainimagenescirculo" src="/assets/images/img-box/playadelcarmen.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3> Playa del Carmen </h3></Link>
                                                <p className="text-color-2">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="box center hv-one">
                                            <div className="images img-style s-one relative">
                                                <img className="alainimagenescirculo" src="/assets/images/img-box/Puertomorelos.jpg" alt="images" />
                                            </div>
                                            <div className="content link-style-1">
                                                <Link href="/properties-map-v1"><h3>Puerto Morelos </h3></Link>
                                                <p className="text-color-2">1570 listing</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                   
                                </Swiper>
                            </div>
                            <div className="swiper-button-next " />
                            <div className="swiper-button-prev "> </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
