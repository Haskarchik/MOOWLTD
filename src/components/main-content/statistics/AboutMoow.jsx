import React, { useRef } from 'react'

export default function AboutMoow(props) {
  const show = useRef()
  if(props.show){
    show.current='show'
  }else{
    show.current=' '
  }
  return (
  <section className= {'about ' + show.current}>
        <div className='wrapper'>
            <div className="title">
            Про MOOW за 2 хвилини
            </div>
            <div className="about_content">
            <div className="exist_left_words">
              <div className="m"></div>
              <div className="oo"></div>
              <div className="o"></div>
              <div className="w"></div>
              <div className="m"></div>
              <div className="o"></div>
              <div className="oo"></div>
              <div className="w "></div>
              <div className="m"></div>
              <div className="o"></div>
              <div className="oo "></div>
              <div className="w last_word"></div>
            </div>
            <video className='about_video' src=""></video>
            <div className="exist_right_words">
              <div className="m"></div>
              <div className="oo"></div>
              <div className="o"></div>
              <div className="w"></div>
              <div className="m"></div>
              <div className="o"></div>
              <div className="oo "></div>
              <div className="w "></div>
              <div className="m"></div>
              <div className="o"></div>
              <div className="oo "></div>
              <div className="w last_word"></div>
            </div>
            </div>
        </div>
  </section >
  )
}
