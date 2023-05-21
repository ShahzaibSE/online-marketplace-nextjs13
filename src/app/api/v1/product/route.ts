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
    try{
        const _products = await db.select().from(products);
        if(_products.length == 0){
            return NextResponse.json({
                status: true,
                resCode: 204,
                message: "No products available",
                data: [],
                isError: false
            })
        }else{
            return NextResponse.json({
                status: true,
                resCode: 200,
                message: "Products found successfully",
                data: _products,
                isError: false
            })
        }
    }catch(err){
        return NextResponse.json({
            status: false,
            resCode: 500,
            message: "Couldn't get products due to unexpected error",
            isError: true
        })
    }
}