import React from 'react'

export const ExampleCarouselImage = ({src, alt}) => {
  return (
       <img
      className="d-block w-100"
      src={src}
      alt={alt}
    />
  )
}
