import React from 'react'
import CategoriesFilter from './CategoriesFilter';
import PriceFilter from './PriceFilter';
import { Accordion } from '@/components/ui/accordion';

const Filter = ({filter}) => {
    return (
        <div className="hidden lg:block">
            <Accordion defaultValue={["categories"]} type="multiple">
                {/* Categories filter */}
                <CategoriesFilter filter={filter}/>
                {/* Price filter */}
                <PriceFilter filter={filter}/>
            </Accordion>
        </div>
    )
}

export default Filter