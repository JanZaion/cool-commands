import { C } from './C';
import { commands } from './commands';

function App() {
  return (
    <div>
      <p>Remove all node modules</p>
      <C command={commands.RM_MODULES} />
      <p>Switch repo to LF from CRLF</p>
      <C command={commands.AUTO_CRLF} />
      <C command={commands.RM_CACHE} />
      <C command={commands.RESET} />
      <p>Create Vite app</p>
      <C command={commands.ADD_VITE} />
    </div>
  );
}

export default App;