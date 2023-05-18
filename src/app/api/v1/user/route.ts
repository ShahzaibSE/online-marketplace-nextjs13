import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { InferModel, eq } from "drizzle-orm";
import {
  NextRequest,
  NextResponse,
} from "next/server";
import { sql } from "@vercel/postgres";

const db = drizzle(sql);

const user = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username").notNull(),
  password: varchar("password").notNull(),
  firstname: text("firstname").notNull(),
  lastname: text("lastname").notNull(),
  profilePic: text("profilePic"),
  createdAt: timestamp("createdAt").notNull(),
});

interface User  {
    username: string;
    password: string;
}


export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    console.log(db);
    console.log("Request");
    console.log(req);
    const myUser: User = {
        username: req.username,
        password: req.password
    }
    // const registeredUser = await db.select(myUser).from(user)
    return NextResponse.json(db);
  } catch (err) {
    return NextResponse.json({
      status: false,
      resCode: 500,
      message:
        "Couldn't get books due to unexpected error",
    });
  }
}
