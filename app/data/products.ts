// app/data/products.ts (o dentro de tu page.tsx)
export const PRODUCT_DETAILS = {
  security: {
    id: "sec_01",
    name: "Kit Vigilancia Pro",
    brand: "Tapo C210 + Sensores",
    fullDescription:
      "Un sistema integral que no solo graba, sino que entiende lo que ve. Gracias a su procesador de IA local, distingue entre el movimiento de una mascota y la presencia de un extraño en tu patio.",
    specs: [
      "Resolución 2K con visión nocturna",
      "Detección humana y de llanto de bebé",
      "Almacenamiento local (Privacidad absoluta)",
      "Sirena disuasoria integrada",
    ],
    whySantaFe:
      "Ideal para las casas de techos altos o galerías abiertas típicas de nuestra zona.",
    price: 65000,
  },
  climate: {
    id: "clim_01",
    name: "Control Neural Clima",
    brand: "Broadlink RM4 + Sensores",
    fullDescription:
      "La solución definitiva para las boletas de la EPE. Este kit permite que tu aire acondicionado se gestione solo basándose en la temperatura real de la habitación, no en un timer tonto.",
    specs: [
      "Control infrarrojo universal 360°",
      "Sensor de temperatura y humedad externa",
      "Compatible con cualquier Split",
      "Programación basada en geolocalización",
    ],
    whySantaFe:
      "Fundamental para combatir los 40°C del litoral sin fundirse con la factura de luz.",
    price: 32000,
  },
  lighting: {
    id: "light_01",
    name: "Escenas Dinámicas",
    brand: "Wiz Color + Govee",
    fullDescription:
      "Lámparas Wi‑Fi y tiras LED para crear climas de cine, estudio o simulación de presencia cuando no estás.",
    specs: [
      "16 Millones de Colores",
      "Modo Vacaciones",
      "Sincronización con Música",
      "Control por Voz",
    ],
    whySantaFe:
      "Perfecto para ambientar quinchos y galerías, y ahorrar energía con escenas inteligentes.",
    price: 22000,
  },
};
