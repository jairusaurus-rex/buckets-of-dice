import type { HeaderInfoType } from "../../../../commons/BucketTable"
import BucketTable from "../../../../commons/BucketTable"
import { SpeciesData } from "../../../../../assets/data/SpeciesData"
import { Link } from "react-router-dom"
import DiceTextString from "../../../../commons/DiceTextString"

export const SpeciesMain = () => {

    const speciesTable: HeaderInfoType[] = [
        {
            objectName: "name", headerName: "Name",
            cellException: (row, value) => (
                <Link to={row.link}>
                    {value}
                </Link>
            )
        },
        { objectName: "description", headerName: "Description", innerStyle: " p-1 text-sm   font-normal" },
        {
            objectName: "featName", headerName: "Feat", innerStyle: " p-1 text-sm font-normal",
            cellException: (row, value) => (
                <>
                    <strong>{value} </strong>
                    <span> - <DiceTextString>{row.featDescription}</DiceTextString></span>
                </>
            )
        },
    ]

    const speciesTableData = SpeciesData;

    return (
        <div className="p-4">
            <p className="p-2">Every spacer is a member of a unique species. When selecting a species, gain a special Species Feat.</p>
            <BucketTable headerInfo={speciesTable} rows={speciesTableData} />
        </div>
    )
}