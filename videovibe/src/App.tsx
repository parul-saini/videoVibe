import {EuiProvider} from '@elastic/eui';
import "@elastic/eui/dist/eui_theme_light.css"
import './App.css';

function App() {
  return (
    <EuiProvider>
    <div className="App">
      <h1>app</h1>
    </div>
    </EuiProvider>
  );
}

export default App;
