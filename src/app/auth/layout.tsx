import AuthRouteProvider from "@/components/providers/auth-route-provider";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthRouteProvider>{children}</AuthRouteProvider>;
}
