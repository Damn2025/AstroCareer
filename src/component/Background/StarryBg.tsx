import  { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarryBg = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        /**
         * 1. CONFIGURATION
         */
        const parameters = {
            count: 60000,
            size: 0.015,
            radius: 5,
            branches: 3,
            spin: 1,
            randomness: 0.2,
            randomnessPower: 3,
            insideColor: '#ff9d5c', // Warm Golden Core
            outsideColor: '#281c54', // Deep Astrology Purple
            rotationSpeed: 0.05
        };

        /**
         * 2. SCENE SETUP
         */
        const scene = new THREE.Scene();

        // Fog for depth
        scene.fog = new THREE.FogExp2('#020205', 0.15);

        const sizes = {
            width: container.clientWidth || window.innerWidth,
            height: container.clientHeight || window.innerHeight,
        };

        const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.1,
            100
        );
        camera.position.x = 3;
        camera.position.y = 3;
        camera.position.z = 4; // Start slightly further out
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        /**
         * 3. GALAXY GENERATOR
         */
        let geometry: THREE.BufferGeometry | null = null;
        let material: THREE.PointsMaterial | null = null;
        let points: THREE.Points | null = null;

        const generateGalaxy = () => {
            // Clean up old galaxy if it exists
            if (points !== null) {
                geometry?.dispose();
                material?.dispose();
                scene.remove(points);
            }

            geometry = new THREE.BufferGeometry();

            const positions = new Float32Array(parameters.count * 3);
            const colors = new Float32Array(parameters.count * 3);

            const colorInside = new THREE.Color(parameters.insideColor);
            const colorOutside = new THREE.Color(parameters.outsideColor);

            for (let i = 0; i < parameters.count; i++) {
                // Position
                const i3 = i * 3;

                const radius = Math.random() * parameters.radius;
                const spinAngle = radius * parameters.spin;
                const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2;

                // Randomness
                const randomX =
                    Math.pow(Math.random(), parameters.randomnessPower) *
                    (Math.random() < 0.5 ? 1 : -1) *
                    parameters.randomness *
                    radius;
                const randomY =
                    Math.pow(Math.random(), parameters.randomnessPower) *
                    (Math.random() < 0.5 ? 1 : -1) *
                    parameters.randomness *
                    radius;
                const randomZ =
                    Math.pow(Math.random(), parameters.randomnessPower) *
                    (Math.random() < 0.5 ? 1 : -1) *
                    parameters.randomness *
                    radius;

                positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
                positions[i3 + 1] = randomY; // Flattened Y for disk shape
                positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

                // Color
                const mixedColor = colorInside.clone();
                mixedColor.lerp(colorOutside, radius / parameters.radius);

                colors[i3] = mixedColor.r;
                colors[i3 + 1] = mixedColor.g;
                colors[i3 + 2] = mixedColor.b;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            material = new THREE.PointsMaterial({
                size: parameters.size,
                sizeAttenuation: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
                vertexColors: true
            });

            points = new THREE.Points(geometry, material);
            scene.add(points);
        };

        generateGalaxy();

        /**
         * 4. BACKGROUND STARS (Background field)
         */
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 2000;
        const starsPos = new Float32Array(starsCount * 3);

        for (let i = 0; i < starsCount * 3; i++) {
            starsPos[i] = (Math.random() - 0.5) * 20; // Spread wide
        }

        starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPos, 3));

        const starsMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: '#ffffff',
            transparent: true,
            opacity: 0.6,
            sizeAttenuation: true,
            depthWrite: false
        });

        const starField = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starField);

        /**
         * 5. ANIMATION & INTERACTION
         */
        const clock = new THREE.Clock();

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const onMouseMove = (event: MouseEvent) => {
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        };

        // Touch interaction
        const onTouchMove = (event: TouchEvent) => {
            if (event.touches.length > 0) {
                mouseX = event.touches[0].clientX - windowHalfX;
                mouseY = event.touches[0].clientY - windowHalfY;
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('touchmove', onTouchMove, { passive: true });

        /**
         * 6. RESIZE HANDLER
         */
        const onResize = () => {
            const rect = container.getBoundingClientRect();
            const width = rect.width || window.innerWidth;
            const height = rect.height || window.innerHeight;

            sizes.width = width;
            sizes.height = height;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener('resize', onResize);

        /**
         * 7. ANIMATION LOOP
         */
        let animationFrameId: number;

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();

            // Rotate Galaxy
            if (points) {
                points.rotation.y = elapsedTime * parameters.rotationSpeed;
            }

            // Subtle Starfield rotation (slower)
            starField.rotation.y = elapsedTime * (parameters.rotationSpeed * 0.2);

            // Parallax Camera Movement
            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;

            // Smoothly interpolate current rotation to target
            if (points) {
                points.rotation.x += 0.05 * (targetY - points.rotation.x);
                points.rotation.z += 0.05 * (targetX - points.rotation.z);
            }

            // Gentle floating camera
            camera.position.y = 3 + Math.sin(elapsedTime * 0.5) * 0.2;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };

        // Start animation
        animate();

        /**
         * 8. CLEANUP
         */
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', onResize);
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('touchmove', onTouchMove);

            if (points) {
                geometry?.dispose();
                material?.dispose();
                scene.remove(points);
            }

            starsGeometry.dispose();
            starsMaterial.dispose();
            scene.remove(starField);

            renderer.dispose();
            if (renderer.domElement && renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    useEffect(() => {
        // Fade in on load
        if (containerRef.current) {
            setTimeout(() => {
                if (containerRef.current) {
                    containerRef.current.style.opacity = '1';
                }
            }, 100);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0, transition: 'opacity 1.5s ease-in-out', zIndex: 0 }}
        />
    );
};

export default StarryBg;
