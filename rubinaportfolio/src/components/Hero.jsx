import { motion } from "framer-motion";

import { styles } from "../styles";


const Hero = () => {
  return (
    <p>hero</p>
    // <section className={`relative w-full h-screen mx-auto`}>
    //   <div
    //     className={`relative inset-0 top-[120px] max-w-7xl  mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    //   >
    //     <div className='flex flex-col justify-center items-center mt-5'>
    //     </div>

    //     <div>
    //       <h1 className={`${styles.heroHeadText} text-white`}>
    //         Hi, I'm <span className='text-[#69005A]'>Alivia</span>
    //       </h1>
    //       <p className={`${styles.heroSubText} mt-2 text-white`}>
    //         I develop chic, modern web applications <br className='sm:block hidden' /> and 3D visuals. <br className='sm:block hidden' />Lets build your dream together!
    //       </p>
    //       <p className={`${styles.heroSubText} mt-2 text-[#B095B9]`}>
    //         The Tower is fully interactive. Have fun!
    //       </p>
    //     </div>
    //   </div>
    //   {/* slider */}
    //   <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
    //     <a href='#about'>
    //       <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
    //         <motion.div
    //           animate={{
    //             y: [0, 24, 0],
    //           }}
    //           transition={{
    //             duration: 1.5,
    //             repeat: Infinity,
    //             repeatType: "loop",
    //           }}
    //           className='w-3 h-3 rounded-full bg-secondary mb-1'
    //         />
    //       </div>
    //     </a>
    //   </div>
    // </section>
  );
};

export default Hero;