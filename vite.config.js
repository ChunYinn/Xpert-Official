// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        customers: resolve(__dirname, 'customers.html'),
        about: resolve(__dirname, 'about.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        story: resolve(__dirname, 'story.html'),
        blog: resolve(__dirname, 'blog.html'),
        article: resolve(__dirname, 'blog_single.html'),
        error: resolve(__dirname, '404.html'),
        servererror: resolve(__dirname, '500.html')
      }
    }
  }
})