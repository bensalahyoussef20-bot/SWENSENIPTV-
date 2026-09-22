import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 80% 10%, #123a6e 0%, #05070f 45%), radial-gradient(circle at 10% 90%, #3a2f06 0%, #05070f 55%), #05070f",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 22,
            background: "#0064d6",
            color: "white",
            fontSize: 44,
            fontWeight: 800,
          }}
        >
          TV
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            letterSpacing: -1,
          }}
        >
          Sweden IPTV
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 32,
            color: "#8b93ab",
          }}
        >
          Nordic Streaming i Kristallklar 4K
        </div>
      </div>
    ),
    { ...size }
  );
}
