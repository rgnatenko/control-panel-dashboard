'use client'

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '../../ui/form';
import { Button } from '../../ui/button';
import EnergyProductSelect from './EnergyProductSelect';
import ConsumptionTypeSelect from './ConsumptionTypeSelect';
import DocumentNumberInput from './DocumentNumberInput';
import QuantitiesInput from './QuantitiesInput';
import DatePicker from './DatePicker';
import AttachmentsInput from './AttachmentsInput';

const formSchema = z.object({
    energyProduct: z.string().nonempty({
        message: 'Product must be selected'
    }),
    consumptionType: z.string().nonempty({
        message: 'Consumption type must be selected'
    }),
    documentNumber: z.number({
        message: 'Provide a document number'
    }),
    quantities: z.number({
        message: 'Provide quantities expected to be allocated'
    }),
    startDate: z.date(),
    endDate: z.date()
});

export default function AddResourseForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            energyProduct: "Gas",
            consumptionType: 'Thermal',
            documentNumber: 123456,
            quantities: 20,
            startDate: new Date('2024-12-16'),
            endDate: new Date('2024-12-16')
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(() => {})} className="flex flex-col gap-6">
                <EnergyProductSelect form={form} />
                <ConsumptionTypeSelect form={form} />
                <DocumentNumberInput form={form} />
                <QuantitiesInput form={form} />

                <DatePicker name="startDate" form={form} label="Start date" />
                <DatePicker name="endDate" form={form} label="End date" />

                <AttachmentsInput />

                <Button type='submit' className='w-full rounded-md' >Add</Button>
            </form>
        </Form>
    );
}
