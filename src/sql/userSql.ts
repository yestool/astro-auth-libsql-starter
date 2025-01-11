import {  sql  } from "astro:db";


export const getAllUser = () => {
  return sql`SELECT * from User`;
}
