/** Escape HTML delimiters so content cannot terminate a JSON-LD script element. */
export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");
}
