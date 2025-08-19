import { ClientLayoutWrapper } from "../components/Layout/LayoutWrapper";
import { StoreHydration } from "../providers/StoreHydration";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`max-w-[2520px] min-h-screen`}>
      <StoreHydration />
      <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
    </div>
  );
}
