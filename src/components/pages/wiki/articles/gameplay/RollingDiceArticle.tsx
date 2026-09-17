export const RollingDiceArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3 className="font-bold">Dice Checks</h3>
                <p className="p-2">
                    Dice checks determine the degree of success when a character attempts
                    something uncertain or difficult.
                </p>
                <p className="p-2">
                    Start with one skill die or combat die. Add one gear die if the gear
                    can help with the check, and one reputation die if the character&apos;s
                    reputation applies. Feats may provide special dice or allow additional
                    dice from a category.
                </p>
            </div>

            <div className="p-2 border-t border-[var(--border)]">
                <h3 className="font-bold">Building the Dice Pool</h3>
                <p className="p-2">
                    All dice assembled for the check form the dice pool. Roll every die
                    together, then determine the result from the numbers rolled.
                </p>
                <p className="p-2">
                    For example, a check might use a d4 skill die, a d6 gear die, and a
                    d6 reputation die.
                </p>
            </div>

            <div className="p-2 border-t border-[var(--border)]">
                <h3 className="font-bold">Determining the Result</h3>
                <p className="p-2">
                    The result is normally the highest number rolled on any die.
                </p>
                <p className="p-2">
                    A pair of matching numbers can replace the highest single number.
                    Add the pair together, making it possible for a pair to produce a
                    result higher than either die could produce alone.
                </p>
                <p className="p-2">
                    Only one pair may be used for a check. If multiple pairs are rolled,
                    use the larger pair.
                </p>
            </div>

            <div className="p-2 border-t border-[var(--border)]">
                <h3 className="font-bold">Batch</h3>
                <p className="p-2">
                    If every die in the pool rolls a one, the check is a batch. The
                    result is <strong>0</strong>, and the character takes damage equal
                    to the number of dice rolled.
                </p>
            </div>

            <div className="p-2 border-t border-[var(--border)]">
                <h3 className="font-bold">Examples</h3>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li><strong>(3, 4, 5):</strong> The result is 5.</li>
                    <li><strong>(4, 4, 5):</strong> The result is 8 because the pair of fours is higher than 5.</li>
                    <li><strong>(4, 4, 4):</strong> The result is 8 because only one pair can be used.</li>
                    <li><strong>(2, 2, 5):</strong> The result is 5 because 5 is higher than the pair of twos.</li>
                    <li><strong>(1, 1, 1):</strong> This is a batch. The result is 0 and the character takes 3 damage.</li>
                </ul>
            </div>
        </div>
    );
};