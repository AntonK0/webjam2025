import React from 'react';

const ChipMultiSelect = () => {
    return (
        <div className="min-h-screen bg-base-200 p-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">Filter using HTML form, checkboxes, and a reset button</h1>
                <p className="mb-4">For having multiple choices, use checkboxes. It doesn't need the filter class name.</p>
                
                <form className="join">
                    <input className="join-item btn" type="checkbox" name="frameworks" aria-label="Svelte"/>
                    <input className="join-item btn" type="checkbox" name="frameworks" aria-label="Vue"/>
                    <input className="join-item btn" type="checkbox" name="frameworks" aria-label="React"/>
                    <input className="join-item btn btn-square" type="reset" value="×"/>
                </form>
            </div>
        </div>
    )
};

export default ChipMultiSelect;