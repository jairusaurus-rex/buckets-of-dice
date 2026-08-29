
import styles from "../../Articles.module.css";

export const GearArticle = () => {
    return (
        <div className="p-2 text-justify">
            <p className="p-2">Like skills, all gear are paired with a number 4-12, 4 being the lowest quality item and 12 being the best. They
                corospond to dice that can be used in a dice pool. A Spacer is more likely able to be successful at a task if their skill is paired
                with a gear item</p>
            <p className="p-2">Gear are broken into two categories. Suit Gear and Non Suit Gear. Suit Gear are four specific gear items attached to a
                spacer's Star Suit. Non Suit Gear are gear items that are carried and used apart of the Star Suit</p>
            <h3 className="font-bold">Buying</h3>
            <p className="p-2">You can spend 10 credits to get a new gear. To buy new gear, the tech level of the area must be at least 2. All new
                gear starts at d4.</p>
            <p className="p-2">You can only have one Star Suit Accent at a time but you can spend 10 credits to change your accent, it’s dice stays
                the same. The Tech level of the area you are in must equal the accent dice to do this </p>
            <h3 className="font-bold">Upgrading</h3>
            <table className={`m-4 border-collapse text-left w-full md:w-1/2 float-none md:float-right border border-[var(--border)] text-center`}>
                <thead className="text-center">
                    <tr className="border-b border-[var(--border)] ">
                        <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                            Gear
                        </th>
                        <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                            Cost to upgrade
                        </th>
                        <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                            Total spent (for reference)
                        </th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    <tr className="border-b border-[var(--border)]">
                        <td className="p-1">-</td>
                        <td className="p-1">10</td>
                        <td className="p-1">N/A</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                        <td className="p-1">D4</td>
                        <td className="p-1">20</td>
                        <td className="p-1">10</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                        <td className="p-1">D6</td>
                        <td className="p-1">30</td>
                        <td className="p-1">30</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                        <td className="p-1">D8</td>
                        <td className="p-1">40</td>
                        <td className="p-1">60</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                        <td className="p-1">D10</td>
                        <td className="p-1">50</td>
                        <td className="p-1">100</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                        <td className="p-1">D12</td>
                        <td className="p-1">N/A</td>
                        <td className="p-1">150</td>
                    </tr>
                </tbody>
            </table>

            <p className="p-2">You can upgrade a gear you already have by spending 5 times the current dice of that gear. When you do so, you can
                increase that gear by 2. The max a gear can be is 12. To upgrade, the area’s tech level must be at least the current dice of the item
                you are upgrading</p>

            <h3 className="font-bold clear-both">Selling</h3>
            <table className={`m-4 border-collapse text-left w-1/2 md:w-1/4 float-right md:float-left border border-[var(--border)] text-center`}>
                <thead className="text-center">
                    <tr className="border-b border-[var(--border)] ">
                        <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                            Gear
                        </th>
                        <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                            Cost to upgrade
                        </th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    <tr className="border-b border-[var(--border)]">
                        <td className="p-1">D4</td>
                        <td className="p-1">5</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                        <td className="p-1">D6</td>
                        <td className="p-1">15</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                        <td className="p-1">D8</td>
                        <td className="p-1">30</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                        <td className="p-1">D10</td>
                        <td className="p-1">50</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                        <td className="p-1">D12</td>
                        <td className="p-1">75</td>
                    </tr>
                </tbody>
            </table>

            <p className="p-2">You can sell gear for half its cost. The cost includes all the upgrades to get to this point, to make selling 
                worthwhile. For the sake a ease, you can reference the below cost</p>
            <h3 className="font-bold">Star Suit</h3>
            <p className="p-2">You can upgrade a Star Suit gear as normal.</p>
            <p className="p-2">You can only have one Star Suit Accent at a time but you can spend 10 credits to change your accent, it’s dice stays
                the same. The Tech level of the area you are in must equal the accent dice to do this </p>
                <p className="p-2">You can change your Star Suit Accent by spending 10 credits. It’s dice stays the same. The Tech level of the area 
                    you are in must equal the accent dice to do this  </p>
        </div>
    )
}