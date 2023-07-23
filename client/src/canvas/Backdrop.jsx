import {easing} from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useRef } from 'react'

function Backdrop() {
  const shadows = useRef();
  return (
    <AccumulativeShadows ref={shadows} temporal frames={60} rotation={[Math.PI / 2,0,0] } scale={10} alphaTest={0.85} position={[0,0,-0.14]}>
      <RandomizedLight amount={6} radius={10} intensity={0.65} ambient={0.55} position={[-5,5,-10]}/>
    </AccumulativeShadows>
  )
}

export default Backdrop
