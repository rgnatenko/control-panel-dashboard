import { FormControl, FormField, FormItem, FormLabel } from '../../ui/form';
import { Calendar } from '../../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { TAddResourceForm } from '@/app/types/AddResourceForm';
import { Button } from '../../ui/button';

interface DatePickerProps {
    form: TAddResourceForm;
    label: string;
    name: "startDate" | "endDate"
}

export default function DatePicker({ form, name, label }: DatePickerProps) {
    return (
    <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
            <FormItem className="flex flex-col">
                <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500">{label}</FormLabel>
                <Popover>
                    <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "pl-3 text-left font-normal justify-between text-slate-400 rounded-md",
                                    !field.value && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="h-4 w-4" />
                                {field.value ? (
                                    format(field.value, "yyyy-MM-dd")
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 absolute -bottom-16 left-0" align="center">
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
                {form.formState.errors[name] && (
                    <p className="text-red-500">{form.formState.errors[name]?.message}</p>
                )}
            </FormItem>
        )}
    />
)};
