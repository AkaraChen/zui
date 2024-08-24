import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

const dev = defineConfig({
    plugins: [react()],
})

const prod = defineConfig({
    plugins: [
        react(),
        dts({
            exclude: ['**/*.stories.tsx'],
        }),
    ],
    build: {
        lib: {
            entry: './src/index.ts',
            formats: ['es'],
        },
        minify: false,
        rollupOptions: {
            external: [
                ...Object.keys(pkg.dependencies || {}),
                new RegExp('react'),
            ],
        },
    },
})

export default process.env.NODE_ENV === 'production' ? prod : dev
