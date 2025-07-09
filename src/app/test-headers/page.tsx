'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { headerBackgrounds } from '@/utils/headerBackgrounds';
import { ChevronLeft, ChevronRight, Eye, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function TestHeaders() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  
  const headerEntries = Object.entries(headerBackgrounds);
  const currentEntry = headerEntries[currentIndex];
  const [currentPath, currentConfig] = currentEntry;

  const nextHeader = () => {
    setCurrentIndex((prev) => (prev + 1) % headerEntries.length);
  };

  const prevHeader = () => {
    setCurrentIndex((prev) => (prev - 1 + headerEntries.length) % headerEntries.length);
  };

  const handleImageError = (path: string) => {
    setImageError(prev => ({ ...prev, [path]: true }));
  };

  const isLocalImage = (url: string) => url.startsWith('/images/');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header de navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Test des Images de Fond</h1>
              <p className="text-gray-600">Visualisation des images configurées pour les en-têtes</p>
            </div>
            <Link 
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>

      {/* Contrôles de navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={prevHeader}
                className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Précédent</span>
              </button>
              
              <div className="text-center">
                <div className="text-sm text-gray-500">
                  {currentIndex + 1} / {headerEntries.length}
                </div>
                <div className="font-semibold text-gray-900">
                  {currentPath}
                </div>
              </div>
              
              <button
                onClick={nextHeader}
                className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span>Suivant</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Link
                href={currentPath}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Voir la page</span>
              </Link>
              
              <a
                href={currentConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Image originale</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Prévisualisation de l'image */}
      <div className="relative h-96 overflow-hidden">
        {/* Image de fond */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
          style={{
            backgroundImage: imageError[currentPath] ? 'none' : `url(${currentConfig.url})`,
            backgroundPosition: currentConfig.position,
            backgroundColor: imageError[currentPath] ? '#f3f4f6' : 'transparent'
          }}
        >
          {/* Image de test pour détecter les erreurs */}
          <img
            src={currentConfig.url}
            alt={currentConfig.alt}
            className="hidden"
            onError={() => handleImageError(currentPath)}
            onLoad={() => setImageError(prev => ({ ...prev, [currentPath]: false }))}
          />
        </div>
        
        {/* Overlay */}
        <div className={`absolute inset-0 ${currentConfig.overlay}`} />
        
        {/* Contenu de test */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              {currentPath === '/' ? 'Accueil' : currentPath.slice(1).replace(/-/g, ' ')}
            </h2>
            <p className="text-xl opacity-90 mb-6">
              {currentConfig.alt}
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-sm">
                {isLocalImage(currentConfig.url) ? '📁 Image locale' : '🌐 Image externe'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Indicateur d'erreur */}
        {imageError[currentPath] && (
          <div className="absolute inset-0 bg-red-100 flex items-center justify-center">
            <div className="text-center text-red-600">
              <div className="text-6xl mb-4">❌</div>
              <h3 className="text-xl font-bold mb-2">Image non trouvée</h3>
              <p className="text-sm">
                URL: {currentConfig.url}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Informations détaillées */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informations sur l'image */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations sur l'image</h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-500">Chemin de la page:</span>
                <p className="text-gray-900 font-mono text-sm">{currentPath}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">URL de l'image:</span>
                <p className="text-gray-900 font-mono text-sm break-all">{currentConfig.url}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Alt text:</span>
                <p className="text-gray-900 text-sm">{currentConfig.alt}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Position:</span>
                <p className="text-gray-900 text-sm">{currentConfig.position}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Type:</span>
                <p className="text-gray-900 text-sm">
                  {isLocalImage(currentConfig.url) ? 'Image locale' : 'Image externe (Unsplash)'}
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Statut:</span>
                <p className={`text-sm font-medium ${imageError[currentPath] ? 'text-red-600' : 'text-green-600'}`}>
                  {imageError[currentPath] ? 'Erreur de chargement' : 'Chargée avec succès'}
                </p>
              </div>
            </div>
          </div>
          
          {/* Overlay et style */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuration de l'overlay</h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-500">Classes CSS:</span>
                <p className="text-gray-900 font-mono text-sm break-all">{currentConfig.overlay}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Prévisualisation de l'overlay:</span>
                <div className={`w-full h-20 rounded-lg ${currentConfig.overlay} border`}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Liste de toutes les images */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Toutes les images configurées</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {headerEntries.map(([path, config], index) => (
              <button
                key={path}
                onClick={() => setCurrentIndex(index)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  index === currentIndex 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {path}
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  {isLocalImage(config.url) ? '📁 Locale' : '🌐 Externe'}
                </div>
                <div className={`w-full h-2 rounded ${config.overlay}`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
