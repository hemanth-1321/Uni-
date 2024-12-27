import { FeedCard } from "@/components/FeedCard/page";
import {
  Twitter,
  UserRound,
  HousePlus,
  Search,
  Bell,
  Mails,
} from "lucide-react";
import React from "react";

export default function Home() {
  interface TwiiterSideBarButton {
    title: string;
    icon: React.ReactNode;
  }

  const sideBarMenuItems: TwiiterSideBarButton[] = [
    {
      title: "Home",
      icon: <HousePlus />,
    },
    {
      title: "Explore",
      icon: <Search />,
    },
    {
      title: "Notifications",
      icon: <Bell />,
    },
    {
      title: "Messages",
      icon: <Mails />,
    },
    {
      title: "Profile",
      icon: <UserRound />,
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        {/* Sidebar */}
        <div className="col-span-3 pt-8 flex flex-col justify-start">
          {/* Twitter Logo */}
          <div className="hover:bg-gray-800 h-fit w-fit rounded-lg cursor-pointer p-2 transition-all mb-8">
            <Twitter size={32} />
          </div>

          {/* Sidebar Menu */}
          <div className="text-xl font-bold pr-20">
            <ul className="space-y-2">
              {sideBarMenuItems.map((item) => (
                <li
                  className="flex hover:bg-gray-800 justify-start gap-4 items-center h-fit rounded-full cursor-pointer w-fit py-2 px-5"
                  key={item.title}
                >
                  <span className="flex items-center">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>

            {/* Post Button */}
            <div className="px-4 mt-8">
              <button className="bg-[#cf7ebd] w-full p-4 rounded-full">
                Post
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-6 border-r-[0.5px] border-l-[0.5px] h-screen border-slate-400 px-8 flex flex-col overflow-hidden">
          <div className="overflow-y-auto h-full scrollbar-hidden scroll-s">
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
