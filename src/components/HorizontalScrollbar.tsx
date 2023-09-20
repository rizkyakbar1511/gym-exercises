import { Box, Button } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

interface HorizontalScrollbarProps {
  data: string[];
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  isBodyPart?: boolean;
}

const LeftArrow = () => {
  const swiper = useSwiper();
  return (
    <Button disableRipple onClick={() => swiper.slidePrev()} className="right-arrow" variant="text">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Button>
  );
};

const RightArrow = () => {
  const swiper = useSwiper();
  return (
    <Button disableRipple onClick={() => swiper.slideNext()} className="left-arrow" variant="text">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Button>
  );
};

const HorizontalScrollbar: React.FC<HorizontalScrollbarProps> = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      navigation
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
    >
      <Box mt={3} display="flex" alignItems="center" justifyContent="flex-end" gap="1rem">
        <LeftArrow />
        <RightArrow />
      </Box>
      {data.map((item, idx) => (
        <SwiperSlide key={idx}>
          {isBodyPart ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HorizontalScrollbar;
