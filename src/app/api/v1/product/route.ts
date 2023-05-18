import { pgTable, serial, text, timestamp, varchar, boolean, numeric} from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { InferModel, eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

const db = drizzle(sql);

const products = pgTable("products", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    stock: numeric("stock").notNull(),
    price: numeric("price").notNull(),
    imageUrl: text("imageUrl")
})

export async function GET(){
    // const product_list = await db.select().from(products);
    // return NextResponse.json(product_list);
}