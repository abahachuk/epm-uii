import * as React from 'react';
import Slick from 'react-slick';
import './style.scss';
import images from "../../atoms/Images";
import { ISlider, ISlide } from './Slider';

function Slider(props: ISlider) {
  const { slides = [] } = props;
  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-dots--white',
    arrows: false
  };
  return (
    <section className="slider__wrapper">
      <div className="outer-center">
        <Slick { ...settings } className="slider">
          { slides && slides.map((slide: ISlide, index: number) => (
            <article className="slider__slide" key={ index }>
              <img className="slider__img" src={ `${images(slide.src)}` } />
              <div className="slider__topic">{ slide.topic }</div>
              <h1 className="slider__header">{ slide.header } </h1>
              <div className="slider__text">{ slide.text } </div>
            </article>)
          ) }
        </Slick>
      </div>
    </section>
  );
}

export default Slider;
