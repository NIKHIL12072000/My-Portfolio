export function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) {
    return { meta: {}, content: raw };
  }

  const end = raw.indexOf("---", 3);
  const metaBlock = raw.slice(3, end).trim();
  const content = raw.slice(end + 3).trim();

  const meta = {};

  metaBlock.split("\n").forEach((line) => {
    const [key, value] = line.split(":");

    if (!key || !value) return;

    const cleanKey = key.trim();
    let cleanValue = value.trim();

    // Array values
    if (cleanValue.startsWith("[") && cleanValue.endsWith("]")) {
      cleanValue = cleanValue
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim());
    }

    meta[cleanKey] = cleanValue;
  });

  return { meta, content };
}
