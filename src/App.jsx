import MainContainer from './components/MainContainer'
import Sidebar from './components/Sidebar'
import { useState } from 'react'

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="App">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <MainContainer sidebarCollapsed={sidebarCollapsed} />
    </div>
  )
}
