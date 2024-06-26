import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Plus, X } from "lucide-react";
import AddResourseForm from "../Form";

export default function SourcesTableHead() {
    return (
        <div className="w-full flex flex-col sm:flex-row gap-2 items-center justify-between">
            <h4 className="text-lg text-slate-900">Other energy sources in use</h4>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="gap-2 rounded-md border-gray-600 twext-slate-800 hover:text-purple-800 hover:border-purple-800 hover:bg-transparent">
                        <Plus className="w-5 h-5" />
                        Adding a New Energy Source
                    </Button>
                </SheetTrigger>

                <SheetContent side="left" className="w-full sm:w-3/5 lg:w-2/5">
                    <div className="w-full flex justify-between items-center mb-8">
                        <h4 className="text-lg text-slate-900 font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 after:text-[14px] block">
                            Adding a new energy source
                        </h4>
                        <SheetClose>
                            <X className="h-4 w-4" />
                        </SheetClose>
                    </div>

                    <AddResourseForm />
                </SheetContent>
            </Sheet>
        </div>
    );
}
