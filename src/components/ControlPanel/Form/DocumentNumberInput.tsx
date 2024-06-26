import { TAddResourceForm } from "@/app/types/AddResourceForm";
import { FormField, FormItem, FormControl, FormLabel } from "../../ui/form";
import { Input } from "../../ui/input";

interface DocumentNumberInputProps {
    form: TAddResourceForm;
}

export default function DocumentNumberInput({ form }: DocumentNumberInputProps) {
    return (
    <FormField
        control={form.control}
        name="documentNumber"
        render={({ field }) => (
            <FormItem>
                <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500">Document</FormLabel>
                <FormControl>
                    <Input {...field} className='text-gray-400' />
                </FormControl>
                {form.formState.errors.documentNumber && (
                    <p className="text-red-500">{form.formState.errors.documentNumber.message}</p>
                )}
            </FormItem>
        )}
    />
)};
