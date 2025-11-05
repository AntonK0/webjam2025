import React, { useState } from 'react';
import Chip from './Chip';

const ChipMultiSelect = () => {
    const [selected, setSelected] = useState<string[]>([]);
    
    const options = ['Fine', 'Medium', 'Coarse'];
    
    const toggleOption = (option: string) => {
        setSelected(prev => 
            prev.includes(option) 
                ? prev.filter(item => item !== option)
                : [...prev, option]
        );
    };

    return (
        <div className="min-h-screen bg-white p-8">
            <div className="flex gap-2 flex-wrap">
                {options.map(option => (
                    <Chip
                        key={option}
                        label={option}
                        selected={selected.includes(option)}
                        onClick={() => toggleOption(option)}
                    />
                ))}
            </div>
        </div>
    )
};

export default ChipMultiSelect;