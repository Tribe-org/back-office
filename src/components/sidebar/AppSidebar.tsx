"use client";

import { usePathname } from "next/navigation";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { type MenuItem } from "@/types";

import Menu from "./Menu";

const items: MenuItem = [
  {
    groupTitle: "관리자 메인",
    menu: [
      { title: "관리자 신청", url: "#" },
      { title: "관리자 목록", url: "#" },
    ],
  },
  {
    groupTitle: "사용자 관리",
    menu: [
      {
        title: "회원 관리",
        menu: [
          { title: "회원 조회", url: "/users" },
          { title: "회원 목록", url: "#" },
        ],
      },
    ],
  },
  {
    groupTitle: "콘텐츠 관리",
    menu: [
      { title: "검색 관리", menu: [{ title: "추천 검색어", url: "#" }] },
      { title: "배너 관리", menu: [{ title: "배너 등록", url: "#" }] },
      {
        title: "모임 관리",
        menu: [
          { title: "모임 현황", url: "#" },
          { title: "폐지 모임", url: "#" },
          { title: "신고 모임", url: "#" },
        ],
      },
    ],
  },
  {
    groupTitle: "메시지 관리",
    menu: [
      {
        title: "푸시 관리",
        menu: [
          { title: "푸시 조회", url: "#" },
          { title: "푸시 발송", url: "#" },
        ],
      },
    ],
  },
  {
    groupTitle: "고객 응대 관리",
    menu: [
      { title: "공지사항", url: "#" },
      { title: "FAQ", url: "#" },
    ],
  },
  {
    groupTitle: "전시 관리",
    menu: [
      {
        title: "모임 목록",
        menu: [
          { title: "인기 모임 관리", url: "#" },
          { title: "추천 모임 관리", url: "#" },
          { title: "신규 모임 관리", url: "#" },
        ],
      },
    ],
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        {items.map((item) => {
          return <Menu key={item.groupTitle} page={pathname} item={item} />;
        })}
      </SidebarContent>
    </Sidebar>
  );
}
