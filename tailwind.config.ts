import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom, #7D89FF, #AB40FF)',
        'gradient-overlay':
          'linear-gradient(90deg, rgba(107, 120, 255, 0.99), #8609E9 48.55%, rgba(134, 9, 233, 0))'
      },
      colors: {
        second: '#5463FF',
        'dark-gray': '#969696',
        active: '#5463FF',
        dark: '#393E46',
        'gray-light': '#F4F4F4',
        'dark-md': '#646464'
      },
      width: {
        'btn-md': '180px',
        'card-product': '265px',
        'card-md': '486px',
        'tb-sm': '6%',
        'tb-md': '16%',
        'tb-xl': '40%',
        'cart-md': '378px',
        'slide-img': '400px',
        'slide-sm': '360px',
        'card-sm': '588px'
      },
      maxWidth: {
        'block-text': '424px',
        'card-sm': '588px'
      },
      height: {
        'card-sm': '268px',
        'card-img': '248px',
        'card-product': '366px',
        'card-md': '407px',
        'card-lg': '588px',
        table: '700px',
        'cart-md': '441px',
        'slide-img': '522px',
        'slide-sm': '230px',
        'slide-img-md': '428px',
        line: '2px',
        'img-sm': '180px'
      },
      maxHeight: {
        hero: '428px'
      },
      fontSize: {
        heading: '40px'
      },
      container: {
        screens: {
          mobile: '600px',
          tablet: '900px',
          desktop: '1440px'
        },
        center: true,
        padding: '16px'
      },
      boxShadow: {
        header: '0px 10px 20px 0px #0000001A',
        card: '0px 20px 20px 0px #0000001A'
      },
      borderWidth: {
        md: '78px'
      },
      spacing: {
        avatar: '67px',
        'product-icon': '118px'
      },
      borderSpacing: {
        'tb-none': '0',
        'tb-md': '30px'
      },
      borderRadius: {
        slide: '70px'
      }
    }
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.scrollbar::-webkit-scrollbar': {
          width: '4px',
          height: '4px'
        },
        '.scrollbar::-webkit-scrollbar-track': {
          borderRadius: '3px'
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#4d4d4d',
          borderRadius: '3px'
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]
};
export default config;
