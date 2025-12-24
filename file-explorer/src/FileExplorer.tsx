import { useState } from "react";
import type { FileNode } from "./Types";

interface FileItemprops{
  node : FileNode ; 
  level?: number ;
}

const FileItem = ({node , level = 0} : FileItemprops)=>{
  const [isOpen , setIsOpen] = useState<Boolean>(false);
  const hasChildren = node.children && node.children.length > 0;

  return (<><div onClick={()=>setIsOpen(!isOpen)}>
    {hasChildren && <span>{isOpen ? "📁" : "📂"}</span>}
    {!hasChildren && <span>📄</span>}
    
    {node.name}
    {isOpen && hasChildren && (<>
    <div>
      {node.children?.map((child)=>(<>
      <FileItem key={child.id} node={child} level={level + 1}/>
      </>))}
    </div>
    </>)}

  </div>
  
  </>)
}

interface FileExplorerProps{
  data : FileNode[];
}


export const FileExplorer = ({data} : FileExplorerProps)=>{

  return(<>
  <h1>Fileexplorer</h1>

  {data.map((node)=>(<>
  <FileItem key={node.id} node = {node}/>
  
  </>))}
  
  </>)
}