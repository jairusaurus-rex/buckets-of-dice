import type { HeaderInfoType } from "../../../../components/commons/BucketTable"
import BucketTable from "../../../../components/commons/BucketTable"
import { SpeciesData } from "../../../../assets/data/SpeciesData"

export const SpeciesMain = () => {

    const speciesTable: HeaderInfoType[] = [
        { objectName: "name", headerName: "Name" },
        { objectName: "description", headerName: "Description", innerStyle: " p-1 text-sm   font-normal"},
        { objectName: "featName", headerName: "Feat", innerStyle: " p-1 text-sm"},
        { objectName: "featDescription", headerName: "Feat Description", innerStyle: " p-1 text-sm  font-normal  " },
    ]

    const speciesTableData = SpeciesData;

    return (
        <div className="p-4">
            <p className="p-2">Every spacer is a member of a unique species. When selecting a species, gain a special Species Feat.</p>
            <BucketTable headerInfo={speciesTable} rows={speciesTableData} /> 
        </div>
    )
}