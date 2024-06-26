import { Control, UseFormReturn } from "react-hook-form";

export type TAddResourceFormControl = Control<{
    energyProduct: string;
    consumptionType: string;
    documentNumber: number;
    quantities: number;
    startDate: Date;
    endDate: Date;
}>;

export type TAddResourceForm = UseFormReturn<{
    energyProduct: string;
    consumptionType: string;
    documentNumber: number;
    quantities: number;
    startDate: Date;
    endDate: Date;
}, any, undefined>;
