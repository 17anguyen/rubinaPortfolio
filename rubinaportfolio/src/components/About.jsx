import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant, slideIn } from '../utils/motion';

import { SectionWrapper } from '../hoc'
import { profile } from '../assets';

const About = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-[#FF66C4]`}>About Rubina</h2>
      </motion.div> */}
      <div className='xl:mt-0 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>

        <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] items-center'
        >
          <img
            src={profile}
            alt='Rubina'
            style={{
              padding: '7px',
              width: '100%',
              height: 'auto',
              position: 'relative',
              width: '350px',
              height: '500px',
              overflow: 'hidden',
              borderRadius: '50% 50% 0% 0%',
              border: 'solid white 1px',
            }}
          />
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <h2 className={`${styles.sectionHeadText} text-[#FF66C4]`}>
            Rubina Postma
          </h2>
          <p className='text-[#FF66C4]'>
            Rubina Postma is a Seattle based artist, and Cornish Alum. Born & raised in Southern California, her family moved to Renton Washington when she was 9 years old. Her mediums include textiles, experimental printmaking, projection mapping, mixed media sculpture, illustration, and more.
            When not creating, Rubina likes to play with her cat, Truckee.
          </p>
          <br />
          <p>
            Artist Statement
            <br />
            My artistic practice surrounds an exploration of my identity as a bi-racial queer Black woman, the experiences that have shaped me, and their connection to the African diaspora. I focus on studying and honoring the history of my peoples, confronting generational trauma, snd seeking connection with other marginalized individuals in my community. I weave these experiences and research into my processes of art-making typically starting with analyzing and identifying intersectionalities. Through experimentation, exploration and material studies, my work reflects my relationship between my heritage, identity, and current state of events.

          </p>
        </motion.div>

      </div >
    </>
  );
};

export default SectionWrapper(About, "about");