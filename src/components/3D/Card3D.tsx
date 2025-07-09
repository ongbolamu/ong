'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
}

export default function Card3D({ children, className = "", delay = 0, glowColor = "rgba(255, 98, 25, 0.1)" }: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 10;
    const y = (e.clientY - rect.top - rect.height / 2) / 10;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      whileHover={{ 
        y: -15,
        transition: { duration: 0.3 }
      }}
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered 
          ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        boxShadow: isHovered 
          ? `0 25px 50px -12px ${glowColor}, 0 0 30px ${glowColor}` 
          : '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out'
      }}
    >
      <div className="relative">
        {children}
        
        {/* Effet de brillance au hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-2xl"
          animate={isHovered ? { x: ['-100%', '100%'] } : {}}
          transition={{ duration: 0.8 }}
          style={{ transform: 'skewX(-20deg)' }}
        />
        
        {/* Halo lumineux */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={isHovered ? { 
            boxShadow: `inset 0 0 20px ${glowColor}`,
            opacity: 1 
          } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
} 