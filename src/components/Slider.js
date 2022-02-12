import "../styles/Slider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Slider() {
  return (
    <div className="slider-container">
      <div className="banner">
        <i className="arrow-back">
          <ArrowBackIosIcon />
        </i>
        <img
          src="https://image.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?w=740"
          alt="bannerimg"
          className="banner-img"
        />
        <i className="arrow-forward">
          <ArrowForwardIosIcon />
        </i>
      </div>
      
    </div>
  );
}



export { Slider };
