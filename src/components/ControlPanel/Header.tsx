'use client'
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";

const buttons = ['Owner and activity data', 'Licensing data', 'Energy data', 'Product data'];

export default function Header() {
    const [highlighted, setHighlighted] = useState(buttons.slice(0, 3));

    return (
        <div className="col-span-full bg-white px-12 py-4 flex justify-between gap-8 items-center overflow-x-auto mb-8">
            <Link href="/" className="w-fit flex gap-4 items-center text-sm text-slate-900">
                <div className="p-2 bg-slate-100 rounded-full">
                    <ArrowLeft className="w-3 h-3 text-slate-500" />
                </div>
                Exit
            </Link>

            <div className="bg-slate-100 rounded-full">
                <div className='w-[70%] flex justify-between gap-5 rounded-full bg-primary'>
                    {buttons.map((btn, i) => (
                        <Button
                            key={i}
                            variant="ghost"
                            className={cn('flex gap-2 items-center p-2 px-5 text-slate-400 font-medium hover:bg-transparent hover:text-slate-800', {
                                'bg-primary text-white hover:text-white': highlighted.includes(btn)
                            })}
                            onClick={() => setHighlighted([...highlighted, btn])}
                            size="sm"
                        >
                            <Badge className="bg-white p-0 w-6 h-6 text-primary border border-gray-300">{i + 1}</Badge>
                            {btn}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}
