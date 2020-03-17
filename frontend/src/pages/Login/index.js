import React, { useState } from 'react';

import api from '../../services/api';

export default function Login({ history }) { // apenas componentes que são utilizados como rotas possuem history
    const [email, setEmail] = useState('');

    async function handleSubmit(e) {
      e.preventDefault();
  
      const response = await api.post('/sessions', { email });
      
      const { _id } = response.data;
  
      localStorage.setItem('user', _id);

      history.push('/dashboard'); // enviar para rota dashboard
    }
    return (
        <> {/* fragment */}
            <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={ event => handleSubmit(event) }>
            <label htmlFor="email">E-MAIL *</label>
            <input type="email" id="email" placeholder="Seu melhor e-mail" 
                onChange={ event => setEmail(event.target.value) }
                />

            <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    )
}