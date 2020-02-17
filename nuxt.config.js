module.exports = {
	server: {
		port: 3001,
		host: "0.0.0.0"
	},

	head: {
		title: "Ana Konovalova | Digital Product Designer",

		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				hid: "description",
				name: "description",
				content: "Ana Konovalova | Digital Product Designer"
			}
		],

		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
	},
	css: ["@/assets/css/grid/grid.scss", "@/assets/css/global.css"],

	loading: { color: "#162c83" },

	router: {
		middleware: [
			'menu',
		],
	},

	modules: ["@nuxtjs/style-resources"],

	build: {
		splitChunks: {
			pages: true,
			layouts: false,
			commons: true
		},

		extractCSS: true,
		optimizeCSS: true,
		cssSourceMap: false,

		styleResources: {
			scss: "./assets/css/main.scss"
		},

		postcss: {
			plugins: {
				"postcss-preset-env": {},
				"postcss-import": {},
				"postcss-url": {},
				"postcss-nested": {},
				"postcss-sorting": {},
				"postcss-merge-rules": {},
				cssnano: {
					preset: ["advanced", { zindex: false }]
				}
			},
			order: "cssnanoLast"
		},

		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: "pre",
					test: /\.(js|vue)$/,
					loader: "eslint-loader",
					exclude: /(node_modules)/
				});
			}
		}
	}
};
