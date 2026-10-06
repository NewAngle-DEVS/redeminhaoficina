import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export interface MotorEngine {
  setProgress: (value: number) => void;
  dispose: () => void;
}

const smooth = (value: number, a: number, b: number) => THREE.MathUtils.smoothstep(value, a, b);

// Original, illustrative inline-four assembly. Each mechanical layer has its own transform.
function buildMotor() {
  const root = new THREE.Group();
  const block = new THREE.Group();
  const head = new THREE.Group();
  const cover = new THREE.Group();
  const pistons = new THREE.Group();
  const crank = new THREE.Group();
  const sump = new THREE.Group();
  const intake = new THREE.Group();
  root.add(block, head, cover, pistons, crank, sump, intake);
  const silver = new THREE.MeshStandardMaterial({ color: 0xb6bdc5, metalness: .92, roughness: .28 });
  const machined = new THREE.MeshStandardMaterial({ color: 0xe0e4e7, metalness: .95, roughness: .2 });
  const graphite = new THREE.MeshStandardMaterial({ color: 0x333b49, metalness: .8, roughness: .33 });
  const black = new THREE.MeshStandardMaterial({ color: 0x161e28, metalness: .35, roughness: .5 });
  const gold = new THREE.MeshPhysicalMaterial({ color: 0xfa9603, metalness: .78, roughness: .26, clearcoat: .35 });
  const copper = new THREE.MeshStandardMaterial({ color: 0xa37745, metalness: .85, roughness: .3 });
  const box = (w: number, h: number, d: number, radius = .04) => new RoundedBoxGeometry(w, h, d, 2, radius);
  function mesh(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0) {
    const object = new THREE.Mesh(geometry, material);
    object.position.set(x, y, z);
    parent.add(object);
    return object;
  }
  function cylinder(parent: THREE.Object3D, radius: number, length: number, material: THREE.Material, x: number, y: number, z: number, axis = 'y', segments = 32) {
    const object = mesh(parent, new THREE.CylinderGeometry(radius, radius, length, segments), material, x, y, z);
    if (axis === 'x') object.rotation.z = Math.PI / 2;
    if (axis === 'z') object.rotation.x = Math.PI / 2;
    return object;
  }
  function ring(parent: THREE.Object3D, radius: number, tube: number, material: THREE.Material, x: number, y: number, z: number, axis = 'y') {
    const object = mesh(parent, new THREE.TorusGeometry(radius, tube, 8, 40), material, x, y, z);
    if (axis === 'y') object.rotation.x = Math.PI / 2;
    if (axis === 'x') object.rotation.y = Math.PI / 2;
    return object;
  }
  function bolt(parent: THREE.Object3D, x: number, y: number, z: number) {
    cylinder(parent, .068, .055, machined, x, y, z, 'y', 6);
    cylinder(parent, .025, .058, black, x, y + .003, z, 'y', 6);
  }
  const centres = [-1.38, -.46, .46, 1.38];
  // Cast block with real open cylinder bores, rather than painted circles.
  const outline = new THREE.Shape();
  outline.moveTo(-2.03, -.72); outline.lineTo(2.03, -.72); outline.lineTo(2.03, .72); outline.lineTo(-2.03, .72); outline.closePath();
  centres.forEach(x => { const hole = new THREE.Path(); hole.absarc(x, 0, .37, 0, Math.PI * 2, true); outline.holes.push(hole); });
  const cast = new THREE.ExtrudeGeometry(outline, { depth: .95, bevelEnabled: true, bevelSize: .035, bevelThickness: .025, bevelSegments: 2, curveSegments: 32, steps: 1 });
  cast.rotateX(-Math.PI / 2);
  mesh(block, cast, graphite, 0, -.45);
  const deck = new THREE.ExtrudeGeometry(outline, { depth: .065, bevelEnabled: false, curveSegments: 32 });
  deck.rotateX(-Math.PI / 2);
  mesh(block, deck, machined, 0, .51);
  centres.forEach(x => {
    ring(block, .372, .022, machined, x, .57, 0);
    for (const z of [-.75, .75]) {
      mesh(block, box(.12, .87, .09), silver, x - .39, .04, z);
      cylinder(block, .13, .07, copper, x, -.08, z, 'z');
      bolt(block, x, .585, z * .83);
    }
  });
  for (let i = 0; i < 3; i++) mesh(block, box(4.1, .065, 1.55), graphite, 0, -.38 + i * .12);

  mesh(head, box(4.16, .5, 1.55), silver, 0, .88);
  for (let i = 0; i < 4; i++) {
    mesh(head, box(4.2, .045, 1.62), machined, 0, .67 + i * .12);
  }
  centres.forEach(x => {
    for (const z of [-.8, .8]) {
      cylinder(head, .21, .09, graphite, x, .87, z, 'z');
      ring(head, .215, .035, machined, x, .87, z * 1.06, 'z');
    }
    for (const z of [-.34, .34]) {
      cylinder(head, .07, .32, machined, x, 1.2, z);
      ring(head, .11, .027, copper, x, 1.23, z);
    }
  });
  for (const z of [-.34, .34]) {
    cylinder(head, .09, 3.9, graphite, 0, 1.37, z, 'x');
    centres.forEach(x => cylinder(head, .16, .14, machined, x, 1.37, z, 'x'));
  }

  mesh(cover, box(4.25, .095, 1.68), black, 0, 1.43);
  mesh(cover, box(4.12, .43, 1.54, .16), gold, 0, 1.65);
  for (const z of [-.5, -.3, 0, .3, .5]) mesh(cover, box(3.35, .025, .042, .01), graphite, 0, 1.869, z);
  cylinder(cover, .21, .095, black, 1.6, 1.92, .14);
  mesh(cover, box(.24, .035, .055), gold, 1.6, 1.98, .14);
  for (const x of [-1.88, -.65, .65, 1.88]) for (const z of [-.68, .68]) bolt(cover, x, 1.86, z);
  const labelCanvas = document.createElement('canvas');
  labelCanvas.width = 1024; labelCanvas.height = 128;
  const context = labelCanvas.getContext('2d');
  if (context) {
    context.fillStyle = '#202937'; context.fillRect(0, 0, 1024, 128);
    context.fillStyle = '#efc16c'; context.font = '600 50px Arial'; context.textAlign = 'center';
    context.fillText('MINHA OFICINA', 512, 83);
  }
  const label = new THREE.CanvasTexture(labelCanvas); label.colorSpace = THREE.SRGBColorSpace;
  mesh(cover, new THREE.PlaneGeometry(2.28, .28), new THREE.MeshStandardMaterial({ map: label, metalness: .35, roughness: .4 }), -.12, 1.65, .777);

  centres.forEach((x, i) => {
    const y = i % 3 === 0 ? .28 : .07;
    cylinder(pistons, .345, .42, machined, x, y, 0);
    cylinder(pistons, .285, .012, silver, x, y + .216, 0);
    for (let j = 0; j < 3; j++) ring(pistons, .346, .014, graphite, x, y + .14 - j * .055, 0);
    cylinder(pistons, .085, .77, machined, x, y - .12, 0, 'z');
    mesh(pistons, box(.12, .7, .15), copper, x, y - .57, 0);
    mesh(pistons, box(.045, .55, .17), silver, x, y - .57, 0);
    ring(pistons, .17, .068, machined, x, y - .98, 0, 'z');
    cylinder(pistons, .108, .18, graphite, x, y - .98, 0, 'z');
  });
  cylinder(crank, .15, 4.65, machined, 0, -.94, 0, 'x');
  centres.forEach((x, i) => {
    const offset = i % 3 === 0 ? .2 : -.2;
    for (const side of [-1, 1]) {
      cylinder(crank, .34, .115, graphite, x + side * .22, -.94 + offset / 2, 0, 'x');
      cylinder(crank, .17, .13, machined, x + side * .32, -.94, 0, 'x');
    }
    cylinder(crank, .13, .42, copper, x, -.94 + offset, 0, 'x');
  });
  cylinder(crank, .65, .17, graphite, -2.4, -.94, 0, 'x', 64);
  ring(crank, .58, .06, machined, -2.5, -.94, 0, 'x');
  for (let i = 0; i < 36; i++) {
    const angle = i / 36 * Math.PI * 2;
    const tooth = mesh(crank, box(.19, .085, .09, .008), silver, -2.4, -.94 + Math.cos(angle) * .66, Math.sin(angle) * .66);
    tooth.rotation.x = angle;
  }
  cylinder(block, .4, .24, graphite, 2.23, -.23, 0, 'x');
  ring(block, .33, .025, gold, 2.365, -.23, 0, 'x');
  cylinder(block, .12, .27, machined, 2.25, -.23, 0, 'x', 6);
  mesh(sump, box(4.18, .1, 1.63), silver, 0, -1.27);
  mesh(sump, box(3.78, .43, 1.39, .14), graphite, 0, -1.51);
  for (let i = 0; i < 11; i++) mesh(sump, box(.065, .35, 1.35), silver, -1.6 + i * .32, -1.52);
  for (const x of [-1.85, -1, 0, 1, 1.85]) for (const z of [-.7, .7]) bolt(sump, x, -1.2, z);
  centres.forEach(x => {
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(x, .86, .78), new THREE.Vector3(x, .82, 1.15), new THREE.Vector3(x, .2, 1.42), new THREE.Vector3(x, -.35, 1.17)]);
    mesh(intake, new THREE.TubeGeometry(curve, 20, .14, 10, false), silver);
    ring(intake, .16, .028, graphite, x, .86, .89, 'z');
  });
  cylinder(intake, .22, 3.25, graphite, 0, -.35, 1.17, 'x');
  return { root, block, head, cover, pistons, crank, sump, intake };
}

export function createMotorEngine(host: HTMLDivElement, onFailure: () => void): MotorEngine {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.5 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 60);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const environment = pmrem.fromScene(room, .04);
  scene.environment = environment.texture;
  room.dispose(); pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xf4f7ff, 0x8a765b, 2.3));
  const key = new THREE.DirectionalLight(0xffedcc, 4); key.position.set(3, 7, 5); scene.add(key);
  const rim = new THREE.DirectionalLight(0xc5d9ff, 3); rim.position.set(-4, 3, -3); scene.add(rim);
  const motor = buildMotor(); scene.add(motor.root);
  const guideMaterial = new THREE.LineDashedMaterial({ color: 0xb99859, transparent: true, opacity: 0, dashSize: .06, gapSize: .09 });
  const guides = new THREE.Group(); motor.root.add(guides);
  for (const x of [-1.85, 1.85]) for (const z of [-.65, .65]) {
    const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x, -3, z), new THREE.Vector3(x, 4.1, z)]);
    const line = new THREE.Line(geometry, guideMaterial); line.computeLineDistances(); guides.add(line);
  }
  let progress = 0, target = 0, frame = 0, visible = true, disposed = false;
  let pointerX = 0, pointerY = 0, tiltX = 0, tiltY = 0;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    renderer.setSize(width, height, false); camera.aspect = width / Math.max(1, height); camera.updateProjectionMatrix();
    render();
  };
  function render() {
    const open = smooth(progress, .08, .85);
    motor.cover.position.y = smooth(progress, .08, .43) * 2.35;
    motor.head.position.y = smooth(progress, .2, .57) * 1.48;
    motor.pistons.position.y = smooth(progress, .32, .73) * .91;
    motor.crank.position.y = -smooth(progress, .4, .8) * .8;
    motor.sump.position.y = -smooth(progress, .48, .87) * 1.45;
    motor.intake.position.z = smooth(progress, .24, .7) * .9;
    motor.intake.position.y = smooth(progress, .24, .7) * .15;
    motor.root.rotation.set(.035 + tiltY, -.32 + open * .45 + tiltX, -.045 + open * .045);
    motor.root.position.y = -.1 - open * .3;
    guideMaterial.opacity = open * .27;
    const distance = (camera.aspect < .8 ? 14.8 : 12.5) + open * 4.8;
    camera.position.set(distance * .61, distance * .43, distance * .77);
    camera.lookAt(0, .45, 0);
    renderer.render(scene, camera);
  }
  const tick = () => {
    frame = 0;
    if (disposed || !visible || document.hidden) return;
    progress += (target - progress) * .095;
    tiltX += (pointerX - tiltX) * .035; tiltY += (pointerY - tiltY) * .035;
    render();
    if (Math.abs(target - progress) > .0001 || Math.abs(pointerX - tiltX) > .0001 || Math.abs(pointerY - tiltY) > .0001) frame = requestAnimationFrame(tick);
  };
  const wake = () => { if (!frame && !disposed && visible && !document.hidden) frame = requestAnimationFrame(tick); };
  const pointer = (event: PointerEvent) => {
    if (reduced || event.pointerType !== 'mouse') return;
    pointerX = (event.clientX / window.innerWidth - .5) * .1;
    pointerY = (event.clientY / window.innerHeight - .5) * .055; wake();
  };
  const observer = new ResizeObserver(resize); observer.observe(host);
  const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) wake(); }); intersection.observe(host);
  const lost = (event: Event) => { event.preventDefault(); onFailure(); };
  renderer.domElement.addEventListener('webglcontextlost', lost);
  window.addEventListener('pointermove', pointer, { passive: true });
  document.addEventListener('visibilitychange', wake);
  resize();
  return {
    setProgress(value) { target = reduced ? 0 : THREE.MathUtils.clamp(value, 0, 1); wake(); },
    dispose() {
      disposed = true; cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect();
      window.removeEventListener('pointermove', pointer); document.removeEventListener('visibilitychange', wake);
      renderer.domElement.removeEventListener('webglcontextlost', lost);
      const geometries = new Set<THREE.BufferGeometry>(); const materials = new Set<THREE.Material>(); const textures = new Set<THREE.Texture>();
      scene.traverse(object => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line) {
          geometries.add(object.geometry);
          (Array.isArray(object.material) ? object.material : [object.material]).forEach((material: THREE.Material) => materials.add(material));
        }
      });
      materials.forEach(material => { Object.values(material).forEach(value => { if (value instanceof THREE.Texture) textures.add(value); }); material.dispose(); });
      geometries.forEach(geometry => geometry.dispose()); textures.forEach(texture => texture.dispose());
      environment.dispose(); renderer.dispose(); renderer.domElement.remove();
    },
  };
}

