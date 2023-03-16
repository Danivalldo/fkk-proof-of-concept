import { Center, OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import useShopifyConnect from './hooks/useShopifyConnect'

function App() {
  const {param, boxColor} = useShopifyConnect();
  return (
    <div className="App">
      <h1>Proof of concept React - Shopify connection</h1>
      <pre>
        {JSON.stringify(param)}
      </pre>
      <h2>3D Model</h2>
      <div 
        style={{height: 400, border: 'solid 1px #000', maxWidth: 500, margin: '0 auto', backgroundColor: '#242424', cursor: 'grab'}}
      >
        <Canvas
          camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
          }}
        >
          <OrbitControls autoRotate={true} />
          <directionalLight position={[1, 2, 3]} intensity={1.5} />
          <ambientLight intensity={0.5} />
           <Center>
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color={boxColor} />
            </mesh>
          </Center>
        </Canvas>
      </div>
    </div>
  )
}

export default App
