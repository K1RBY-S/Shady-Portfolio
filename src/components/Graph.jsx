import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

function Node({ position, color, size = 0.15, index }) {
    const ref = useRef()
    
    useFrame((state) => {
        if (ref.current) {
            ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.15
            ref.current.rotation.x = state.clock.elapsedTime * 0.2 + index
            ref.current.rotation.y = state.clock.elapsedTime * 0.3 + index
            const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.1
            ref.current.scale.setScalar(scale)
        }
    })
    
    return (
        <Sphere 
            ref={ref} 
            position={position} 
            args={[size, 32, 32]}
        >
            <meshStandardMaterial 
                color={color} 
                emissive={color} 
                emissiveIntensity={0.4}
                metalness={0.8}
                roughness={0.2}
            />
        </Sphere>
    )
}

function Connection({ start, end, color }) {
    const ref = useRef()
    
    useFrame((state) => {
        if (ref.current && ref.current.material) {
            ref.current.material.opacity = 0.2 + Math.sin(state.clock.elapsedTime) * 0.1
        }
    })
    
    const points = useMemo(() => [
        new THREE.Vector3(...start),
        new THREE.Vector3(...end)
    ], [start, end])
    
    return (
        <line ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={points.length}
                    array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial 
                color={color} 
                transparent 
                opacity={0.25}
            />
        </line>
    )
}

function Graph3D() {
    const colors = [
        "#36454F",
        "#36454F",
        "#36454F",
        "#36454F",
        "#36454F",
        "#36454F",
        "#36454F",
        "#36454F",
    ]
    
    const nodes = useMemo(() => {
        const nodeData = []
        
        for (let i = 0; i < 25; i++) {
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            const radius = 2.5 + Math.random() * 1.5
            
            nodeData.push({
                id: i,
                position: [
                    radius * Math.sin(phi) * Math.cos(theta),
                    radius * Math.sin(phi) * Math.sin(theta),
                    radius * Math.cos(phi)
                ],
                color: colors[Math.floor(Math.random() * colors.length)],
                size: 0.12 + Math.random() * 0.1
            })
        }
        return nodeData
    }, [])
    
    const connections = useMemo(() => {
        const conns = []
        nodes.forEach((node, i) => {
            nodes.forEach((otherNode, j) => {
                if (i < j) {
                    const distance = Math.sqrt(
                        Math.pow(node.position[0] - otherNode.position[0], 2) +
                        Math.pow(node.position[1] - otherNode.position[1], 2) +
                        Math.pow(node.position[2] - otherNode.position[2], 2)
                    )
                    if (distance < 2.2) {
                        conns.push({
                            start: node.position,
                            end: otherNode.position,
                            color: node.color
                        })
                    }
                }
            })
        })
        return conns
    }, [nodes])
    
    return (
        <group>
            {connections.map((conn, i) => (
                <Connection key={`conn-${i}`} start={conn.start} end={conn.end} color={conn.color} />
            ))}
            {nodes.map((node) => (
                <Node key={node.id} position={node.position} color={node.color} size={node.size} index={node.id} />
            ))}
        </group>
    )
}

function RotatingGroup() {
    const ref = useRef()
    
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.1
        }
    })
    
    return (
        <group ref={ref}>
            <Graph3D />
        </group>
    )
}

export default function Graph() {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            pointerEvents: "none"
        }}>
            <Canvas 
                camera={{ position: [0, 0, 10], fov: 60 }}
                style={{ width: "100%", height: "100%" }}
            >
                <color attach="background" args={["#723D46"]} />
                <fog attach="fog" args={["#723D46", 8, 25]} />
                
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
                <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff00ff" />
                <pointLight position={[0, 10, -10]} intensity={0.6} color="#7b2cbf" />
                
                <RotatingGroup />
            </Canvas>
        </div>
    )
}