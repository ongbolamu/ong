'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <Image 
                  src="/images/logo Bolamu.png" 
                  alt="Logo ONG BOLAMU" 
                  width={40} 
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span style={{ color: '#6ad4fe' }}>ONG</span>{' '}
                  <span style={{ color: '#ff6219' }}>BOLAMU</span>
                </h3>
                <p className="text-gray-400 text-sm">Entraide • Développement • Réussite</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Organisation Non Gouvernementale basée à Brazzaville, dédiée au développement durable 
              et à l'amélioration des conditions de vie des populations congolaises.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff6219] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6ad4fe] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Découvrir */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Découvrir</h4>
            <ul className="space-y-2">
              <li><Link href="/apropos" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/programmes" className="text-gray-400 hover:text-white transition-colors">Nos programmes</Link></li>
                              {/* <li><Link href="/actions" className="text-gray-400 hover:text-white transition-colors">Nos actions</Link></li> */}
              <li><Link href="/impact" className="text-gray-400 hover:text-white transition-colors">Notre impact</Link></li>
              <li><Link href="/equipe" className="text-gray-400 hover:text-white transition-colors">Notre équipe</Link></li>
              <li><Link href="/transparence" className="text-gray-400 hover:text-white transition-colors">Transparence</Link></li>
            </ul>
          </div>

          {/* S'engager */}
          <div>
            <h4 className="text-lg font-semibold mb-4">S'engager</h4>
            <ul className="space-y-2">
              <li><Link href="/adhesion" className="text-gray-400 hover:text-white transition-colors">Devenir membre</Link></li>
                              {/* <li><Link href="/benevolat" className="text-gray-400 hover:text-white transition-colors">Bénévolat</Link></li> */}
              <li><Link href="/don" className="text-gray-400 hover:text-white transition-colors">Faire un don</Link></li>
                              {/* <li><Link href="/partenaires" className="text-gray-400 hover:text-white transition-colors">Partenariats</Link></li> */}
            </ul>
          </div>
          
          {/* Ressources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li><Link href="/#actualites" className="text-gray-400 hover:text-white transition-colors">Actualités</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/apropos#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Contact et coordonnées */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-[#ff6219] mt-1 flex-shrink-0" />
              <div className="text-gray-400">
                <p className="font-medium text-white">Siège social</p>
                <p className="text-sm">25 rue Niari Talangaï</p>
                <p className="text-sm">Brazzaville, Congo</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#6ad4fe]" />
              <div className="text-gray-400">
                <p className="font-medium text-white">Téléphone</p>
                <p className="text-sm">+242 06 123 45 67</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#ff6219]" />
              <div className="text-gray-400">
                <p className="font-medium text-white">Email</p>
                <p className="text-sm">contact@ongbolamu.org</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright et mentions légales */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 ONG BOLAMU. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">
                Confidentialité
              </Link>
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <span>Fait avec</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>à Brazzaville</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 