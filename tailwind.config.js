/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales AII
        'aii-primary': '#0064B0',     // Bleu principal AII
        'aii-secondary': '#0095D9',    // Bleu secondaire/hover
        'aii-dark': '#1a1a1a',         // Texte sombre
        
        // Nuances de gris AII  
        'aii-gray': {
          100: '#f8f9fa',  // Fond très clair
          200: '#e9ecef',  // Bordures claires
          300: '#dee2e6',  // Fond gris clair
          400: '#ced4da',  // Gris moyen
          500: '#6c757d',  // Texte gris
          600: '#495057',  // Texte gris foncé
          700: '#343a40',  // Fond sombre
          800: '#212529',  // Très sombre
          900: '#0f0f0f',  // Presque noir
        },
        
        // Couleurs d'accent AII
        'aii-red': '#dc3545',     // Pour alertes/erreurs
        'aii-green': '#28a745',   // Pour succès
        'aii-yellow': '#ffc107',  // Pour avertissements
        'aii-pink': '#e91e63',    // Pour accent
        
        // Alias pour compatibilité (gardons unesco pour l'éviter de tout casser)
        'unesco-primary': '#0064B0',
        'unesco-secondary': '#0095D9',
        'unesco-dark': '#1a1a1a',
        'unesco-gray': {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0f0f0f',
        },
        'unesco-red': '#dc3545',
        'unesco-green': '#28a745',
        'unesco-yellow': '#ffc107',
        'unesco-pink': '#e91e63',
        'unesco-blue': '#0064B0',
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
