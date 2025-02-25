import dynamic from "next/dynamic";

const canUseDom = dynamic(() => import("rc-util/es/Dom/canUseDom"), {
  ssr: false, // ✅ This ensures it only loads on the client
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>Can Use DOM? {typeof window !== "undefined" ? "Yes" : "No"}</p>
      {children}
    </div>
  );
}
