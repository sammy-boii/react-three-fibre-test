const App = () => {
  return (
    <>
      <directionalLight intensity={0.9} position={[0, 0, 1]} />
      <ambientLight intensity={0.4} />
      <group position={[0, 0.5, 0]}>
        <Cube color='orange' position={[1, 1, 0]} size={[1, 1, 1]} />
        <Cube color='blue' position={[-1, 1, 0]} size={[1, 1, 1]} />
        <Cube color='green' position={[1, -2, 0]} size={[1, 1, 1]} />
        <Cube color='red' position={[-1, -2, 0]} size={[1, 1, 1]} />
      </group>
    </>
  )
}

function Cube({
  position,
  size,
  color
}: {
  position: [number, number, number]
  size: [number, number, number]
  color: string
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
export default App
