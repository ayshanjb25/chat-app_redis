'use client'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import MessageContainer from "./MessageContainer";

interface ChatLayoutProps {
  defaultLayout: number[] | undefined;
}

const ChatLayout = ({ defaultLayout = [320, 480] }: ChatLayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {

  })
  return (
    <ResizablePanelGroup direction="horizontal"
      className="h-full items-stretch bg-background rounded-lg"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizeable-panels:layout=${JSON.stringify(sizes)};`;
      }}>
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={8}
        collapsible={true}
        minSize={isMobile ? 0 : 24}
        maxSize={isMobile ? 8 : 30}
        onCollapse={() => {
          setIsCollapsed(true);
          document.cookie = `react-resizeable-panels:collapsed=true;`
        }}
        onExpand={() => {
          setIsCollapsed(false);
          document.cookie = `react-resizeable-panels:collapsed=false;`
        }}
        className={cn(isCollapsed && "min-w-[80px] transition-all duration-300 ease-in-out")}
      >
        <Sidebar isCollapsed={isCollapsed} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        defaultSize={defaultLayout[1]}
        minSize={30}
      >
        {/* <div className="flex justify-center items-center h-full w-full px-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <img src='convo-logo.png' alt='logo' className='w-[full] md:w-2/3 lg:w-1/2 opacity-90'
              style={{ width: "360px", height: "180px" }} />
            <p className="text-muted-forground text-center">Hey there! Tap on a chat to see what's happening.</p>

          </div>
        </div> */}

        <MessageContainer />
      </ResizablePanel>
    </ResizablePanelGroup>

  )
}

export default ChatLayout
