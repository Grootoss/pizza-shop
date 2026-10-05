import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

function prefixPublicAssets(base: string): Plugin {
  const normalized = base.endsWith('/') ? base : `${base}/`

  return {
    name: 'prefix-public-assets',
    enforce: 'pre',
    transform(code, id) {
      if (normalized === '/' || id.includes('node_modules')) return null
      if (!/\.(tsx|ts|css)$/.test(id)) return null
      if (!/(['"`])\/(images|fonts)\//.test(code)) return null

      return {
        code: code.replace(/(?<=['"`])\/(images|fonts)\//g, `${normalized}$1/`),
        map: null,
      }
    },
  }
}

export default defineConfig(() => {
  const base = process.env.VITE_BASE ?? '/'

  return {
    base,
    plugins: [react(), prefixPublicAssets(base)],
    build: {
      assetsDir: 'assets',
    },
  }
})
