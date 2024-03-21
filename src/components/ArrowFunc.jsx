import Info from "./Info"
import Swiper from 'swiper';
import 'swiper/css';

const ArrowFunc = () => {


  return (
    <div class="swiper">
    {/* <!-- Additional required wrapper --> */}
    <div class="swiper-wrapper">
      {/* <!-- Slides --> */}
      <Info />
    </div>
    {/* <!-- If we need navigation buttons --> */}
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  )
}

export default ArrowFunc