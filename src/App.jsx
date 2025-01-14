import { Link, Routes, Route, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/home/Home';
import Course from './pages/courses/Course';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import './App.css'
import Footer from './pages/footer/Footer';

function App() {
  

  return (
    <div>
    <Navbar expand="lg" className='position-absolute w-100'>
      <Container>
        <Navbar.Brand>
          <Link to="/" className='navbar-brand d-flex align-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" className="bi bi-backpack-fill" viewBox="0 0 16 16">
              <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
              <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6.002 6.002 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6.04 6.04 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
            </svg>
            <span className='mx-2 text-light lh-1 fw-semibold'>
              Prince
              <br></br>
              University
              <br></br>
              London
            </span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
        <Navbar.Collapse id='basic-navbar-nav'>
          

<Nav className='me-auto justify-content-end w-100 gap-3'>
  <NavLink 
    to='/' 
    className={({ isActive }) => 
      `text-uppercase text-decoration-none ${isActive ? 'text-danger' : 'text-white'}`
    }
  >
    Home
  </NavLink>
  <NavLink 
    to='/course' 
    className={({ isActive }) => 
      `text-uppercase text-decoration-none ${isActive ? 'text-danger' : 'text-white'}`
    }
  >
    Our courses
  </NavLink>
  <NavLink 
    to='/about' 
    className={({ isActive }) => 
      `text-uppercase text-decoration-none ${isActive ? 'text-danger' : 'text-white'}`
    }
  >
    About us
  </NavLink>
  <NavLink 
    to='/blog' 
    className={({ isActive }) => 
      `text-uppercase text-decoration-none ${isActive ? 'text-danger' : 'text-white'}`
    }
  >
    Blog
  </NavLink>
  <NavLink 
    to='/contact' 
    className={({ isActive }) => 
      `text-uppercase text-decoration-none ${isActive ? 'text-danger' : 'text-white'}`
    }
  >
    Get in touch
  </NavLink>
</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course' element={<Course />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>

    <Footer/>
  </div>
       
  )
}

export default App
