import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import * as EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
const { EsLinter, linterPlugin } = EsLint
import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}', './styles/**/*.{scss,sass}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/', 'styles/'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.tsx'),
      name: 'date-time-picker',
      formats: ['es', 'umd'],
      fileName: (format) => `date-time-picker.${format}.js`,
    },
    assetsDir: "src/assets",
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}))