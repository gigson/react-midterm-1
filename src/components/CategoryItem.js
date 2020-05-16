import React from 'react';


function CategoryItem({item, handleItemClick}) {
    return (
        <div className="card" onClick={handleItemClick}>
            {item}
        </div>
    );
}

export default CategoryItem;
