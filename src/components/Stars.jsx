import Image from 'next/image';
import React from 'react'

const Stars = ({ rating }) => {
  const stars = new Array(rating).fill(0);
  return (
    <>
      {
        stars?.map((star, index) => (
          <Image key={index} src={`/assets/images/start.svg`} width={20} height={20} />
        ))
      }
    </>
  )
}

export default Stars;