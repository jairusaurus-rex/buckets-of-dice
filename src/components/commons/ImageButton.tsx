import { Link } from "react-router-dom";

type ImageButtonProps = {
  title: string;
  link: string;
  image: string;
  className?: string;
  isLocalLink?: boolean;
}

export const ImageButton = ({
  title,
  link,
  image,
  className = "",
  isLocalLink = true,
}: ImageButtonProps) => {
  return (
    <div className={`
       ${className} 
       flex h-40 
       flex-col 
       overflow-hidden 
       rounded-lg 
       border-2 border-[var(--accent)] 
       hover:opacity-50 transition-opacity`}>
      {isLocalLink ?
        <Link to={link}>
          <>
            <div className="shrink-0 bg-[var(--accent)] p-2 text-center font-bold text-white">
              {title}
            </div>
            <div className="min-h-0 flex-1">
              <img
                src={image}
                alt={link}
                className="h-full w-full object-cover"
              />
            </div>
          </>
        </Link>
        :
        <a href={link} target="_blank" rel="noreferrer">
          <div className="shrink-0 bg-[var(--accent)] p-2 text-center font-bold text-white">
            {title}
          </div>
          <div className="min-h-0 flex-1">
            <img
              src={image}
              alt={link}
              className="h-full w-full object-cover"
            />
          </div>
        </a>
      }
    </div >
  );
}