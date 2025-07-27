import React, { useState } from 'react'

const allBrands = [
    { id: "1", brandName: "puma" },
    { id: "2", brandName: "adidas" },
    { id: "3", brandName: "nike" },
    { id: "4", brandName: "fila" },
    { id: "5", brandName: "reebook" },
]
const BrandFilter = () => {

    const [brandObject, setBrandObject] = useState(allBrands);

    const BrandList = () => {
        return (
            <ul>
                {
                    brandObject.map((brand) => {
                        return <li key={brand.id}>{brand.brandName}</li>
                    })
                }
            </ul>
        )
    }

    const filterSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        const filteredBrands = allBrands.filter((brand) =>
            brand.brandName.toLowerCase().includes(searchValue)
        );
        setBrandObject(filteredBrands);
    };

    return (
        <div>
            <input placeholder='Enter Search' onChange={filterSearch}></input>
            <BrandList />
        </div>
    )
}

export default BrandFilter
