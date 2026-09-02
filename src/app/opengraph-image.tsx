import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const alt = "Osamah AlBahnasi";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const logoSvg = await readFile(
  join(process.cwd(), "src/app/icon.svg"),
  "utf-8"
);
const logoSrc = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08070c",
        }}
      >
        <img src={logoSrc} width={480} height={480} />
      </div>
    ),
    { ...size }
  );
}
