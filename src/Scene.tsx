import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/xCXCrb5qYrbwROBP/scene.splinecode"
  );
  return (
    <>
      <color attach="background" args={["#66617f"]} />
      <group {...props} dispose={null}>
        <group name="Art" position={[3.97, 12.27, 16.64]} scale={1.03}>
          <mesh
            name="Sun"
            geometry={nodes.Sun.geometry}
            material={materials["Sun Material"]}
            castShadow
            receiveShadow
            position={[-2, -11.73, -13.66]}
            scale={0.97}
          />
          <group name="Lines" position={[-2, -11.73, -13.66]}>
            <mesh
              name="Torus 3"
              geometry={nodes["Torus 3"].geometry}
              material={materials["Torus 3 Material"]}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[0.22, 0.36, -1.79]}
            />
            <mesh
              name="Torus 2"
              geometry={nodes["Torus 2"].geometry}
              material={materials["Torus 2 Material"]}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[-0.82, 0.24, -1.71]}
              scale={1}
            />
            <mesh
              name="Torus"
              geometry={nodes.Torus.geometry}
              material={materials["Torus Material"]}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[1.38, -0.26, -1.63]}
              scale={1}
            />
          </group>
          <mesh
            name="Glass"
            geometry={nodes.Glass.geometry}
            material={materials[""]}
            castShadow
            receiveShadow
            position={[-2, -11.73, -13.66]}
            rotation={[0, -0.37, 0]}
          />
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1250}
          shadow-camera-right={1250}
          shadow-camera-top={1250}
          shadow-camera-bottom={-1250}
          position={[-304.73, 45.76, -202.34]}
          rotation={[-2.6, 0, 0]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={3.26}
          far={100000}
          near={-100000}
          position={[987.96, 62.09, 77.7]}
          rotation={[-0.69, 1.47, 0.69]}
          key={undefined}
          view={undefined}
          quaternion={undefined}
          onPointerMissed={undefined}
          attach={undefined}
          args={undefined}
          onUpdate={undefined}
          up={undefined}
          scale={undefined}
          matrix={undefined}
          layers={undefined}
          dispose={undefined}
          onClick={undefined}
          onContextMenu={undefined}
          onDoubleClick={undefined}
          onPointerUp={undefined}
          onPointerDown={undefined}
          onPointerOver={undefined}
          onPointerOut={undefined}
          onPointerEnter={undefined}
          onPointerLeave={undefined}
          onPointerMove={undefined}
          onPointerCancel={undefined}
          onWheel={undefined}
          castShadow={undefined}
          visible={undefined}
          type={undefined}
          id={undefined}
          uuid={undefined}
          parent={undefined}
          modelViewMatrix={undefined}
          normalMatrix={undefined}
          matrixWorld={undefined}
          matrixAutoUpdate={undefined}
          matrixWorldAutoUpdate={undefined}
          matrixWorldNeedsUpdate={undefined}
          receiveShadow={undefined}
          frustumCulled={undefined}
          renderOrder={undefined}
          animations={undefined}
          userData={undefined}
          customDepthMaterial={undefined}
          customDistanceMaterial={undefined}
          isObject3D={undefined}
          onBeforeRender={undefined}
          onAfterRender={undefined}
          applyMatrix4={undefined}
          applyQuaternion={undefined}
          setRotationFromAxisAngle={undefined}
          setRotationFromEuler={undefined}
          setRotationFromMatrix={undefined}
          setRotationFromQuaternion={undefined}
          rotateOnAxis={undefined}
          rotateOnWorldAxis={undefined}
          rotateX={undefined}
          rotateY={undefined}
          rotateZ={undefined}
          translateOnAxis={undefined}
          translateX={undefined}
          translateY={undefined}
          translateZ={undefined}
          localToWorld={undefined}
          worldToLocal={undefined}
          lookAt={undefined}
          add={undefined}
          remove={undefined}
          removeFromParent={undefined}
          clear={undefined}
          getObjectById={undefined}
          getObjectByName={undefined}
          getObjectByProperty={undefined}
          getObjectsByProperty={undefined}
          getWorldPosition={undefined}
          getWorldQuaternion={undefined}
          getWorldScale={undefined}
          getWorldDirection={undefined}
          raycast={undefined}
          traverse={undefined}
          traverseVisible={undefined}
          traverseAncestors={undefined}
          updateMatrix={undefined}
          updateMatrixWorld={undefined}
          updateWorldMatrix={undefined}
          toJSON={undefined}
          clone={undefined}
          copy={undefined}
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
          left={undefined}
          right={undefined}
          bottom={undefined}
          top={undefined}
          matrixWorldInverse={undefined}
          projectionMatrix={undefined}
          projectionMatrixInverse={undefined}
          isCamera={undefined}
          setViewOffset={undefined}
          clearViewOffset={undefined}
          updateProjectionMatrix={undefined}
          isOrthographicCamera={undefined}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.5} />
      </group>
    </>
  );
}
