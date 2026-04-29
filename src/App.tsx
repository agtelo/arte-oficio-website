/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";
import { 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight, 
  Hammer, 
  Axe, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-carbono text-blanco-puro font-sans selection:bg-ocre-solar selection:text-carbono">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-crema-madera border-b-4 border-ocre-solar h-20 md:h-24 flex items-center px-[5%] lg:px-[10%] justify-between">
        <div className="display-flex flex-column"> 
        <div className="text-2xl md:text-4xl font-display font-black tracking-tighter text-carbono">
          ARTE&OFICIO
        </div>
        <div className=" antialiased uppercase text-center font-display tracking-[0.3em] font-thin text-[10px] md:text-sm text-carbono">
          Carpinteria
        </div>

        </div>
        
        <nav className="hidden lg:flex items-center gap-10">
          {["COLECCIONES", "PROCESO", "CONTACTO"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-label-sm text-carbono hover:opacity-60 transition-opacity"
            >
              {item}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-ocre-solar text-carbono font-bold text-xs tracking-widest px-6 py-3 hover:bg-blanco-puro transition-colors"
          >
            ARMA TU PRESUPUESTO
          </a>
        </nav>

        <button 
          className="lg:hidden text-carbono p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 z-40 bg-crema-madera flex flex-col items-center justify-center gap-8 lg:hidden"
        >
          {["COLECCIONES", "PROCESO", "CONTACTO"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-display font-black text-carbono"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

      <main className="pt-20 md:pt-24 md:cursor-crosshair">
        
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center px-[5%] lg:px-[12%] py-20 relative overflow-hidden">
          <motion.div {...fadeIn}>
            <h1 className="text-headline-display mb-10">
              100% INDUSTRIA<br />
              NACIONAL
            </h1>
            <p className="text-body-lg text-ocre-solar uppercase font-thin leading-relaxed tracking-[0.2em] max-w-2xl">
              ORGULLOSAMENTE <span className="font-bold">HECHO A MANO</span> EN SAN MARTÍN DE LOS ANDES
            </p>
          </motion.div>
        </section>

        {/* Brand Story Section */}
        <section id="identidad" className="bg-ocre-solar min-h-[70vh] flex flex-col justify-center px-[5%] lg:px-[12%] py-20">
          <motion.div {...fadeIn} className="max-w-4xl">
            <h2 className="text-headline-display text-blanco-puro mb-10">
              UN TALLER,<br />
              UN OFICIO Y<br />
              UN PROPÓSITO
            </h2>
            <p className="text-body-lg font-bold text-blanco-puro uppercase max-w-2xl">
              ¿CONOCÉS <span className="font-bold">ARTE & OFICIO</span> CARPINTERIA?
            </p>
          </motion.div>
        </section>

        {/* Collections Section */}
        <section id="colecciones" className="py-32 px-[5%] lg:px-[12%] text-center">
          <motion.h2 {...fadeIn} className="text-headline-display mb-20 text-blanco-puro">
            COLECCIONES
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-center">
            <CollectionCard 
              image="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop"
              title="MOBILIARIO" 
              tag="PIEZAS ROBUSTAS"
              delay={0}
            />
            <CollectionCard 
              image="https://images.unsplash.com/photo-1622398476015-5186bc9808ff?q=80&w=800&auto=format&fit=crop"
              title="OBJETOS" 
              tag="DETALLE MANUAL"
              delay={0.2}
            />
            <CollectionCard 
              image="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop"
              title="PROYECTOS" 
              tag="A MEDIDA"
              delay={0.4}
            />
          </div>
        </section>

        {/* Process Section */}
        <section id="proceso" className="bg-ocre-solar py-32 px-[5%] lg:px-[12%] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-32">
            <motion.div {...fadeIn}>
              <p className="text-label-sm text-carbono mb-6 opacity-60">EL MÉTODO</p>
              <h2 className="text-headline-display text-blanco-puro mb-12">
                TIEMPO Y<br />PACIENCIA
              </h2>
              
              <div className="space-y-12 text-carbono">
                <div>
                  <h4 className="font-display font-black text-2xl md:text-3xl uppercase mb-4">01. SELECCIÓN</h4>
                  <p className="text-body-md">
                    CADA TABLA TIENE SU HISTORIA. ESCOGEMOS MADERAS NOBLES, RESPETANDO SUS VETAS Y NUDOS, ENTENDIENDO QUE EL MATERIAL DICTA LA FORMA FINAL.
                  </p>
                </div>
                <div>
                  <h4 className="font-display font-black text-2xl md:text-3xl uppercase mb-4">02. ENSAMBLE</h4>
                  <p className="text-body-md">
                    UNIONES TRADICIONALES. SIN ATAJOS. ENCASTRADOS QUE SOPORTAN EL PESO DE LAS DÉCADAS. LA ESTRUCTURA ES LA ESTÉTICA.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute right-0 top-0 h-full w-1/2 pointer-events-none hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1493011311096-7c05b822f360?q=80&w=1200&auto=format&fit=crop" 
                alt="Proceso" 
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover mix-blend-multiply filter grayscale"
              />
            </motion.div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section id="proposito" className="bg-crema-madera py-32 px-[5%] lg:px-[12%]">
          <motion.div {...fadeIn} className="max-w-4xl">
            <h2 className="text-headline-display text-carbono mb-10">
              DISEÑAMOS,<br />
              CREAMOS Y<br />
              ENTREGAMOS
            </h2>
            <p className="text-body-lg font-bold text-carbono uppercase max-w-2xl font-light">
              CON ESA FUERZA INVISIBLE QUE CONVIERTE LA MADERA EN ALGO QUE EMOCIONA.
            </p>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="bg-crema-madera py-32 px-[5%] lg:px-[12%] border-t-2 border-carbono">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <motion.div {...fadeIn}>
              <h2 className="text-headline-display text-carbono mb-8">HABLEMOS</h2>
              <p className="text-body-lg font-bold text-carbono uppercase font-light mb-12 max-w-md">
                PARA ENCARGOS A MEDIDA O VISITAS AL TALLER.
              </p>
              
              <ul className="space-y-6 text-label-sm font-bold text-carbono">
                <li className="flex items-center gap-4">
                  <MapPin className="text-ocre-solar" size={20} />
                  <span>TALLER: AV. INDUSTRIA 1920, BA</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="text-ocre-solar" size={20} />
                  <span>INFO@ARTEYOFICIO.COM</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="text-ocre-solar" size={20} />
                  <span>+54 11 4555 0000</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="bg-carbono p-8 md:p-12"
            >
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-label-sm text-ocre-solar">NOMBRE</label>
                    <input 
                      type="text" 
                      placeholder="TU NOMBRE"
                      className="bg-transparent border-2 border-crema-madera/20 p-4 font-sans text-blanco-puro focus:border-ocre-solar outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-label-sm text-ocre-solar">CORREO</label>
                    <input 
                      type="email" 
                      placeholder="TU CORREO"
                      className="bg-transparent border-2 border-crema-madera/20 p-4 font-sans text-blanco-puro focus:border-ocre-solar outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-label-sm text-ocre-solar">MENSAJE</label>
                    <textarea 
                      rows={4}
                      placeholder="TU PROYECTO"
                      className="bg-transparent border-2 border-crema-madera/20 p-4 font-sans text-blanco-puro focus:border-ocre-solar outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
                <button className="bg-ocre-solar text-carbono font-display font-black text-2xl py-5 hover:bg-blanco-puro transition-colors uppercase">
                  ENVIAR
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-crema-madera border-t-8 border-carbono py-12 px-[5%] lg:px-[12%] flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-label-sm font-bold text-carbono">
          ©2024 ARTE & OFICIO - INDUSTRIA NACIONAL
        </div>
        <div className="flex gap-8 text-label-sm font-bold text-carbono opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">MANIFIESTO</a>
          <a href="#" className="hover:opacity-100 transition-opacity">TÉRMINOS</a>
          <a href="#" className="hover:opacity-100 transition-opacity">PRIVACIDAD</a>
        </div>
      </footer>
    </div>
  );
}

function CollectionCard({ image, title, tag, className = "", delay = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`group cursor-pointer flex flex-col items-center text-center ${className}`}
    >
      <div className="w-full aspect-[4/5] overflow-hidden mb-6 relative">
        <img 
          src={image} 
          alt={title} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter grayscale mix-blend-luminosity group-hover:scale-105 group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-carbono/20 group-hover:bg-transparent transition-colors" />
      </div>
      <h3 className="text-headline-lg text-blanco-puro group-hover:text-ocre-solar transition-colors">
        {title}
      </h3>
      <p className="text-label-sm text-ocre-solar mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {tag}
      </p>
    </motion.div>
  );
}
