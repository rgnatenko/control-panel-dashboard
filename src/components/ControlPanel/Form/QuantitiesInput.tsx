import { TAddResourceForm } from "@/app/types/AddResourceForm";
import { FormField, FormItem, FormControl, FormLabel } from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

interface QuantitiesInputProps {
    form: TAddResourceForm;
}

export default function QuantitiesInput({ form }: QuantitiesInputProps) {
    return (
        <FormField
            control={form.control}
            name="quantities"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500">Quantities expected to be allocated</FormLabel>
                    <FormControl>
                        <div className="relative">
                            <Input {...field} className='text-gray-400' />
                            <Button className='absolute top-0 right-0 bg-gray-200 text-slate-500 rounded-l-none rounded-r-md hover:text-slate-800'>
                                KW
                            </Button>
                        </div>
                    </FormControl>

                    {form.formState.errors.quantities && (
                        <p className="text-red-500">{form.formState.errors.quantities.message}</p>
                    )}
                </FormItem>
            )}
        />
    );
}
