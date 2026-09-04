import { Link } from "react-router"
import type { HeaderInfoType } from "../../../../commons/BucketTable"
import { BucketTable, BucketTableTypeOptions } from "../../../../commons/BucketTable"
import { DiceText } from "../../../../commons/DiceText"
import { WikiArticleLinks } from "../../../../../data-types/enums/wiki-article-enum"


export const GearArticle = () => {

    const upgradeGearTable: HeaderInfoType[] = [
        { objectName: "dieRate", headerName: "Gear", type: BucketTableTypeOptions.DICE},
        { objectName: "price", headerName: "Cost to upgrade", type: BucketTableTypeOptions.CURRENCY },
    ]

    const sellGearTable: HeaderInfoType[] = [
        { objectName: "dieRate", headerName: "Gear", type: BucketTableTypeOptions.DICE},
        { objectName: "price", headerName: "Sell Amount", type: BucketTableTypeOptions.CURRENCY },
    ]

    const upgradeData = [
        { dieRate: 4, price: 20 },
        { dieRate: 6, price: 30 },
        { dieRate: 8, price: 40 },
        { dieRate: 10, price: 50 },
    ]

    const sellData = [
        { dieRate: 4, price: 5 },
        { dieRate: 6, price: 15 },
        { dieRate: 8, price: 30 },
        { dieRate: 10, price: 50 },
        { dieRate: 12, price: 75 },
    ]

    return (
        <div className="p-2 text-justify">
            <p className="p-2">Like skills, all gear are paired with a 
                number <DiceText>4</DiceText>, <DiceText>6</DiceText>, <DiceText>8</DiceText>, <DiceText>10</DiceText>, or <DiceText>12</DiceText>. <DiceText>4</DiceText> being the lowest quality item 
                and <DiceText>12</DiceText> being the best. They
                corospond to dice that can be used in a dice pool. A Spacer is more likely able to be successful at a task if their skill is paired
                with a gear item</p>
            <p className="p-2">Gear are broken into two categories. Suit Gear and Non Suit Gear. Suit Gear are four specific 
                gear items attached to a
                spacer's Star Suit. See Star Suit page <Link to={`/wiki/${WikiArticleLinks.GEAR_SUIT}`}>here</Link>. Non 
                Suit Gear are gear items that are carried and used apart of the Star Suit. See Non-Suit Gear page <Link to={`/wiki/${WikiArticleLinks.GEAR_NON_SUIT}`}>here</Link></p>
            <h3 className="font-bold">Buying</h3>
            <p className="p-2">You can spend 10 credits to get a new gear. To buy new gear, the tech level of the area must be at least 2. All new
                gear starts at <DiceText>4</DiceText>.</p>
            <p className="p-2">You can only have one Star Suit Accent at a time but you can spend 10 credits to change your accent, it’s dice stays
                the same. The Tech level of the area you are in must equal the accent dice to do this </p>
            <div  className={`w-1/2 md:w-1/4 float-left m-2 border border-[var(--border)]`}>
                <BucketTable title="Upgrade Cost" headerInfo={upgradeGearTable} rows={upgradeData} /> 
            </div>
            <h3 className="font-bold">Upgrading</h3>

            <p className="p-2">You can upgrade a gear you already have by spending 5 times the current dice of that gear. When you do so, you can
                increase that gear by 2. The max a gear can be is <DiceText>12</DiceText>. To upgrade, the area’s tech level must be at least the current dice of the item
                you are upgrading</p>

            <div  className={`w-1/2 md:w-1/4 float-right m-2 border border-[var(--border)]`}>
                <BucketTable title="Sell Price" headerInfo={sellGearTable} rows={sellData} /> 
            </div>
            <h3 className="font-bold ">Selling</h3>

            <p className="p-2">You can sell gear for half its cost. The cost includes all the upgrades to get to this point, to make selling
                worthwhile. For the sake a ease, you can reference the below cost</p>
            <h3 className="font-bold">Star Suit</h3>
            <p className="p-2">You cannot buy or sell Star Suit gear. </p>
            <p className="p-2">You can upgrade a Star Suit gear as normal. </p>
            <p className="p-2">You can change your Star Suit Accent by spending 10 credits. It’s dice stays the same. The Tech level of the area
                you are in must equal the accent dice to do this  </p>
        </div>
    )
}