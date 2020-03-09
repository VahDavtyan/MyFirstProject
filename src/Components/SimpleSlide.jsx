import React from 'react';
import './Slide.css'
import SimpleImageSlider from "react-simple-image-slider";


class SimpleSlide extends React.Component {
  render() {
    const images = [
      { url: 'https://images.pexels.com/photos/3832475/pexels-photo-3832475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
      { url: 'https://images.pexels.com/photos/1441460/pexels-photo-1441460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
      { url: 'https://images.pexels.com/photos/3762284/pexels-photo-3762284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
      { url: 'https://images.pexels.com/photos/3801516/pexels-photo-3801516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
      { url: 'https://images.pexels.com/photos/3770757/pexels-photo-3770757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
      { url: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
      { url: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
    ];
    return (
      <div className="image-slider">
        <SimpleImageSlider
          width={1920}
          height={800}
          images={images}
          slideDuration={1.20}
        />
      </div>
    );
  }
}

export default SimpleSlide;
