import React, { useContext } from 'react'
import { motion } from "motion/react";
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const GenerateButton = () => {
  const{user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()
const onClickHandler =()=>{
  if(user){
    navigate('/result')
  }else{
    setShowLogin(true)
  }
}

  
  return (
    <motion.div className='pb-16 text-center'
    initial={{ opacity: 0.2, y: 80 }}
    transition={{ duration: 0.8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    >
        <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 '>
        See <span className="text-purple-700">The Magic</span>, Try Now</h1>
        
        <motion.button onClick={onClickHandler} className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105'
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
         transition={{default:{ duration:0.5}, opacity: {delay:0.8, duration:1}}}
        >Generate images
            <img src={assets.star_group} alt="" className='h-6'/>
        </motion.button>
    </motion.div>
  )
}

export default GenerateButton
