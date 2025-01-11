import { User, db } from 'astro:db';
import { nanoid } from 'nanoid';
import { hash } from "@node-rs/argon2";



// https://astro.build/db/seed
export default async function() {
  const passwordHash = await hash('abcabc0', {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1
  });
  await db.insert(User).values([
    {id: nanoid(15), email: 'admin@example.com', name: "Admin", password: passwordHash ,role: "admin" },
    {id: nanoid(15), email: 'kasim@example.com', name: "Kasim", password: passwordHash ,role: "user" },
  ]);
}