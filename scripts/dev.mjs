import { spawn } from "node:child_process";
import { createRequire } from "node:module";

// Accept the host/port flags used by the preview supervisor as well as Next's flags.
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : fallback;
};
const require = createRequire(import.meta.url);
const server = spawn(
  process.execPath,
  [
    require.resolve("next/dist/bin/next"),
    "dev",
    "--hostname",
    option("--hostname", option("--host", "0.0.0.0")),
    "--port",
    option("--port", process.env.PORT || "3000"),
  ],
  { stdio: "inherit" },
);
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => server.kill(signal));
server.on("exit", (code) => process.exit(code ?? 0));
