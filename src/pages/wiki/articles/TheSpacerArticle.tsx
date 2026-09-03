
import character_sheet from "../../../assets/images/screen-shots/character_sheet.png";
import vessel_sheet from "../../../assets/images/screen-shots/vessel_sheet.png";
import e_sheet from "../../../assets/images/screen-shots/e_sheet.png";

import character_pdf from "../../../assets/pdfs/character_sheet.pdf";
import vessel_pdf from "../../../assets/pdfs/vessel_sheet.pdf";


export const TheSpacerArticle = () => {
  return (
    <div className={`p-2 text-justify `}>
      <div className="p-2">
        <p className="p-2">
          A spacer is a person who travels the heavens, exploring the stars, planets, and other celestial bodies. They take on dangerous and odd jobs at the frontier of space, often working for corporations, governments, criminals, or as freelancers. Spacers are known for their resourcefulness, adaptability, and resilience in the face of the unknown.
        </p>
        <p className="p-2">
          Together, all the players' spacers form a crew that travels together on a vessel, taking on jobs and facing challenges as a team.
        </p>
        <p className="p-2">
          Each player other than the GM creates, customizes, roleplays, and levels up their own spacer. Each player will have a character sheet to descrpibe and keep track of their spacer's stats, skills, gear, and other important information. The group of players will have a vessel sheet to keep track of the ship's stats, crew, and other important information.
        </p>
      </div>
      <div className="p-2 border-t border-[var(--border)]">
        <h3>Character Sheets</h3>
      </div>
      <div className="p-2 border-t border-[var(--border)]">
        <p className="p-2 font-bold">
          PDF
        </p>
        <p className="p-2">
          Find pdf of the character sheet and vessel sheet below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href={character_pdf}
            target="_blank"
            rel="noreferrer"
            className="flex h-40 flex-col overflow-hidden rounded-lg border-2 border-[var(--accent)] hover:opacity-90 transition-opacity"
          >
            <div className="shrink-0 bg-[var(--accent)] p-2 text-center font-bold text-white">
              PDF Character Sheet
            </div>

            <div className="min-h-0 flex-1">
              <img
                src={character_sheet}
                alt="Character Sheet"
                className="h-full w-full object-cover"
              />
            </div>
          </a>

          {/*  2 */}
          <a
            href={vessel_pdf}
            target="_blank"
            className="block overflow-hidden rounded-lg border-2 border-[var(--accent)] 
                   hover:opacity-90 transition-opacity h-40"
          >
            <div className="bg-[var(--accent)] text-white text-center font-bold p-2">
              PDF Vessel Sheet
            </div>

            <div className="min-h-0 flex-1">
              <img
                src={vessel_sheet}
                alt="Vessel Sheet"
                className="h-full w-full object-cover"
              />
            </div>
          </a>

        </div>
      </div>
      <div className="p-2 border-t border-[var(--border)]">
        <p className="p-2 font-bold">
          Google Sheets
        </p>
        <p className="p-2">
          The Google Sheets version of the character sheet and vessel sheet are linked below. You can make a copy of these sheets to use for your own game.
        </p>
        <div className="mt-4 flex justify-center">
          <a
            href="https://docs.google.com/spreadsheets/d/1XanhoaP44JRd34WC4tJUw8bQoAcmvwSF9JhHXmkr6GY/edit?usp=sharing"
            target="_blank"
            className="block overflow-hidden rounded-lg border-2 border-[var(--accent)] 
                   hover:opacity-90 transition-opacity h-40 w-full md:w-1/2"
          >
            <div className="bg-[var(--accent)] text-white text-center font-bold p-2">
              Google Character Sheet
            </div>

            <div className="overflow-hidden h-48">
              <img
                src={e_sheet}
                alt="Vessel Sheet"
                className="w-full h-auto"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="p-2 border-t border-[var(--border)]">
        <p className="p-2 font-bold">
          Digital Character sheet
        </p>
        <p className="p-2">
          A digital character sheet is in the works and will be available on this site. 
        </p>
      </div>
    </div>
  );
}
