import { hash, verify } from "@node-rs/argon2";

export const passwordHash = async (password: string) => {
  return await hash(password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1
  });
};


export const validPassword = async (DbhashPassword: string, password: string) => {
  return await verify(DbhashPassword, password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1
  })
}