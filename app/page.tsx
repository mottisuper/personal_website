import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
        background: "radial-gradient(circle at top, #1e293b, #0f172a)",
        color: "#e5e7eb",
        overflow: "hidden",
      }}
    >
      <div
        className="card"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "40px 50px",
          textAlign: "center",
          backdropFilter: "blur(12px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          maxWidth: "420px",
          width: "90%",
          animation: "fadeUp 1s ease-out forwards",
        }}
      >
        <div
          className="avatar"
          style={{
            width: "120px",
            height: "120px",
            margin: "0 auto 25px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid #38bdf8",
            animation: "pulseGlow 5s ease-in-out infinite",
          }}
        >
          {/*
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
            alt="Robot avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/8193/8193649.png"
            alt="British Shorthair Cat icon"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            marginBottom: "10px",
            letterSpacing: "0.5px",
          }}
        >
          Motti Aronsohn
        </h1>
        <div
          className="glow-line"
          style={{
            width: "60px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, #38bdf8, transparent)",
            margin: "22px auto",
            borderRadius: "10px",
          }}
        ></div>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 400, color: "#9ca3af" }}>
          Data Science & Fullstack Engineer
        </h2>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
          }
          50% {
            transform: scale(1.04);
            box-shadow: 0 0 40px rgba(56, 189, 248, 0.65);
          }
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.75);
          transition: all 0.4s ease;
        }
      `}</style>

      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
    </div>

    /*<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
*/
  );
}
