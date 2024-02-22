import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "/home/zprogrammercode/React-portfolio-page/portfolio-page1/src/Components/Components.css";

const MultiCarousel = () => {

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    
  }
};

const Products = [
    {id: "0", name: "", pic: "https://github.com/zprogrammer-code/ecommerce-ultra/assets/55429400/165e2ff7-dcaf-47c3-acb9-90abcb427df3", sizes: [0] },
    {id: "1", name: "", pic: "https://github.com/zprogrammer-code/ecommerce-ultra/assets/55429400/b19d3e0b-ec57-41a4-b2ce-e1a1c75ea901", sizes: [0] },
    {id: "2", name:"", pic: "https://github.com/zprogrammer-code/ecommerce-ultra/assets/55429400/d22dfaba-b4ac-4c3a-9e00-9cce603454fa", sizes: [0] },
    {id: "3", name:"", pic: "https://github.com/zprogrammer-code/ecommerce-ultra/assets/55429400/0d15e15a-b21e-4d86-b874-81dad527f493", sizes: [0] },
    {id: "4", name: "", pic: "https://github.com/zprogrammer-code/ecommerce-ultra/assets/55429400/cf788607-0ab4-4028-8ef5-ab2159ea3b31", sizes: [0]},
    {id: "5", name: "", pic: "https://images.vans.com/is/image/Vans/VN0A5JIV_TBB_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0", sizes: [0]},

]

return(
<Carousel 
  swipeable={true}
  draggable={false}
  showDots={true}
  centerMode={true}
  responsive={responsive}
 /* ssr={true} // means to render carousel on server-side.*/
  infinite={true}
  /*autoPlay={this.props.deviceType !== "mobile" ? true : false}*/
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  
  /*removeArrowOnDeviceType={["tablet", "mobile"]}*/
  /*deviceType={this.props.deviceType}*/
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px">
{Products.map((product, index) => (
          <div key={index} >
            <img src={product.pic} alt="shoes" className="carousel-pic"/>
            
          </div>
        ))}

</Carousel>
    );

};

export default MultiCarousel;