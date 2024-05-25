/* eslint-disable @typescript-eslint/no-non-null-assertion */
// import { sql } from "@vercel/postgres";
// import { drizzle } from "drizzle-orm/vercel-postgres";

// import * as schema from "./schema";

// export const db = drizzle(sql, { schema });
import { Pool } from "pg"
// import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import { drizzle } from "drizzle-orm/node-postgres"
import * as schema from "./schema"

const pool = new Pool({
  // eslint-disable-next-line no-restricted-properties
  connectionString: process.env.DB_URL!,
})

const db = drizzle(pool, { schema })

export default db