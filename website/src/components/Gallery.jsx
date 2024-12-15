import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Importing images from the assets folder
import GalleryImage1 from '../assets/1.jpg';
import GalleryImage2 from '../assets/2.jpg';
import GalleryImage3 from '../assets/3.jpg';
import GalleryImage4 from '../assets/4.jpg';
import GalleryImage5 from '../assets/5.jpg';
import GalleryImage6 from '../assets/6.jpg';

const Gallery = () => {
  // State for the active image index
  const [currentImage, setCurrentImage] = useState(0);

  // Gallery images data
  const galleryImages = [
    { src: GalleryImage1,  },
    { src: GalleryImage2,  },
    { src: GalleryImage3, },
    { src: GalleryImage4,  },
    { src: GalleryImage5,  },
    { src: GalleryImage6,  },
  ];

  // Functions to handle swiping
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="py-12 px-8 ">
      <h2 className="text-center text-4xl text-white pb-8 my-20 text-center text-4xl font-bold text-gradient">Gallery</h2>

      {/* Card Swiping Section */}
      <div className="relative">
        <div className="flex justify-center items-center">
          {/* Left Swipe Button */}
          <motion.button
            className="absolute left-4 text-white text-2xl bg-opacity-60 bg-black p-2 rounded-full"
            onClick={prevImage}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            &#8592;
          </motion.button>

          {/* Card */}
          <motion.div
            className="w-80% h-80% overflow-hidden rounded-lg shadow-lg relative"
            key={currentImage}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">{galleryImages[currentImage].alt}</div>
          </motion.div>

          {/* Right Swipe Button */}
          <motion.button
            className="absolute right-4 text-white text-2xl bg-opacity-60 bg-black p-2 rounded-full"
            onClick={nextImage}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            &#8594;
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
