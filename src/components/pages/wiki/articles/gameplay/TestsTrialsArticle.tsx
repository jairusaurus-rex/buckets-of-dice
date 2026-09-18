export const TestsTrialsArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3 className="font-bold">Types of Dice Checks</h3>
                <p className="p-2">
                    A dice check usually answers one of two questions: how well did
                    someone succeed, or did someone succeed at all? The type of check
                    determines how to use the result.
                </p>
                <p className="p-2">
                    There are two types of dice checks: an Individual Test and a Group
                    Trial. Tests and Trials can also be Challenges when the check needs
                    a clear success-or-failure result.
                </p>
            </div>

            <div className="p-2 border-t border-[var(--border)]">
                <h3 className="font-bold">Individual Test</h3>
                <p className="p-2">
                    An Individual Test, usually called a Test, determines the result of
                    a specific personal task. Healing yourself, defending yourself, or
                    attacking an enemy are examples of Tests.
                </p>
                <p className="p-2">
                    The result shows how well the task was performed. It may determine
                    how many hit points were recovered, how much damage was reduced, or
                    how much damage was dealt.
                </p>
            </div>

            <div className="p-2 border-t border-[var(--border)]">
                <h3 className="font-bold">Group Trial</h3>
                <p className="p-2">
                    A Group Trial, usually called a Trial, determines how successful the
                    players were as a team. Each player who wishes to roll may make a
                    check. A player may choose not to roll, either because they fear a
                    Batch or because they do not want to participate.
                </p>
                <p className="p-2">
                    The highest result rolled by the team is the result of the Trial.
                    Like a Test, that result determines how successful the task was.
                </p>
                <p className="p-2">
                    Sometimes players can choose between multiple teams. The highest
                    result in each team becomes that team&apos;s result. Typically, a
                    player can participate in only one team for a Trial. Vessel Travel
                    and Vessel Combat are examples: during each round, a player can
                    choose a team, or post, to join for that Trial.
                </p>
            </div>

            <div className="p-2 border-t border-[var(--border)]">
                <h3 className="font-bold">Challenges</h3>
                <p className="p-2">
                    A Test or Trial sometimes needs a simple success-or-failure answer.
                    This is a Challenge. The check has a target number, and the result
                    must meet or beat that number to succeed.
                </p>
                <p className="p-2">
                    The usual target number is <strong>5</strong>. Extreme tasks may
                    have a target of <strong>10</strong>, legendary tasks may have a
                    target of <strong>15</strong>, and impossible tasks may have a
                    target of <strong>20</strong>.
                </p>
                <p className="p-2">
                    If all players are allowed to attempt the Challenge, each player
                    may try once.
                </p>
            </div>
        </div>
    );
};