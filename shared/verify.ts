import z from "zod"

export function verifyPrimitiveMetadata(target: any) {
  return z.object({
    data: z.record(z.string(), z.array(z.string())),
    updatedTime: z.number(),
  }).parse(target)
}
