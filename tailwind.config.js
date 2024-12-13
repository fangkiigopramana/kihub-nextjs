/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	container: {
    		center: true,
    		padding: '15px'
    	},
    	screens: {
    		sm: '640px',
    		md: '768px',
    		lg: '960px',
    		xl: '1200px'
    	},
    	fontFamily: {
    		primary: 'var(--font-jetBrainsMono)'
    	},
    	extend: {
    		colors: {
    			primary: ' #1c1c22',
    			accent: {
    				DEFAULT: '#3b82f6',
    				hover: '#93c5fd'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			},
    			'background-position-spin': {
    				'0%': {
    					backgroundPosition: 'top center'
    				},
    				'100%': {
    					backgroundPosition: 'bottom center'
    				}
    			}
    		},
    		animation: {
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
    			'background-position-spin': 'background-position-spin 3000ms infinite alternate'
    		}
    	}
    },
	plugins: [
		require("tailwindcss-animate")
	],
};
