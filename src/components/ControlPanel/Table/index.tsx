import { Edit, Info, Plus, Trash2, X } from "lucide-react";
import { Button } from "../../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../../ui/sheet";
import AddResourseForm from "../Form";
import SourcesTableHead from "./SourcesTableHead";

const sources = [
    {
        energyProduct: 'Gas',
        consumptionType: 'Thermal',
        documentNumber: 123456,
        quantitys: 5000,
        unitOfMeasure: 'Liter',
        startdDate: 2024 - 12 - 16,
        enddDate: 2024 - 12 - 16,
    },
    {
        energyProduct: 'Diesel',
        consumptionType: 'Thermal',
        documentNumber: 123456,
        quantitys: 5000,
        unitOfMeasure: 'Liter',
        startdDate: 2024 - 12 - 16,
        enddDate: 2024 - 12 - 16,
    },
];

const titles = [
    "Energy Product",
    "Consumption type",
    "Document",
    "Quantity's",
    "Start date",
    "End date",
    "Attachments",
    'Procedure'
];

export default function SourcesTable() {
    return (
        <div className="p-5 rounded-md border border-gray-300 flex flex-col gap-6">
            <SourcesTableHead />

            <div className="w-full border border-gray-300 rounded-md border-separate">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            {titles.map((title, index) => (
                                <TableHead key={index}>
                                    <div className="flex w-max overflow-x-auto">
                                        {title}
                                    </div>
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sources.map(source => (
                            <TableRow key={source.energyProduct}>
                                <TableCell>{source.energyProduct}</TableCell>
                                <TableCell>{source.consumptionType}</TableCell>
                                <TableCell>{source.documentNumber}</TableCell>
                                <TableCell>
                                    <div className="flex w-max overflow-auto">
                                        {source.quantitys} litres
                                    </div>
                                </TableCell>
                                <TableCell>{source.startdDate}</TableCell>
                                <TableCell>{source.enddDate}</TableCell>
                                <TableCell className="text-blue-500">Attachments</TableCell>
                                <TableCell className="flex items-center gap-2">
                                    <Button variant="ghost" className="p-0 flex gap-2 text-[12px] text-green-500 items-center text-[12px] hover:bg-transparent hover:text-green-700">
                                        <Edit className="w-5 h-5" />
                                    </Button>
                                    <div className="h-7 w-[1px] bg-gray-300"></div>
                                    <Button variant="ghost" className="p-0 flex gap-2 text-[12px] text-red-500 items-center text-[12px] hover:bg-transparent hover:text-red-700">
                                        <Trash2 className="w-5 h-5" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </div>
    );
}
