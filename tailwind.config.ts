import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'ghibli-header': ['Comfortaa', 'sans-serif'],
				'ghibli-body': ['Nunito', 'sans-serif'],
				'ghibli-accent': ['Kalam', 'cursive'],
			},
			colors: {
				// Ghibli Magic Colors
				'sky-blue': {
					DEFAULT: 'hsl(var(--sky-blue))',
					light: 'hsl(var(--sky-blue-light))',
					dark: 'hsl(var(--sky-blue-dark))',
				},
				'forest-green': {
					DEFAULT: 'hsl(var(--forest-green))',
					light: 'hsl(var(--forest-green-light))',
				},
				'sunset-orange': {
					DEFAULT: 'hsl(var(--sunset-orange))',
					light: 'hsl(var(--sunset-orange-light))',
				},
				'cloud-white': 'hsl(var(--cloud-white))',
				'magic-purple': {
					DEFAULT: 'hsl(var(--magic-purple))',
					light: 'hsl(var(--magic-purple-light))',
				},
				'earth-brown': {
					DEFAULT: 'hsl(var(--earth-brown))',
					light: 'hsl(var(--earth-brown-light))',
				},
				
				// Semantic tokens
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// Ghibli Magic Animations
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'gentle-bounce': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'sparkle': {
					'0%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
					'50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
					'100%': { opacity: '0', transform: 'scale(0) rotate(360deg)' }
				},
				'cloud-drift': {
					'0%': { transform: 'translateX(-100px)' },
					'100%': { transform: 'translateX(100vw)' }
				},
				'magic-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--magic-purple) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--magic-purple) / 0.6)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'cloud-drift': 'cloud-drift 20s linear infinite',
				'magic-glow': 'magic-glow 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
