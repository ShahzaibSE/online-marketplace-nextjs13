import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import {
  InferModel,
  and,
  asc,
  desc,
  eq,
  or,
} from "drizzle-orm";
import {
  NextRequest,
  NextResponse,
} from "next/server";
import { sql } from "@vercel/postgres";

const db = drizzle(sql);

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username").notNull(),
  password: varchar("password").notNull(),
  firstname: text("firstname").notNull(),
  lastname: text("lastname").notNull(),
  profilePic: text("profilePic"),
  createdAt: timestamp("createdAt").notNull(),
});

interface User {
  username: string;
  password: string;
}

export async function GET(request: NextRequest) {
  try {
    const req = await request.json();
    if (req.username) {
      const registeredUser = await db
        .select()
        .from(users)
        .where(eq(users.username, req.username));
      return NextResponse.json({
        status: true,
        resCode: 200,
        message: "User found successfully",
        data: registeredUser,
      });
    } else {
      return NextResponse.json({
        status: true,
        resCode: 204,
        message: "User not found",
        data: {},
      });
    }
  } catch (err) {
    return NextResponse.json({
      status: false,
      resCode: 500,
      message:
        "Couldn't get books due to unexpected error",
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    console.log(db);
    console.log("Request");
    console.log(req);
    const myUser: User = {
      username: req.username,
      password: req.password,
    };
    if (req.username && req.password) {
      const registeredUser = await db
        .select()
        .from(users)
        .where(
          and(
            eq(users.username, req.username),
            eq(users.password, req.password)
          )
        );
      console.log("User");
      console.log(myUser);
      return NextResponse.json({
        status: true,
        resCode: 200,
        message: "User logged-In successfully",
        data: registeredUser
      })
    }else {
      return NextResponse.json({
        status: true,
        resCode: 204,
        message: "User not found, please sign up.",
        data: {}
      });
    }
  } catch (err) {
    return NextResponse.json({
      status: false,
      resCode: 500,
      message:
        "Couldn't get books due to unexpected error",
    });
  }
}
