import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router-dom'
import React from 'react';
import emBreve from '../../images/emBreve.png'
import Project1png from '../../images/project1.png'
import Project1svg from '../../images/project1.svg'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { BsArrowRight } from 'react-icons/bs'


const WorkSlider = () => {
  
  const Width = window.innerWidth;
  
  const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: Width <= 511 ? Project1png : Project1svg,
          link: 'https://www.behance.net/gallery/185238183/Landing-Page-AI-website',
        },
        {
          title: 'title',
          path: emBreve,
          link: '/',
        },
        {
          title: 'title',
          path: emBreve,
          link: '/',
        },
        {
          title: 'title',
          path: emBreve,
          link: '/',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: emBreve,
          link: '/',
        },
        {
          title: 'title',
          path: emBreve,
          link: '/',
        },
        {
          title: 'title',
          path: emBreve,
          link: '/',
        },
        {
          title: 'title',
          path: emBreve,
          link: '/',
        },
      ],
    },
  ],
  };
  
  return (
    <Swiper spaceBetween={10} pagination={{ clickable: true }} modules={[Pagination]} className=' h-[300px] sm:h-[470px]'>
      {workSlider.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer overflow-hidden'>
            {slide.images.map((image, imageIndex) => (
              <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={imageIndex}>
                <div className='flex items-center justify-center relative overflow-hidden group'>
                    <img src={image.path} className='h-[125px] w-[200px] sm:h-[200px] sm:w-[400px]  object-cover' alt=''/>
                  <Link to={image.link} className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></Link>
                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                    <div className='relative flex items-center gap-x-2 text-[13px] tracking-[0.2em] 
                      '>
                      <div className='delay-100'>
                        VER
                      </div>
                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                        PROJETO
                      </div>
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                        <BsArrowRight/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default WorkSlider;
