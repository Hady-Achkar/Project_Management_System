import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { Container } from "@material-ui/core"
const Slider = () => {
  return (
    <Container maxWidth='lg'>
      <Carousel>
        <div>
          <img src='https://source.unsplash.com/random' height='500px' />
        </div>
        <div>
          <img src='https://source.unsplash.com/random' height='500px' />
        </div>
        <div>
          <img src='https://source.unsplash.com/random' height='500px' />
        </div>
      </Carousel>
    </Container>
  )
}

export default Slider
