"use client"
// for mobile sidebar
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";

import { Accordion } from "@/components/ui/accordion";
import { useState } from "react";
import CategoriesFilter from "./CategoriesFilter";
import PriceFilter from "./PriceFilter";

const SheetFilterMobile = () => {

    const [filter, setFilter] = useState({
        categories: ["development"],
        price: ["free"],
        sort: "",
    });

    //   apply checkbox filter
    const applyArrayFilter = ({ type, value }) => {
        const isFilterApplied = filter[type].includes(value);

        if (isFilterApplied) {
            setFilter((prev) => ({
                ...prev,
                [type]: prev[type].filter((v) => v !== value),
            }));
        } else {
            setFilter((prev) => ({
                ...prev,
                [type]: [...prev[type], value],
            }));
        }
    };
    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger>
                    <Filter className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle className="text-left">Filter Courses</SheetTitle>
                        <Accordion defaultValue={["categories"]} type="multiple">
                            {/* Categories filter */}
                            <CategoriesFilter filter={filter} />
                            {/* Price filter */}
                            <PriceFilter filter={filter} />
                        </Accordion>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default SheetFilterMobile