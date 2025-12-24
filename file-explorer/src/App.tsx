
import { fileStructure } from './fileStructure'
import { FileExplorer } from './FileExplorer'
import './App.css'

function App() {
  

  return (
    <>
    <div>
      <FileExplorer data = {fileStructure}/>
    </div>
      
    </>
  )
}

export default App
