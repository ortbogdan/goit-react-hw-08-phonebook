import { customAlphabet } from "nanoid";

export function idGenerator() {
  const nanoid = customAlphabet("1234567890", 10);
  return nanoid();
}
