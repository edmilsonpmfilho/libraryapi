import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import React from 'react';
import './App.css';
import Home from './pages/home';
import CadastrarLivro from './pages/cadLivro';
import Relatorio from './pages/relatorio';
import CadastrarUsuario from './pages/cadUsuario';
import Login from './pages/login';
import LivroDevolucao from './pages/livroDevolucao';
import LivroEmprestimo from './pages/livroEmprestimo';
import ClienteLivroDevolvido from './pages/clienteLivroDevolvido';
import ClienteLivroPendente from './pages/clienteLivroPendente';
import ClienteLivroSolicitado from './pages/clienteLivroSolicitado';
import CadastrarLivro from './pages/cadLivro';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadLivro" element={ <CadastrarLivro/>}/>
            <Route path="/relatorio" element={<Relatorio />} />
            <Route path="/cadUsuario" element={<CadastrarUsuario />} />
            <Route path="/login" element={<Login />} />
            <Route path="/livroDevolucao" element={<LivroDevolucao />} />
            <Route path="/livroEmprestimo" element={<LivroEmprestimo />} />
            <Route path="/clienteLivroPendente" element={<ClienteLivroPendente />} />
            <Route path="/clienteLivroDevolvido" element={<ClienteLivroDevolvido />} />
            <Route path="/clienteLivroSolicitado" element={<ClienteLivroSolicitado />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
