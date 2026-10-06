import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true, 
        powerPreference: 'high-performance' 
      });
    } catch {
      return;
    }

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 560;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.1, 5.8);

    // --- Dynamic Studio Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    // Primary violet key light
    const violetKeyLight = new THREE.PointLight(0x7c66dc, 5.5, 20);
    violetKeyLight.position.set(2.8, 3.8, 3.2);
    scene.add(violetKeyLight);

    // Secondary cyan/blue fill light
    const cyanFillLight = new THREE.PointLight(0x38bdf8, 3.6, 18);
    cyanFillLight.position.set(-3.2, -0.8, 2.8);
    scene.add(cyanFillLight);

    // Soft warm top rim light for glass edge highlights
    const topRimLight = new THREE.DirectionalLight(0xfff8f0, 2.8);
    topRimLight.position.set(0.5, 6, 2.5);
    scene.add(topRimLight);

    // Under-platform violet glow
    const underGlow = new THREE.PointLight(0x9333ea, 2.8, 8);
    underGlow.position.set(0, -1.8, 0.5);
    scene.add(underGlow);

    // Master interactive group
    const ecosystemGroup = new THREE.Group();
    scene.add(ecosystemGroup);

    // --- Realistic Physical Materials ---
    // Pure clear refractive glass
    const clearGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.94,
      opacity: 1,
      transparent: true,
      roughness: 0.06,
      ior: 1.52,
      thickness: 1.9,
      specularIntensity: 1.4,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
    });

    // Violet tinted acrylic glass
    const violetGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x826bf8,
      transmission: 0.86,
      opacity: 0.95,
      transparent: true,
      roughness: 0.1,
      ior: 1.48,
      thickness: 1.6,
      specularIntensity: 1.2,
      clearcoat: 0.8,
    });

    // Lavender frosted acrylic
    const lavenderAcrylicMat = new THREE.MeshPhysicalMaterial({
      color: 0xc4b5fd,
      transmission: 0.82,
      opacity: 0.92,
      transparent: true,
      roughness: 0.15,
      ior: 1.46,
      thickness: 1.3,
      specularIntensity: 1.0,
    });

    // Deep indigo crystal
    const deepIndigoMat = new THREE.MeshPhysicalMaterial({
      color: 0x3730a3,
      transmission: 0.74,
      opacity: 0.95,
      transparent: true,
      roughness: 0.12,
      ior: 1.5,
      thickness: 1.5,
    });

    // Liquid mercury chrome material
    const mercuryChromeMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.98,
      roughness: 0.03,
    });

    // Glowing neural / security emissive core
    const glowingCoreMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
    });

    const glowingCyanMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
    });

    // --- 1. Central Acrylic/Glass Pedestal Platform ---
    const platformGroup = new THREE.Group();
    ecosystemGroup.add(platformGroup);

    // Main bevelled frosted glass disc
    const platformGeo = new THREE.CylinderGeometry(2.0, 2.05, 0.12, 64);
    const platformMesh = new THREE.Mesh(platformGeo, clearGlassMat);
    platformMesh.position.set(0, -1.2, 0);
    platformGroup.add(platformMesh);

    // Chamfered polished chrome inner tray ring
    const innerTrayGeo = new THREE.CylinderGeometry(1.7, 1.7, 0.02, 64);
    const innerTray = new THREE.Mesh(innerTrayGeo, new THREE.MeshStandardMaterial({
      color: 0xedeef7,
      metalness: 0.85,
      roughness: 0.2,
    }));
    innerTray.position.set(0, -1.13, 0);
    platformGroup.add(innerTray);

    // Glowing edge halo ring
    const edgeRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.02, 0.025, 16, 64),
      new THREE.MeshStandardMaterial({ color: 0xc4b5fd, metalness: 0.9, roughness: 0.1 })
    );
    edgeRing.rotation.x = Math.PI / 2;
    edgeRing.position.set(0, -1.14, 0);
    platformGroup.add(edgeRing);

    // Contact shadow beneath platform (canvas radial gradient texture)
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const ctx = shadowCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
      grad.addColorStop(0, 'rgba(40, 25, 80, 0.42)');
      grad.addColorStop(0.5, 'rgba(40, 25, 80, 0.18)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(4.6, 4.6),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.85, depthWrite: false })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.set(0, -1.35, 0);
    platformGroup.add(shadowPlane);

    // --- 2. Floating Technology Ecosystem Elements ---

    // A. Central AI / Neural Crystal Object (Midground Center)
    const neuralCrystalGeo = new THREE.IcosahedronGeometry(0.48, 0);
    const neuralCrystal = new THREE.Mesh(neuralCrystalGeo, violetGlassMat);
    neuralCrystal.position.set(0.1, 0.45, 0.2);
    ecosystemGroup.add(neuralCrystal);

    // Internal pulsating core inside AI crystal
    const neuralInnerCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 0), glowingCoreMat);
    neuralInnerCore.position.set(0.1, 0.45, 0.2);
    ecosystemGroup.add(neuralInnerCore);

    // B. Subtle Security Shield Geometry (Foreground Left)
    // Create a 3D faceted security shield shape
    const shieldShape = new THREE.Shape();
    shieldShape.moveTo(0, 0.48);
    shieldShape.lineTo(0.38, 0.35);
    shieldShape.lineTo(0.34, -0.15);
    shieldShape.lineTo(0, -0.48);
    shieldShape.lineTo(-0.34, -0.15);
    shieldShape.lineTo(-0.38, 0.35);
    shieldShape.closePath();

    const shieldExtrudeSettings = {
      depth: 0.12,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.04,
      bevelThickness: 0.04
    };
    const shieldGeo = new THREE.ExtrudeGeometry(shieldShape, shieldExtrudeSettings);
    shieldGeo.center();
    const shieldMesh = new THREE.Mesh(shieldGeo, deepIndigoMat);
    shieldMesh.position.set(-1.15, -0.2, 0.65);
    shieldMesh.rotation.set(0.15, 0.35, -0.1);
    ecosystemGroup.add(shieldMesh);

    // Small glowing emblem in shield
    const shieldEmblem = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), glowingCyanMat);
    shieldEmblem.position.set(-1.15, -0.2, 0.76);
    ecosystemGroup.add(shieldEmblem);

    // C. Translucent Rounded Cubes (Varying Depths & Scales)
    // Cube 1: Large clear glass cube (Foreground Right)
    const cube1Geo = new THREE.BoxGeometry(0.72, 0.72, 0.72);
    const cube1 = new THREE.Mesh(cube1Geo, clearGlassMat);
    cube1.position.set(1.05, -0.3, 0.55);
    cube1.rotation.set(0.25, -0.38, 0.12);
    ecosystemGroup.add(cube1);

    // Small internal cube core inside cube 1
    const cube1Core = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.26, 0.26), glowingCoreMat);
    cube1Core.position.set(1.05, -0.3, 0.55);
    cube1Core.rotation.set(0.25, -0.38, 0.12);
    ecosystemGroup.add(cube1Core);

    // Cube 2: Floating lavender acrylic cube (Background Top-Left)
    const cube2Geo = new THREE.BoxGeometry(0.55, 0.55, 0.55);
    const cube2 = new THREE.Mesh(cube2Geo, lavenderAcrylicMat);
    cube2.position.set(-1.25, 0.95, -0.4);
    cube2.rotation.set(-0.3, 0.45, 0.2);
    ecosystemGroup.add(cube2);

    // Cube 3: Micro acrylic satellite cube (Background Right)
    const cube3Geo = new THREE.BoxGeometry(0.38, 0.38, 0.38);
    const cube3 = new THREE.Mesh(cube3Geo, violetGlassMat);
    cube3.position.set(1.35, 0.85, -0.3);
    cube3.rotation.set(0.35, -0.4, 0.15);
    ecosystemGroup.add(cube3);

    // D. Glass Cylinders (Tall Data Conduits with Liquid Cores)
    // Cylinder 1: Center-left tall clear cylinder
    const cyl1Geo = new THREE.CylinderGeometry(0.28, 0.28, 1.9, 32, 1, true);
    const cyl1 = new THREE.Mesh(cyl1Geo, clearGlassMat);
    cyl1.position.set(-0.45, -0.15, -0.1);
    ecosystemGroup.add(cyl1);

    // Internal violet fluid core
    const cyl1CoreGeo = new THREE.CylinderGeometry(0.18, 0.18, 1.35, 32);
    const cyl1Core = new THREE.Mesh(cyl1CoreGeo, violetGlassMat);
    cyl1Core.position.set(-0.45, -0.35, -0.1);
    ecosystemGroup.add(cyl1Core);

    // Cylinder 2: Center-right medium cylinder
    const cyl2Geo = new THREE.CylinderGeometry(0.25, 0.25, 1.25, 32, 1, true);
    const cyl2 = new THREE.Mesh(cyl2Geo, lavenderAcrylicMat);
    cyl2.position.set(0.48, -0.45, 0.15);
    ecosystemGroup.add(cyl2);

    // E. Abstract Data Blocks (Layered Acrylic Slabs)
    const slabGeo = new THREE.BoxGeometry(0.85, 0.14, 0.55);
    const dataSlab1 = new THREE.Mesh(slabGeo, clearGlassMat);
    dataSlab1.position.set(-0.35, 1.2, 0.1);
    dataSlab1.rotation.set(0.2, 0.45, -0.15);
    ecosystemGroup.add(dataSlab1);

    const dataSlab2 = new THREE.Mesh(slabGeo, violetGlassMat);
    dataSlab2.position.set(0.4, 1.3, -0.2);
    dataSlab2.rotation.set(-0.25, -0.35, 0.2);
    ecosystemGroup.add(dataSlab2);

    // F. Small Floating Spheres
    // Mercury chrome sphere (large focal orb)
    const chromeSphere = new THREE.Mesh(new THREE.SphereGeometry(0.26, 36, 36), mercuryChromeMat);
    chromeSphere.position.set(-0.55, -0.7, 0.85);
    ecosystemGroup.add(chromeSphere);

    // Crystal bubble sphere
    const crystalBubble1 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 32, 32), clearGlassMat);
    crystalBubble1.position.set(1.4, -0.55, 0.65);
    ecosystemGroup.add(crystalBubble1);

    // Small satellite sphere
    const crystalBubble2 = new THREE.Mesh(new THREE.SphereGeometry(0.12, 32, 32), lavenderAcrylicMat);
    crystalBubble2.position.set(0.9, 0.35, 0.85);
    ecosystemGroup.add(crystalBubble2);

    // G. Thin Glowing Connection Lines (Connecting the Technology Ecosystem)
    const pointsA = [
      new THREE.Vector3(0.1, 0.45, 0.2), // Neural Crystal
      new THREE.Vector3(-0.45, 0.2, 0.1),
      new THREE.Vector3(-1.15, -0.2, 0.65) // Shield
    ];
    const curveA = new THREE.CatmullRomCurve3(pointsA);
    const lineGeoA = new THREE.TubeGeometry(curveA, 24, 0.015, 8, false);
    const lineMatA = new THREE.MeshBasicMaterial({ color: 0x9333ea, transparent: true, opacity: 0.65 });
    const connectionLineA = new THREE.Mesh(lineGeoA, lineMatA);
    ecosystemGroup.add(connectionLineA);

    const pointsB = [
      new THREE.Vector3(0.1, 0.45, 0.2), // Neural Crystal
      new THREE.Vector3(0.65, 0.0, 0.4),
      new THREE.Vector3(1.05, -0.3, 0.55) // Cube 1
    ];
    const curveB = new THREE.CatmullRomCurve3(pointsB);
    const lineGeoB = new THREE.TubeGeometry(curveB, 24, 0.014, 8, false);
    const lineMatB = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.55 });
    const connectionLineB = new THREE.Mesh(lineGeoB, lineMatB);
    ecosystemGroup.add(connectionLineB);

    // --- Interactive Mouse Parallax & Animation ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.4;
      targetY = -y * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth camera/ecosystem follow
      mouseX += (targetX - mouseX) * 0.045;
      mouseY += (targetY - mouseY) * 0.045;

      ecosystemGroup.rotation.y = mouseX + Math.sin(t * 0.28) * 0.1;
      ecosystemGroup.rotation.x = mouseY + Math.cos(t * 0.22) * 0.04;

      // Central Neural Crystal subtle rotation & breathing
      neuralCrystal.rotation.y = t * 0.35;
      neuralCrystal.rotation.x = Math.sin(t * 0.5) * 0.15;
      neuralCrystal.position.y = 0.45 + Math.sin(t * 1.2) * 0.06;
      neuralInnerCore.position.y = neuralCrystal.position.y;
      neuralInnerCore.rotation.y = -t * 0.5;

      // Shield floating subtle tilt
      shieldMesh.position.y = -0.2 + Math.sin(t * 1.1 + 1.2) * 0.05;
      shieldEmblem.position.y = shieldMesh.position.y;
      shieldMesh.rotation.y = 0.35 + Math.cos(t * 0.4) * 0.08;

      // Cubes organic float
      cube1.position.y = -0.3 + Math.cos(t * 1.3) * 0.05;
      cube1Core.position.y = cube1.position.y;
      cube1.rotation.y += 0.003;

      cube2.position.y = 0.95 + Math.sin(t * 1.05 + 0.5) * 0.07;
      cube2.rotation.y -= 0.003;
      cube2.rotation.z += 0.002;

      cube3.position.y = 0.85 + Math.cos(t * 1.15) * 0.06;

      // Slabs breathing float
      dataSlab1.position.y = 1.2 + Math.sin(t * 1.25) * 0.06;
      dataSlab1.rotation.y += 0.004;

      dataSlab2.position.y = 1.3 + Math.cos(t * 1.1) * 0.05;

      // Spheres float
      chromeSphere.position.y = -0.7 + Math.sin(t * 1.4) * 0.04;
      crystalBubble1.position.y = -0.55 + Math.cos(t * 1.35) * 0.05;
      crystalBubble2.position.y = 0.35 + Math.sin(t * 1.5) * 0.05;

      // Light pulsing
      violetKeyLight.intensity = 5.5 + Math.sin(t * 2.0) * 0.6;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] lg:h-[620px] xl:h-[680px] flex items-center justify-center pointer-events-none select-none">
      <div ref={mountRef} className="w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing" />
    </div>
  );
};
