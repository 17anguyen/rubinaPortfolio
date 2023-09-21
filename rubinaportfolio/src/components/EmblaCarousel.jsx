import { React, useCallback, useState, useEffect } from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';


const EmblaCarousel = (props) => {
    const { slides, options } = props

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()],)

    // autoplay speed 
    const autoplayOptions = {
        delay: 500,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    }
    // prev
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    // next
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla">
            <button className="embla__next" onClick={scrollNext}>
                Next
            </button>
            <div className="embla__viewport" ref={emblaRef} >
                <div className="embla__container">
                    <div className="embla__slide">
                        <img
                            className='embla__slide__img'
                            src='https://placekitten.com/200/140'
                            alt="slide 1"
                        />
                    </div>
                    <div className="embla__slide">
                        <img
                            className='embla__slide__img'
                            src='https://placekitten.com/200/138'
                            alt="slide 1"
                        />
                    </div>
                    <div className="embla__slide">
                        <img
                            className='embla__slide__img'
                            src='https://placehold.co/600x400/EEE/31343C'
                            alt="slide 1"
                        />
                    </div>
                </div>
            </div>
            <button className="embla__prev" onClick={scrollPrev}>
                Prev
            </button>

        </div>
    )
}

export default EmblaCarousel;
