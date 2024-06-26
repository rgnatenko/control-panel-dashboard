import { ChangeEvent, useRef, useState } from 'react';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { FormItem, FormLabel } from '../../ui/form';

export default function AttachmentsInput() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [fileName, setFileName] = useState('');

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);

            return;
        }

        setFileName('');
    };

    return (
        <FormItem>
            <FormLabel className="after:content-['*'] after:ml-0.5 after:text-red-500">Attachments</FormLabel>
            <div className="relative">
                <Input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                />

                <Input
                    type="text"
                    placeholder="Click to upload the file"
                    value={fileName}
                    readOnly
                    className="text-gray-400 cursor-pointer"
                    onClick={handleButtonClick}
                />
                <Button onClick={handleButtonClick} className='absolute top-0 right-0 rounded-l-none rounded-r-md'>
                    Attach a file
                </Button>
            </div>
            <span className='text-[9px] text-gray-500'>
                Supported file types JPEG PNG JPG Maximum number of attachments 1
            </span>
        </FormItem>
    );
};
