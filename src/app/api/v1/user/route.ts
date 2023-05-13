import { pgTable, serial, text, timestamp, varchar, boolean} from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { InferModel, eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

const db = drizzle(sql);

const user = pgTable("users", {
    id: serial("id").primaryKey(),
    username: varchar("username").notNull(),
    firstname: text("firstname").notNull(),
    lastname: text("lastname").notNull(),
    profilePic: text("profilePic"),
    createdAt: timestamp("createAt").notNull()
})