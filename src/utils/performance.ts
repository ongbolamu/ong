// Utilitaires de performance pour ONG BOLAMU
export const performanceUtils = {
  // Détection de la capacité GPU
  detectGPUTier: (): 'low' | 'medium' | 'high' => {
    if (typeof window === 'undefined') return 'medium';
    
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    
    if (!gl) return 'low';
    
    try {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (!debugInfo) return 'medium';
      
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase();
      
      if (renderer.includes('intel') || renderer.includes('software')) return 'low';
      if (renderer.includes('nvidia') || renderer.includes('amd')) return 'high';
      
      return 'medium';
    } catch (error) {
      return 'medium';
    }
  },

  // Détection mobile
  isMobile: (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768;
  },

  // Optimisation animations selon la performance
  getAnimationConfig: () => {
    const gpuTier = performanceUtils.detectGPUTier();
    const mobile = performanceUtils.isMobile();
    
    if (mobile || gpuTier === 'low') {
      return {
        enableComplexAnimations: false,
        particleCount: 10,
        animationDuration: 1.5,
        enableBlur: false,
      };
    }
    
    if (gpuTier === 'medium') {
      return {
        enableComplexAnimations: true,
        particleCount: 25,
        animationDuration: 2,
        enableBlur: true,
      };
    }
    
    return {
      enableComplexAnimations: true,
      particleCount: 50,
      animationDuration: 3,
      enableBlur: true,
    };
  },

  // Préchargement intelligent des images
  preloadImage: (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  },

  // Debounce pour les events
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle pour les animations
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Intersection Observer optimisé
  createIntersectionObserver: (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) => {
    if (typeof window === 'undefined') return null;
    
    return new IntersectionObserver(callback, {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
      ...options,
    });
  },
};

// Hook de performance React
export const usePerformance = () => {
  const config = performanceUtils.getAnimationConfig();
  
  return {
    ...config,
    reduceMotion: typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  };
}; 