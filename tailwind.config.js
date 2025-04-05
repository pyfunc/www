// Tailwind Configuration for PyFunc Website
module.exports = {
    darkMode: 'class',
    content: [
        './index.html',
        './js/*.js'
    ],
    theme: {
        extend: {
            colors: {
                'pyfunc-green': {
                    50: '#e8f5e9',
                    100: '#c8e6c9',
                    200: '#a5d6a7',
                    300: '#81c784',
                    400: '#66bb6a',
                    500: '#4caf50',
                    600: '#43a047',
                    700: '#388e3c',
                    800: '#2e7d32',
                    900: '#1b5e20'
                },
                'dark': {
                    50: '#1a202c',
                    100: '#171923',
                    200: '#2d3748',
                    300: '#4a5568',
                    400: '#718096',
                    500: '#4a5568',
                    600: '#2d3748',
                    700: '#1a202c',
                    800: '#171923',
                    900: '#0d1117'
                }
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 10s linear infinite'
            },
            keyframes: {
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                }
            }
        }
    },
    plugins: []
};