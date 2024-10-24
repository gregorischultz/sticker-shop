import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const products = await prisma.product.findMany();


  return (
    <div>
      <h2>Produtos disponíveis</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>R$ {product.price.toFixed(2)}</p>
            <img src={product.imageUrl} alt={product.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}
