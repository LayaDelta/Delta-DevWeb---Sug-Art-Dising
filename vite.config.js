import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [reactCompilerPreset],
        compact: true,
        comments: false,
        babelrc: false,
        configFile: false
      },
      fastRefresh: true,
      jsxRuntime: 'automatic'
    })
  ],
  base: '/Delta-DevWeb---Sug-Art-Dising/',
  
  css: {
    devSourcemap: false
  },
  
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    cssCodeSplit: true,
    assetsInlineLimit: 2048,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor'
            return 'vendor'
          }
        },
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'i18next'],
    rolldownOptions: {
      treeshake: true
    }
  },
  
  server: {
    hmr: {
      overlay: false
    },
    open: false,
    cors: true
  }
})