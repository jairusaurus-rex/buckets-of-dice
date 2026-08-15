export const SpeciesMain = () => {
    return (
        <div className="p-4">
            <p className="p-2">Every spacer is a member of a unique species. When selecting a species, gain a special Species Feat.</p>
            <table className="w-full border-collapse text-left">
                <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                        <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                            Name
                        </th>
                        <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                            Brief Description
                        </th>
                        <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                            Species Feat
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Bek</td>
                        <td className="px-4 py-3">
                            Humanoids with bat ears, black horns, and leather wings that fold into
                            a cape.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Leather Wings:</strong> Gain the Flight ability.
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Chyrax</td>
                        <td className="px-4 py-3">
                            Humanoid reptilian people with small tails who can change the color of
                            their scales at will.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Camo Scales:</strong> Gain a d8 bonus on all Stealth checks.
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Drakari</td>
                        <td className="px-4 py-3">
                            Honorable warriors of the Star Alliance who resemble Utah Raptors.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Claws and Teeth:</strong> Gain a d6 bonus on attacks against
                            targets in the same zone.
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Droids</td>
                        <td className="px-4 py-3">
                            Some are built individually, some are built en masse, and some are a
                            race of free machines. Each has their own degree of sapience and free
                            will, up to the player.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Modular Feat: Cybernetics:</strong> Also able to gain the
                            Advanced version at level 3 and Mastery version at level 6.
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Empian</td>
                        <td className="px-4 py-3">
                            Elegant people with large eyes and large, fuzzy ears. They are all
                            born with psychic abilities.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Modular Feat: Psionics:</strong> Also able to gain the Advanced
                            version at level 3 and Mastery version at level 6.
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Feyra</td>
                        <td className="px-4 py-3">
                            Long-lived humanoids with goat-like horns, ears, eyes, and feet.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Long Lived:</strong> Gain a d8 benefit when using your age to
                            influence people and when using the Navigation post.
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Flona</td>
                        <td className="px-4 py-3">
                            Plant-based humanoids with leaves that resemble hair and clothing.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Plant Regeneration:</strong> Gain a d10 bonus whenever healing
                            your own Grit.
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Humans</td>
                        <td className="px-4 py-3">
                            Not much has changed in 1,000 years.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Skilled:</strong> Improve two skills that are at d4 and one
                            that is at d6.
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Locanus</td>
                        <td className="px-4 py-3">
                            Insect-like humanoids. They are one of the few aliens humans have
                            contacted that have little to do with the Star Alliance.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Keen Sight:</strong> Gain a d6 bonus on attacks against targets
                            that are not in the same zone or an adjacent zone.
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Pawnian</td>
                        <td className="px-4 py-3">
                            Grey-skinned, monkey-like humanoids with long, monkey-like tails.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Adaptable:</strong> Pick any non-modular feat.
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Rhazak</td>
                        <td className="px-4 py-3">
                            Dragon-like humanoids who are violent in nature, but follow some codes
                            of honor.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Breath Weapon:</strong> Gain a d6 bonus on attacks against
                            targets that are in an adjacent zone.
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Urzi</td>
                        <td className="px-4 py-3">
                            Large, bear-like people.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Thick Hide:</strong> Gain a d6 bonus on Defense checks when all
                            attacks are in the same or adjacent zones.
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Velki</td>
                        <td className="px-4 py-3">
                            Deer-like humanoids with thick exoskin resembling skulls, small antlers,
                            and hooved feet.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Nimble Footed:</strong> Gain one free movement per turn.
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="px-4 py-3 font-semibold">Vrants</td>
                        <td className="px-4 py-3">
                            A group of humans altered themselves genetically, making all their
                            descendants superhuman. They have black eyes with brightly colored
                            irises and travel in groups of nomads.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Modular Feat: Modified:</strong> Also able to gain the Advanced
                            version at level 3 and Mastery version at level 6.
                        </td>
                    </tr>

                    <tr>
                        <td className="px-4 py-3 font-semibold">Zivren</td>
                        <td className="px-4 py-3">
                            Small, badger- or weasel-like humanoids.
                        </td>
                        <td className="px-4 py-3">
                            <strong>Scurry:</strong> Gain a d6 bonus on Defense checks when all
                            attacks are not in the same zone.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}