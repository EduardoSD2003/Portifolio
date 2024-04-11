import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ReactNode } from "react";
import './SliderStyles.css'

interface SliderProps {
    settings: SwiperProps;
    children: ReactNode ;
}


export default function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[Navigation , Pagination, Autoplay, EffectCoverflow]} {...settings}>
        {children}
    </Swiper>
  );
}
