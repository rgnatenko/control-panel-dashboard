import { FormControl, FormField, FormItem, FormLabel } from '../../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { TAddResourceForm } from '@/app/types/AddResourceForm';

interface EnergyProductSelectProps {
    form: TAddResourceForm;
}

export default function EnergyProductSelect({ form }: EnergyProductSelectProps) {
    return (
    <FormField
        control={form.control}
        name="energyProduct"
        render={({ field }) => (
            <FormItem>
                <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500">Energy product</FormLabel>
                <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger className='text-gray-400'>
                            <SelectValue placeholder="Select energy product" />
                        </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                        <SelectItem value='Gas'>Gas</SelectItem>
                        <SelectItem value='Diesel'>Diesel</SelectItem>
                    </SelectContent>
                </Select>
                {form.formState.errors.energyProduct && (
                    <p className="text-red-500">{form.formState.errors.energyProduct.message}</p>
                )}
            </FormItem>
        )}
    />
)};
