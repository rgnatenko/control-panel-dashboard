import { Button } from "../ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import SourcesTable from "./Table";

export default function Board() {
    return (
        <div className="p-6 bg-white rounded-lg mb-12">
            <div className="flex items-center gap-2 mb-8">
                <h4 className="text-lg text-slate-900 font-semibold">Energy Data</h4>
                <Button className="p-0 bg-slate-300 w-6 h-6">i</Button>
            </div>

            <Accordion type="single" collapsible className="relative w-full flex flex-col gap-4 mb-8">
                <AccordionItem value="item-1" className="border border-gray-200 px-4 rounded-md">
                    <AccordionTrigger>Electrical Energy information</AccordionTrigger>
                    <AccordionContent />
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 px-4 rounded-md">
                    <AccordionTrigger>Energy allocation information</AccordionTrigger>
                    <AccordionContent />
                </AccordionItem>
            </Accordion>

            <SourcesTable />
        </div>
    );
}
