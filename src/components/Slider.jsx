import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <span style={{width:"100px",height:"100px",color:"black"}}>

        </span>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/300"
          alt="First slide"
        />
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/300"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;