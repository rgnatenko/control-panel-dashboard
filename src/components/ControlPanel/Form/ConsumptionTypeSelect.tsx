import { FormControl, FormField, FormItem, FormLabel } from '../../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { TAddResourceForm } from '@/app/types/AddResourceForm';

interface ConsumptionTypeSelectProps {
    form: TAddResourceForm;
}

export default function ConsumptionTypeSelect({ form }: ConsumptionTypeSelectProps) {
    return (
    <FormField
        control={form.control}
        name="consumptionType"
        render={({ field }) => (
            <FormItem>
                <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500">Consumption type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger className='text-gray-400'>
                            <SelectValue placeholder="Select consumption type" />
                        </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                        <SelectItem value='Thermal'>Thermal</SelectItem>
                    </SelectContent>
                </Select>
                {form.formState.errors.consumptionType && (
                    <p className="text-red-500">{form.formState.errors.consumptionType.message}</p>
                )}
            </FormItem>
        )}
    />
)};
