
import { ImageButton }  from "../../../commons/ImageButton";
import character_pdf from "../../../../assets/pdfs/character_sheet.pdf";
import character_sheet from "../../../../assets/images/screen-shots/character_sheet.png";
import e_sheet from "../../../../assets/images/screen-shots/e_sheet.png";
import vessel_pdf from "../../../../assets/pdfs/vessel_sheet.pdf";
import vessel_sheet from "../../../../assets/images/screen-shots/vessel_sheet.png";


export const TheSpacerArticle = () => {
  const googleLink = "https://docs.google.com/spreadsheets/d/1XanhoaP44JRd34WC4tJUw8bQoAcmvwSF9JhHXmkr6GY/edit?usp=sharing";

  return (
    <div className={`p-2 text-justify `}>
      <div className="p-2">
        <p className="p-2">
          In the game <span className="text-3xl text-[var(--accent)]">Into the Heavens</span>, a <span className="text-xl text-[var(--text-h)]">spacer</span> is a person who travels the heavens, exploring the stars, planets, and other celestial bodies. They take on dangerous and odd jobs at the frontier of space, often working for corporations, governments, criminals, or as freelancers. Spacers are known for their resourcefulness, adaptability, and resilience in the face of the unknown.
        </p>
        <p className="p-2">
          Together, all the players' spacers form a <span className="text-xl text-[var(--text-h)]">crew</span> that 
          travels together on a <span className="text-xl text-[var(--text-h)]">vessel</span>, taking on jobs and facing challenges as a team.
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
          <ImageButton title="PDF Character Sheet" link={character_pdf} image={character_sheet} isLocalLink={false} />
          <ImageButton title="PDF Vessel Sheet" link={vessel_pdf} image={vessel_sheet} isLocalLink={false} />
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
          <ImageButton 
            title="Google Character Sheet" 
            link={googleLink} 
            image={e_sheet} 
            isLocalLink={false} 
            className="w-full md:w-1/2"/>
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
