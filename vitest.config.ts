import { join } from "node:path"
import { defineConfig } from "vitest/config"
import unimport from "unimport/unplugin"
import { projectDir } from "./shared/dir"

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["server/**/*.test.ts", "shared/**/*.test.ts", "test/**/*.test.ts"],
  },
  resolve: {
    alias: {
      "@shared": join(projectDir, "shared"),
      "#": join(projectDir, "server"),
    },
  },
  plugins: [
    // https://github.com/unjs/nitro/blob/v2/src/core/config/resolvers/imports.ts
    unimport.vite({
      imports: [],
      presets: [
        {
          package: "h3",
          ignore: [/^[A-Z]/, r => r === "use"],
        },
      ],
      dirs: ["server/utils", "shared"],
      // dts: false,
    }),
  ],
})
