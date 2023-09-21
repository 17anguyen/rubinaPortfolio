import Carousel from "./Carousel";

const slides = [
    'https://placehold.co/600x400/EEE/31343C',
    'https://placehold.co/600x400/EEE/31343C',
    'https://placehold.co/600x400/EEE/31343C'
];
export default function ImageCarousel() {
    return (
        <div className="relative">
            <div className="max-w-lg">
                <Carousel autoSlide={true}>
                    {slides.map((s) => (
                        <img src={s} />
                    )
                    )}
                </Carousel>
            </div>
        </div>
    );
}