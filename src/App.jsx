import Login from './components/login/Login';
import useToken from './components/login/useToken';
import Sidebar from './components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  const { token, setToken } = useToken()

  if (!token) {
    return <Login setToken={setToken} />
  }

  else {
    return (
      <>
        <Sidebar setLogout={setToken} token={token} />
        <Outlet />
      </>
    )
  }
}

export default App
