import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Canvas } from '@react-three/fiber'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <App />
    </Canvas>
  </StrictMode>
)
