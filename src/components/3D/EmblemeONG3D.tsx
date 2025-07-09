'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Star } from 'lucide-react';

export default function EmblemeONG3D() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative w-48 h-48 mx-auto mb-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Cercles concentriques animés */}
      <motion.div 
        className="absolute inset-0 rounded-full border-4 border-[#ff6219]/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute inset-4 rounded-full border-2 border-[#6ad4fe]/40"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute inset-8 rounded-full border border-[#ffd700]/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Emblème principal avec effet 3D */}
      <motion.div 
        className="absolute inset-12 rounded-full bg-[#ff6219] p-2 shadow-2xl"
        style={{
          boxShadow: isHovered 
            ? '0 30px 60px -12px rgba(255, 98, 25, 0.6), 0 0 50px rgba(106, 212, 254, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.3)' 
            : '0 20px 40px -5px rgba(0, 0, 0, 0.2), inset 0 2px 10px rgba(255, 255, 255, 0.2)'
        }}
        animate={{
          rotateY: isHovered ? [0, 360] : 0,
          rotateX: isHovered ? [0, 15, 0] : 0,
        }}
        transition={{ duration: isHovered ? 2 : 0.6 }}
      >
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
          {/* Effet de brillance rotatif */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transform: 'skewX(-20deg)' }}
          />
          
          <div className="relative w-20 h-20 z-10">
            {/* Figures humaines centrales avec animation 3D */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                rotateY: [0, 360],
                scale: isHovered ? [1, 1.2, 1] : 1
              }}
              transition={{ 
                rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.6 }
              }}
            >
              <div className="w-16 h-16 bg-[#ff6219] rounded-full flex items-center justify-center shadow-xl relative">
                {/* Icône centrale */}
                <Users className="w-8 h-8 text-white relative z-10" />
                
                {/* Effet de pulse */}
                <div
                  className="absolute inset-0 rounded-full bg-[#ff6219]"
                  style={{
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                  }}
                />
              </div>
            </motion.div>
            
            {/* Étoiles flottantes animées en 3D */}
            {[0, 72, 144, 216, 288].map((angle, index) => (
              <motion.div
                key={index}
                className="absolute w-5 h-5"
                style={{
                  top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                  left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.3, 1],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeInOut"
                }}
              >
                <Star className="w-full h-full text-[#ffd700] fill-current drop-shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Particules flottantes en 3D */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-[#ff6219] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Rayons lumineux */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute w-1 bg-[#ff6219]"
          style={{
            height: '60px',
            top: '20%',
            left: '50%',
            transformOrigin: 'bottom center',
            transform: `rotate(${i * 45}deg)`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
} 