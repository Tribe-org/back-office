import "../globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회원 관리",
  description: "회원 조회 및 회원 목록을 볼 수 있는 화면입니다.",
};

export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
