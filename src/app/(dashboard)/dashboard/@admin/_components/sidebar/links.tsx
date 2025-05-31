import CommentIcon from "@/assets/icons/websima/chat.svg";
import ArticleIcon from "@/assets/icons/websima/document.svg";
import GridIcon from "@/assets/icons/websima/grid.svg";
import OrdersIcon from "@/assets/icons/websima/menu.svg";
import SettingsIcon from "@/assets/icons/websima/settings.svg";
import ProductsIcon from "@/assets/icons/websima/shopping-bag.svg";
import UsersIcon from "@/assets/icons/websima/user.svg";

export const SIDEBAR_LINKS = [
  {
    id: 1,
    href: "/dashboard",
    icon: <GridIcon className="fill-background size-6" />,
    label: "داشبورد",
  },
  {
    id: 2,
    href: "/dashboard/users",
    icon: <UsersIcon className="fill-background size-6" />,
    label: "کاربران",
  },
  {
    id: 3,
    href: "/dashboard/products",
    icon: <ProductsIcon className="fill-background size-6" />,
    label: "محصولات",
  },
  {
    id: 4,
    href: "/dashboard/orders",
    icon: <OrdersIcon className="fill-background size-6" />,
    label: "سفارشات",
  },
  {
    id: 5,
    href: "/dashboard/articles",
    icon: <ArticleIcon className="fill-background size-6" />,
    label: "مقالات",
  },
  {
    id: 6,
    href: "/dashboard/comments",
    icon: <CommentIcon className="fill-background size-6" />,
    label: "نظرات",
  },
  {
    id: 7,
    href: "/dashboard/settings",
    icon: <SettingsIcon className="fill-background size-6" />,
    label: "تنظیمات",
  },
];
