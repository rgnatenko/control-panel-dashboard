import Board from "@/components/ControlPanel/Board";
import ControlPanelHeader from "@/components/ControlPanel/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-4 lg:grid-cols-12 bg-gray-100 pb-16">
      <ControlPanelHeader />

      <div className="col-span-full lg:col-start-2 lg:col-end-12 px-3 lg:px-0">
        <Board />
      </div>

      <div className="col-span-full lg:col-start-2 lg:col-end-12 px-3 lg:px-0 flex items-center justify-end gap-5">
        <Button variant="outline" className="border-primary text-primary rounded-md bg-transparent hover:border-purple-900 hover:text-purple-900">
          Previous
        </Button>
        <Button className="w-[25%] gap-3 text-white rounded-md hover:bg-purple-900">
          Next
          <ArrowRight />
        </Button>
      </div>
    </main>
  );
}

