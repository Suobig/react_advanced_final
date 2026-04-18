import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import babel from 'babel-plugin-react-compiler'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [
		react(),
		svgr(),
		tsConfigPaths(),
		babel({ presets: [reactCompilerPreset()] }),
	],
	resolve: {
		tsconfigPaths: true,
	},
})
