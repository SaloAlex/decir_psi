# Uso de Imágenes en los Componentes

## Estructura de carpetas
```
src/
  ├── assets/
  │   └── images/    <- Coloca todas tus imágenes aquí
  │       ├── hero.jpg
  │       ├── team/  <- Puedes crear subcarpetas para categorías
  │       │   └── person1.jpg
  │       └── ...
  └── components/
      ├── HeroSection.tsx
      └── ...
```

## Cómo importar imágenes en componentes React

### Método 1: Import directo (recomendado)
```tsx
// En tu componente
import heroImage from '../assets/images/hero.jpg';

const MyComponent = () => {
  return (
    <div>
      <img src={heroImage} alt="Descripción" />
    </div>
  );
};
```

### Método 2: URL relativa
Puedes usar la función `import.meta.url` para construir rutas en Vite:

```tsx
const imageUrl = new URL('../assets/images/hero.jpg', import.meta.url).href;

const MyComponent = () => {
  return (
    <div>
      <img src={imageUrl} alt="Descripción" />
    </div>
  );
};
```

## Ejemplo de uso en el componente Hero

```tsx
import { useEffect, useState } from 'react';
import heroImage from '../assets/images/hero.jpg';

const HeroSection = () => {
  // ...
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Resto del componente */}
    </section>
  );
};
```

## Optimización de imágenes

Para un mejor rendimiento, considera:

1. Usar formatos modernos como WebP
2. Comprimir las imágenes antes de importarlas
3. Utilizar imágenes de tamaño apropiado para cada contexto
4. Añadir lazy loading para imágenes bajo el fold

```tsx
<img src={image} alt="Descripción" loading="lazy" />
``` 