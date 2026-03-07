import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";


const PriceFilter = ({filter}) => {
    const PRICE_OPTIONS = [
        { label: "Free", value: "free" },
        { label: "Paid", value: "paid" },
    ];
    return (
        <AccordionItem value="price">
            <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">Price</span>
            </AccordionTrigger>

            <AccordionContent className="pt-6 animate-none">
                <ul className="space-y-4">
                    {PRICE_OPTIONS.map((option, optionIdx) => (
                        <li
                            key={option.value}
                            className="flex items-center"
                        >
                            <Checkbox
                                type="checkbox"
                                id={`price-${optionIdx}`}
                                onCheckedChange={() => {
                                    applyArrayFilter({
                                        type: "price",
                                        value: option.value,
                                    });
                                }}
                                checked={filter.price.includes(option.value)}
                            />
                            <label
                                htmlFor={`price-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600 cursor-pointer"
                            >
                                {option.label}
                            </label>
                        </li>
                    ))}
                </ul>
            </AccordionContent>
        </AccordionItem>
    )
}

export default PriceFilter