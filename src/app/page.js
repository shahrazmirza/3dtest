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
import { Slippers } from "./components/Models/Slippers";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Canvas
        style={{
          width: "50%",
          height: "100%",
        }}
      >
        <color attach="background" args={["#eee540"]} />
        <Environment preset="studio" />
        <PerspectiveCamera makeDefault position={[2, 3.9, 4.1]} />
        <OrbitControls />
        <Monkey position={[0, 0.1, 0]} />
        <ContactShadows />
      </Canvas>
      {/* <Canvas
        style={{
          width: "50%",
          height: "100%",
        }}
      >
        <color attach="background" args={["#eee"]} />
        <Environment preset="studio" />
        <PerspectiveCamera makeDefault position={[2, 3.9, 4.1]} />
        <OrbitControls />
        <Slippers position={[0, 0.1, 0]} />
        <ContactShadows />
      </Canvas> */}
    </div>
  );
}
