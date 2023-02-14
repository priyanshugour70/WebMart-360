import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';
import Registration from './pages/Registration';


const Layout =()=>{
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />}></Route>
    </Route>
    <Route path='/signin' element={<Signin />}></Route>
    <Route path='/registration' element={<Registration />}></Route>
    </Route>
  ))

  return (
    <div className='font-bodyFont'>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
