'use client';

import { useState } from "react";

export default function AddProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSumit = async (e) => {
        e.preventDefaut()

        const res = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify({ name, description, price: parseFloat(price), imageUrl }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (res.ok) {
            alert('Produto add com sucesso')
            setName('')
            setDescription('')
            setPrice('')
            setImageUrl('')
        } else {
            alert('Erro ao add o produto')
        }
    }

    return (
        <div>
          <h2>Adicionar Produto</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome do produto"
              required
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descrição"
              required
            />
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Preço"
              required
            />
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="URL da imagem"
              required
            />
            <button type="submit">Adicionar Produto</button>
          </form>
        </div>
      )
}
