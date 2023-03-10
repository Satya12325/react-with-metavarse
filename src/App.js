import logo from './logo.svg';
import './App.css';
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import sky from './stars.jpg';
import mountain from './model/mountain.glb';
import Rocket from './components/Rocket';

function App() {

  const loader  = new GLTFLoader();

  loader.load(mountain, (d) =>{
    const entity = document.getElementById("mountain");
    entity.object3D.add(d.scene);
  })

  return (
    <div className="App">
      <a-scene>
      <a-assets>
        <img id= "sky" src={sky} />
      </a-assets>

      <a-sky
        color = "#FFFFFF"
        material="src: #sky"
        rotation="0 0 0"
      >
      </a-sky>
      <a-entity id="mountain" position="0 0 0" scale="15 15 15"></a-entity>
      <Rocket x={0} y={20} z={-90}/>
      {/* <Rocket */}
    </a-scene>
    </div>
  );
}

export default App;
