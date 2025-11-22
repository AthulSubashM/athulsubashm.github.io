import * as THREE from "three";

export class IconSphere {
  constructor(container, icons) {
    this.container = container;
    this.icons = icons;
    this.scene = new THREE.Scene();
    const fov = window.innerWidth < 768 ? 45 : 30;
    this.camera = new THREE.PerspectiveCamera(
      fov,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.group = new THREE.Group();
    this.meshes = [];
    this.radius = 3;
    this.scrollFactor = 0;
    this.isHovered = false;

    this.init();
  }

  init() {
    // Setup Renderer
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);

    // Setup Camera
    this.camera.position.z = 15;

    // Setup Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    this.scene.add(ambientLight, pointLight);

    // Setup Group
    this.scene.add(this.group);

    // Create Meshes
    this.createIconMeshes();

    // Event Listeners
    window.addEventListener("resize", this.onResize.bind(this));
    window.addEventListener("scroll", this.onScroll.bind(this));
    this.container.addEventListener(
      "mouseenter",
      () => (this.isHovered = true)
    );
    this.container.addEventListener(
      "mouseleave",
      () => (this.isHovered = false)
    );

    // Start Loop
    this.animate();
  }

  async createIconMeshes() {
    const geometry = new THREE.PlaneGeometry(1, 1);
    const loader = new THREE.TextureLoader();

    // Calculate initial positions (Fibonacci Sphere)
    const count = this.icons.length;
    this.initialPositions = [];

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = this.radius * Math.cos(theta) * Math.sin(phi);
      const y = this.radius * Math.sin(theta) * Math.sin(phi);
      const z = this.radius * Math.cos(phi);
      this.initialPositions.push(new THREE.Vector3(x, y, z));

      // Load Texture
      try {
        const texture = await loader.loadAsync(this.icons[i].src);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.copy(this.initialPositions[i]);
        mesh.lookAt(this.camera.position);

        this.group.add(mesh);
        this.meshes.push({
          mesh,
          currentPos: this.initialPositions[i].clone(),
        });
      } catch (error) {
        console.warn(`Failed to load icon: ${this.icons[i].src}`, error);
      }
    }
  }

  onResize() {
    if (!this.container) return;
    this.camera.aspect =
      this.container.clientWidth / this.container.clientHeight;
    this.camera.fov = window.innerWidth < 768 ? 40 : 30;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
  }

  onScroll() {
    const maxScroll = window.innerHeight * 1.5;
    this.scrollFactor = Math.min(window.scrollY / maxScroll, 1);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    if (this.scrollFactor < 0.001) {
      // Rotate sphere
      const speed = this.isHovered ? 0.002 : 0.01;
      this.group.rotation.y += speed;
      this.group.rotation.x += speed / 5;
    } else {
      this.group.rotation.set(0, 0, 0);

      // Target positions for line
      const targetY = -15;
      const targetX = -10;

      // Leader goes to line target
      if (this.meshes.length > 0) {
        this.meshes[0].currentPos.lerp(
          new THREE.Vector3(targetX, targetY, 0),
          0.05
        );

        // All others follow previous
        for (let i = 1; i < this.meshes.length; i++) {
          this.meshes[i].currentPos.lerp(this.meshes[i - 1].currentPos, 0.2);
        }
      }
    }

    // If scrollFactor is small, lerp back to sphere
    if (this.scrollFactor < 0.01) {
      for (let i = 0; i < this.meshes.length; i++) {
        this.meshes[i].currentPos.lerp(this.initialPositions[i], 0.1);
      }
    }

    // Update meshes
    this.meshes.forEach(({ mesh, currentPos }) => {
      mesh.position.copy(currentPos);
      mesh.lookAt(this.camera.position);
    });

    this.renderer.render(this.scene, this.camera);
  }
}
