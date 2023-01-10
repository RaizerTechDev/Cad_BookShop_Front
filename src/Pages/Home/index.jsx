import { useState } from 'react';
import './style.css';
import { Plus } from 'phosphor-react';
import { CardUser } from '../../components/CardUser'
import { Header } from "../../components/Header";

export function Home() {
    const [livroName, setLivroName] = useState("");
    const [livros, setLivros] = useState([]);

    function handleAddLivros() {
        if (livroName !== "") {
          const newLivro = {
            name: livroName,
          };
    
          setLivros([...livros, newLivro]);
    
          setLivroName("");
        } else {
          alert("Cadastre o Livro 😁");
        }
      }
    
      function handleRemoveLivro(idLivro) {
        setLivros(livros.filter((e, index) => index !== idLivro));
      }   

    return(
        <div className="container">
      <Header />
      <h1>BOOKSHOP TECH RR76 </h1>
      <img
        src="https://media.giphy.com/media/7SKUx7FY83GEMk9t08/giphy.gif"
        alt="livros"
      />
           
            <div className="input-container">
                <input 
                    type="text" 
                    placeholder="Cadastrar o Nome do livro"
                    onChange={(e) => setLivroName(e.target.value)}
                    value={livroName}
                  />
                  <button title="Adicionar livro" onClick={handleAddLivros}>
                    <Plus size={26} weight="bold" color="#FFF" />
                  </button>
                </div>
          
                <div className="container-list">
                  {livros.map((livro, index) => (
                    <CardUser
                      key={index}
                      name={livro.name}
                      idLivro={index}
                      onDeleteLivro={handleRemoveLivro}
                    />
                  ))}
                </div>
              </div>
            );
          }
          
                    