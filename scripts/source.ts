import { writeFileSync } from "node:fs"
import { join } from "node:path"
import { pinyin } from "@napi-rs/pinyin"
import { consola } from "consola"
import { projectDir } from "../shared/dir"
import { genSources } from "../shared/pre-sources"

const sources = genSources()
try {
  const pinyinMap = Object.fromEntries(Object.entries(sources)
    .filter(([, v]) => !v.redirect)
    .map(([k, v]) => {
      return [k, pinyin(v.title ? `${v.name}-${v.title}` : v.name).join("")]
    }))

  writeFileSync(join(projectDir, "./shared/pinyin.json"), JSON.stringify(pinyinMap, undefined, 2))
  consola.info("Generated pinyin.json")
} catch {
  consola.error("Failed to generate pinyin.json")
}

try {
  writeFileSync(join(projectDir, "./shared/sources.json"), JSON.stringify(Object.fromEntries(Object.entries(sources)), undefined, 2))
  consola.info("Generated sources.json")
} catch {
  consola.error("Failed to generate sources.json")
}
