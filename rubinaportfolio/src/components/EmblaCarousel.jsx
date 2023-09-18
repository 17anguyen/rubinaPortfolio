import { React, useCallback } from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import { heroImages } from "../constants";


const EmblaCarousel = () => {
    const autoplayOptions = {
        delay: 500,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    }
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    return (
        <div className="embla row inline-block">
            <button className="embla__next" onClick={scrollNext}>
                Next
            </button>
            <div className="embla__viewport" ref={emblaRef} >
                <div className="embla__container">
                    <div className="embla__slide">
                        <img
                            src='https://placekitten.com/200/140'
                            alt="slide 1"
                        />
                    </div>
                    <div className="embla__slide">
                        <img
                            src='https://placekitten.com/200/138'
                            alt="slide 1"
                        />
                    </div>
                    <div className="embla__slide">
                        <img
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
