// import { createRoot } from 'react-dom/client'
// import React, { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'

// function Box(props) {
//     // This reference gives us direct access to the THREE.Mesh object
//     const ref = useRef()
//     // Hold state for hovered and clicked events
//     const [hovered, hover] = useState(false)
//     const [clicked, click] = useState(false)
//     // Subscribe this component to the render-loop, rotate the mesh every frame
//     useFrame((state, delta) => (ref.current.rotation.x += delta))
//     // Return the view, these are regular Threejs elements expressed in JSX
//     return (
//         <mesh
//             {...props}
//             ref={ref}
//             scale={clicked ? .55 : .35}
//             onClick={(event) => click(!clicked)}
//             onPointerOver={(event) => hover(true)}
//             onPointerOut={(event) => hover(false)}>
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={hovered ? 'hotpink' : 'indigo'} />
//         </mesh>
//     )
// }

// // createRoot(document.getElementById('root')).render(
// export default function Background() {
//     return (
//     <Canvas style={{ 
//         position:'absolute',
//         top:0,
//         left:0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: '',
    
//      }}>
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//         <Box position={[-1.2, 0, 0]} />
//         <Box position={[1.2, 0, 0]} />
//         <Box position={[0, -.5, 0]} />
//         <Box position={[0, -2, 0]} />
//     </Canvas>)
// }


// // )