import { copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const outputRoot = path.resolve("dist/client");

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith("_next") || entry.name.startsWith(".")) continue;

    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findHtmlFiles(absolute)));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(absolute);
    }
  }

  return files;
}

const htmlFiles = await findHtmlFiles(outputRoot);

for (const source of htmlFiles) {
  const relative = path.relative(outputRoot, source);
  if (relative === "index.html" || relative === "404.html") continue;

  const routeDirectory = path.join(
    outputRoot,
    relative.slice(0, -".html".length),
  );
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(source, path.join(routeDirectory, "index.html"));
}

console.log(`Prepared ${htmlFiles.length - 2} clean GitHub Pages routes.`);
