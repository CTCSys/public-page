const plugin = require('tailwindcss/plugin')

module.exports = {
	purge: ['./index.html'],
	corePlugins: {
		fontWeight: false,
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.font-hairline': {
					'font-variation-settings': '\'wght\' 100',
				},
				'.font-thin': {
					'font-variation-settings': '\'wght\' 200',
				},
				'.font-light': {
					'font-variation-settings': '\'wght\' 300',
				},
				'.font-normal': {
					'font-variation-settings': '\'wght\' 400',
				},
				'.font-medium': {
					'font-variation-settings': '\'wght\' 500',
				},
				'.font-semibold': {
					'font-variation-settings': '\'wght\' 600',
				},
				'.font-bold': {
					'font-variation-settings': '\'wght\' 700',
				},
				'.font-extrabold': {
					'font-variation-settings': '\'wght\' 800',
				},
				'.font-black': {
					'font-variation-settings': '\'wght\' 900',
				},
			})
		})
	],
}