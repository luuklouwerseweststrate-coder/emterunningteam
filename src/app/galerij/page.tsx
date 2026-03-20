'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface GalleryPhoto {
  src: string;
  alt: string;
  category: string;
}

const photos: GalleryPhoto[] = [
  {
    src: '/images/team-group.jpeg',
    alt: 'Het volledige EMTE Running Team bij de finish',
    category: 'Team',
  },
  {
    src: '/images/teamlid_luuk.png',
    alt: 'Luuk op de dijk bij Westkapelle',
    category: 'Training',
  },
  {
    src: '/images/teamlid_matthijs.png',
    alt: 'Matthijs na een PR op de 10 km',
    category: 'Wedstrijden',
  },
  {
    src: '/images/teamlid_bart.png',
    alt: 'Bart tijdens de Kustmarathon',
    category: 'Wedstrijden',
  },
  {
    src: '/images/teamlid_juriaan.png',
    alt: 'Juriaan organiseert weer een borrel',
    category: 'Borrels',
  },
  {
    src: '/images/teamlid_imara.png',
    alt: 'Imara met een glas rode wijn na de finish',
    category: 'Borrels',
  },
  {
    src: '/images/teamlid_evi.png',
    alt: 'Evi op de trails in de duinen',
    category: 'Training',
  },
  {
    src: '/images/toren_westkapelle.png',
    alt: 'De vuurtoren van Westkapelle, ons thuisbasis',
    category: 'Westkapelle',
  },
];

const categories = ['Alles', 'Team', 'Training', 'Wedstrijden', 'Borrels', 'Westkapelle'];

export default function GalerijPage() {
  const [activeCategory, setActiveCategory] = useState('Alles');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos =
    activeCategory === 'Alles'
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-emte-green pb-20 pt-44 sm:pt-52">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emte-yellow" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-emte-yellow" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Fotogalerij
            </h1>
            <div className="mt-4 h-1 w-20 rounded-full bg-emte-yellow" />
            <p className="mt-6 max-w-2xl text-lg text-emte-gray-200">
              Van de startlijn tot het terras. Beelden van onze trainingen,
              wedstrijden en borrels. Want als het niet op de foto staat, is het
              niet gebeurd.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-emte-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Onze Momenten"
              subtitle="Filter op categorie of bekijk alles"
              centered
            />
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection delay={0.1}>
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-emte-green text-white shadow-sm'
                      : 'bg-white text-emte-gray-600 hover:text-emte-green shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Photo Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                      <p className="text-sm font-medium text-white">{photo.alt}</p>
                      <span className="mt-1 inline-block rounded-full bg-emte-yellow/80 px-2 py-0.5 text-xs font-semibold text-emte-green-dark">
                        {photo.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={1200}
                height={800}
                className="h-auto max-h-[85vh] w-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-lg font-medium text-white">{selectedPhoto.alt}</p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
