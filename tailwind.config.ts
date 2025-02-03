import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			darkBlue: '#1e3a8a',
  			grayLine: 'rgb(219, 213, 209)',
  			orange: {
  				'500': '#ff8c38'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundColor: {
  			rgbaBackground: 'rgba(0, 0, 0, 0.4)'
  		},
  		fontFamily: {
  			raleway: [
  				'var(--font-raleway)'
  			]
  		},
  		screens: {
  			xs: '480px'
  		},
  		boxShadow: {
  			xs: '0px 1px 2px rgba(0, 0, 0, 0.05)'
  		},
  		keyframes: {
  			shimmer: {
  				'100%': {
  					transform: 'translateX(100%)'
  				}
  			},
  			bounceRotate: {
  				'0%': {
  					transform: 'translateY(-25%)',
  					rotate: '45deg',
  					animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
  				},
  				'50%': {
  					transform: 'none',
  					rotate: '0deg',
  					animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
  				},
  				'100%': {
  					transform: 'translate(100%, -25%)',
  					rotate: '-135deg',
  					animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("tailwindcss-animate")],
};
export default config;
