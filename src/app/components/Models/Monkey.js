"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Monkey(props) {
  const { nodes, materials } = useGLTF("/monkey.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
      />
    </group>
  );
}

useGLTF.preload("/monkey.glb");
