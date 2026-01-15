import './App.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import authService from './Service/auth'
import { useEffect } from 'react';
import { login, logout } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
login


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ user: userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])






  return (
    <>
      {loading ? <div>Loading...</div> :
     <div className='min-h-screen flex flex-wrap'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* <outlet/> */}
        </main>
        <Footer/>
      </div>
      </div>  }
    </>
  )
}


export default App
