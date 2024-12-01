"use client";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

export default function Monkey() {
  const gltf = useGLTF("/monkey.glb");

  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <color attach="background" args={["#eee540"]} />
      <Environment preset="studio" />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls />
      <ContactShadows />

      <primitive object={gltf.scene} position={[0, 0, 0]} />
    </Canvas>
  );
}

useGLTF.preload("/monkey.glb");
