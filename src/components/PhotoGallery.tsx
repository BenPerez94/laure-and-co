"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

const photos = [
  "/galerie/photo1.jpg",
  "/galerie/photo2.jpg",
  "/galerie/photo3.jpg",
  "/galerie/photo4.jpg",
  "/galerie/photo5.jpg",
  "/galerie/photo6.jpg",
  "/galerie/photo7.jpg",
  "/galerie/photo8.jpg",
  "/galerie/photo9.jpg",
  "/galerie/photo10.jpg",
  "/galerie/photo11.jpg",
  "/galerie/photo12.jpg",
  // Ajoute tes chemins d'images ici
];

export default function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  // Navigation avec les flèches du clavier
  useEffect(() => {
    if (selected === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setSelected((prev) =>
          prev !== null ? (prev + 1) % photos.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setSelected((prev) =>
          prev !== null ? (prev - 1 + photos.length) % photos.length : null
        );
      }
      if (e.key === "Escape") {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  const goPrev = useCallback(() => {
    setSelected((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
    );
  }, []);
  const goNext = useCallback(() => {
    setSelected((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  }, []);

  return (
    <div>
      {/* Mosaïque */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {photos.map((src, i) => (
          <button
            key={i}
            className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square focus:outline-none"
            onClick={() => setSelected(i)}
            aria-label={`Voir la photo ${i + 1} en grand`}
            tabIndex={0}
          >
            <Image
              src={src}
              alt={`Photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative flex items-center w-full max-w-3xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Flèche gauche */}
            <button
              className="absolute px-2 py-1 text-4xl text-white transition -translate-y-1/2 rounded-full cursor-pointer left-2 top-1/2 bg-black/40 hover:bg-black/70"
              onClick={goPrev}
              aria-label="Photo précédente"
              tabIndex={0}
            >
              &#8592;
            </button>
            {/* Image */}
            <Image
              src={photos[selected]}
              alt={`Photo agrandie ${selected + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
            {/* Flèche droite */}
            <button
              className="absolute px-2 py-1 text-4xl text-white transition -translate-y-1/2 rounded-full cursor-pointer right-2 top-1/2 bg-black/40 hover:bg-black/70"
              onClick={goNext}
              aria-label="Photo suivante"
              tabIndex={0}
            >
              &#8594;
            </button>
            {/* Fermer */}
            <button
              className="absolute text-3xl text-white cursor-pointer top-2 right-2"
              onClick={() => setSelected(null)}
              aria-label="Fermer"
              tabIndex={0}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
