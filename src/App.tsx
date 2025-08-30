import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import type { Mesh } from 'three'

const App = () => {
  return (
    <>
      <directionalLight intensity={0.9} position={[0, 0, 1]} />
      <ambientLight intensity={0.4} />

      {/* Basic Cube implementation */}

      <group position={[0, 0.5, 0]}>
        <Cube color='orange' position={[1, 1, 0]} size={[1, 1, 1]} />
        <Cube color='blue' position={[-1, 1, 0]} size={[1, 1, 1]} />
        <Cube color='green' position={[1, -2, 0]} size={[1, 1, 1]} />
        <Cube color='red' position={[-1, -2, 0]} size={[1, 1, 1]} />
      </group>

      {/* Basic rotating cube  */}

      <Cube animate position={[0, 0, 0]} size={[1, 1, 1]} color='cyan' />

      {/* Wireframe sphere */}

      <Sphere animate position={[0, 0, 0]} size={[1, 32, 32]} color='orange' />
    </>
  )
}

function Sphere({
  position,
  size,
  animate = false,
  color
}: {
  animate?: boolean
  position: [number, number, number]
  size: [number, number, number]
  color: string
}) {
  const ref = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (ref.current && animate) {
      ref.current.rotation.x += delta
      ref.current.rotation.y += delta
      ref.current.rotation.z += delta
      ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 2
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={size} />
      <meshStandardMaterial wireframe color={color} />
    </mesh>
  )
}

function Cube({
  position,
  size,
  animate = false,
  color
}: {
  animate?: boolean
  position: [number, number, number]
  size: [number, number, number]
  color: string
}) {
  const ref = useRef<Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)

  useFrame((state, delta) => {
    if (ref.current && animate) {
      ref.current.rotation.x += delta
      ref.current.rotation.y += delta
      ref.current.rotation.z += delta
      ref.current.position.x = Math.sin(state.clock.getElapsedTime()) * 2
      ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 2
      ref.current.position.z = Math.cos(state.clock.getElapsedTime()) * 2
    }
  })

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial wireframe={!isHovered} color={color} />
    </mesh>
  )
}
export default App
