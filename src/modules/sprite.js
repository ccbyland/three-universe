/**
 * 粒子
 */

import * as THREE from "three";
import { getBufferGeometry } from "../common/geometry";
import { getMaterial } from "../common/material";
import { globalConfig } from "../globalConfig";

export function add(SCENE) {
  const vertices = [];
  const colors = [];
  const spriteCount = globalConfig.spriteCount;

  for (let i = 0; i < spriteCount; i++) {
    vertices.push(
      THREE.MathUtils.randFloatSpread(6000),
      THREE.MathUtils.randFloatSpread(6000),
      THREE.MathUtils.randFloatSpread(6000)
    );

    const color = new THREE.Color(Math.random(), Math.random(), Math.random());
    colors.push(color.r, color.g, color.b);
  }

  const geometry = getBufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  const material = getMaterial("Points", {
    size: 10,
    vertexColors: true,
  });

  const points = new THREE.Points(geometry, material);
  points._name = "粒子";
  SCENE.add(points);
}
