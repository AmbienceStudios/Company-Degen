'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (

 

  <section className={`${styles.paddings}`}>
     
     <TitleText
        title={(
          <>Our Team
          </>
        )}
        textStyles="text-center pb-20"
      />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            JleeWalls
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Co-Founder of D3G3N
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        “The Voice of D3G3N”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/nat3d.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>

 <div className='sectionmargin'></div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Freequency
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Co-Founder of D3G3N
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            “The Developer of D3G3N”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/free.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>

    <div className='sectionmargin'></div>

<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
>
  <motion.div
    variants={fadeIn('right', 'tween', 0.2, 1)}
    className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
  >
    <div className="feedback-gradient" />
    <div>
      <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
      Strudel
      </h4>
      <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
      Unreal Dev & VR
      </p>
    </div>

    <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
      “Unreal Engine Programmer with VR Skills.”
    </p>
  </motion.div>

  <motion.div
    variants={fadeIn('left', 'tween', 0.2, 1)}
    className="relative flex-1 flex justify-center items-center"
  >
    <img
      src="/strudel.png"
      alt="planet-09"
      className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
    />

    <motion.div
      variants={zoomIn(0.4, 1)}
      className="lg:block hidden absolute -left-[10%] top-[3%]"
    >
      <img
        src="/stamp.png"
        alt="stamp"
        className="w-[155px] h-[155px] object-contain"
      />
    </motion.div>
  </motion.div>
</motion.div>

<div className='sectionmargin'></div>

<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
>
  <motion.div
    variants={fadeIn('right', 'tween', 0.2, 1)}
    className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
  >
    <div className="feedback-gradient" />
    <div>
      <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
        Natilia.3D
      </h4>
      <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
        3D Modeling 
      </p>
    </div>

    <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
      “3D and Hard Surface Modeling.”
    </p>
  </motion.div>

  <motion.div
    variants={fadeIn('left', 'tween', 0.2, 1)}
    className="relative flex-1 flex justify-center items-center"
  >
    <img
      src="/jlee.png"
      alt="planet-09"
      className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
    />

    <motion.div
      variants={zoomIn(0.4, 1)}
      className="lg:block hidden absolute -left-[10%] top-[3%]"
    >
      <img
        src="/stamp.png"
        alt="stamp"
        className="w-[155px] h-[155px] object-contain"
      />
    </motion.div>
  </motion.div>
</motion.div>
  </section>
);

export default Feedback;
