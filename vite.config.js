import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Sz-porto/",
  css:{
    modules:{
      localsConvention:"camelCase"
    }
  }
 
})



