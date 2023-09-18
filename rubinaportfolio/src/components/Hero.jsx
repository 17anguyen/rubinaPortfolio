import { motion } from "framer-motion";
import { heroImages } from "../constants";
import { styles } from "../styles";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {heroImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}
const Hero = () => {

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`relative inset-0 top-[120px] max-w-7xl  mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-columns-3xs justify-center items-center mt-5'>
          <h1 className={`${styles.heroHeadText} text-[#FF66C4]`}>
            Rubina Postma<br /><span className='text-[#DB57A8]'>Fine Art</span>
          </h1>
        </div>
        {/* slideshow */}
        <Slideshow />
      </div>

      {/* slider */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#FF66C4] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-4 h-5 rounded-full bg-[#FF66C4] mb-1'
            />
          </div>
        </a>
      </div>
    </section >
  );
};

export default Hero;
