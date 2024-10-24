import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
    const { name, description, price, imageUrl } = await req.json()

    const product = await prisma.product.create({
        data: { name, description, price, imageUrl },
    })

    return new Response(JSON.stringify(product), { status: 201 })
}