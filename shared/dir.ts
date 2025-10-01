import { fileURLToPath } from "node:url"

export const projectDir = fileURLToPath(new URL("..", import.meta.url))
