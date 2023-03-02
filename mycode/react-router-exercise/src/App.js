import {Routes,Route,Navigate} from 'react-router-dom';
import {Home} from "./pages/Home";
import {ProductList} from "./pages/ProductList";
import {ProductDetail} from "./pages/ProductDetail";
import {Contact} from "./pages/Contact";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Admin} from "./pages/Admin";
import {PageNotFound} from "./pages/PageNotFound";
import {ContactIn} from "./components/contact/ContactIn";
import {ContactEu} from "./components/contact/ContactEu";
import {ContactEn} from "./components/contact/ContactEn";
import {ContactOther} from "./components/ContactOther";
import './App.css';

function App() {
  
  const user = false;
  
  return (
    
    <div className="App">
      <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<ProductList/>}></Route>
            <Route path='/products/:id' element={<ProductDetail/>}></Route>
            <Route path='/contacts' element={<Contact/>}>
              <Route path='in' element={<ContactIn/>}></Route>
              <Route path='eu' element={<ContactEu/>}></Route>
              <Route path='us' element={<ContactEn/>}></Route>
              <Route path="*" element={<ContactOther />  }  />
            </Route>
            <Route 
              path='/admin' 
              element={ user ? <Admin/>  : <Navigate to="/" /> }/>
          <Route path="*" element={<PageNotFound title="404" />  }  />
          </Routes>
        </main>
      <Footer/>
    </div>
    
  );
  
}

export default App;
