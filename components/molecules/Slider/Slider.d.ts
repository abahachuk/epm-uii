export interface ISlide {
  src: string;
  topic: string;
  header: string;
  text: string;
}

export interface ISlides extends Array<ISlide> {
}

export interface ISlider {
  slides: ISlides;
}
