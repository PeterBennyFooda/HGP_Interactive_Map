import {
    ArcRotateCamera,
    Color3,
    Engine,
    //FreeCamera,
    HemisphericLight,
    //MeshBuilder,
    Scene,
    SceneLoader,
    Vector3
} from "@babylonjs/core";
import "@babylonjs/loaders";

export class MainScene {
    scene: Scene;
    engine: Engine;

    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(canvas, true);
        this.scene = this.CreateScene(canvas);

        this.CreateModels();

        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    CreateScene(canvas: HTMLCanvasElement): Scene {
        const scene = new Scene(this.engine);

        // This creates and positions a camera
        //const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
        const camera = new ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 4, 100, new Vector3(0, -10, 0), scene);
        camera.speed = 0.25;

        // This attaches the camera to the canvas
        camera.attachControl();

        // Create light source
        const light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
        light.intensity = 0.6;
        light.specular = Color3.Black();

        return scene;
    }

    async CreateModels(): Promise<void> {
        // Import model
        //SceneLoader.ImportMesh("Nest", "./models/", "Nest.obj", this.scene);

        // const ground = MeshBuilder.CreateGround(
        //     "ground",
        //     { width: 10, height: 10 },
        //     this.scene
        // );

        const models = await SceneLoader.ImportMeshAsync("", "./models/", "Nest.glb");
    }
}