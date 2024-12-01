"use client";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Monkey } from "./components/Models/Monkey";

export default function Home() {
  return (
    <div className="flex h-screen">
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
        <Monkey position={[0, 0.1, 0]} />
        <ContactShadows />
      </Canvas>
    </div>
  );
}
