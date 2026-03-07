"use client"
import React, { useState } from 'react'
import CategoriesFilter from './CategoriesFilter';
import PriceFilter from './PriceFilter';
import { Accordion } from '@/components/ui/accordion';

const Filter = () => {
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
        <div className="hidden lg:block">
            <Accordion defaultValue={["categories"]} type="multiple">
                {/* Categories filter */}
                <CategoriesFilter filter={filter} />
                {/* Price filter */}
                <PriceFilter filter={filter} />
            </Accordion>
        </div>
    )
}

export default Filter