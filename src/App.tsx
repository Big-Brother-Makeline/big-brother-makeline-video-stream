import "./App.css";
import { uploadImage } from "./uploadImage";

function App() {
  return (
    <div className="App">
      <h1>Big Brother Makeline Image Uploader</h1>
      <button onClick={() => uploadImage()}></button>
    </div>
  );
}

export default App;
