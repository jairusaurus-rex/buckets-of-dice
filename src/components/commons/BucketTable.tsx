import d4 from "../../assets/images/dice/d4.png";
import d6 from "../../assets/images/dice/d6.png";
import d8 from "../../assets/images/dice/d8.png";
import d10 from "../../assets/images/dice/d10.png";
import d12 from "../../assets/images/dice/d12.png";
import styles from "../layouts/Layout.module.css";

export const BucketTableTypeOptions = {
  DICE: "DICE",
  DATE: "DATE",
  CURRENCY: "CURRENCY"
} as const;

export type BucketTableTypeOptionsEnum = typeof BucketTableTypeOptions[keyof typeof BucketTableTypeOptions];

export type HeaderInfoType = {
  objectName: string;
  headerName: string;
  innerStyle?: string;
  type?: string;
  cellException?: (
    row: any,
    value: any
  ) => React.ReactNode;
}

type BucketTableProps = {
  title?: string;
  headerInfo: HeaderInfoType[];
  rows: any[]
}

const dieImageMap: Record<number, string> = {
  4: d4,
  6: d6,
  8: d8,
  10: d10,
  12: d12,
};

const dieTextClassMap: Record<number, string> = {
  4: styles.textD4,
  6: styles.textD6,
  8: styles.textD8,
  10: styles.textD10,
  12: styles.textD12,
};

export default function BucketTable({
  title,
  headerInfo,
  rows
}: BucketTableProps) {
  return (
    <div className="p-1 m-1">
      <table className="border border-[var(--border)]  w-full">
        {
          title &&
          <caption className="caption-top">
            {title}
          </caption>
        }
        <thead className="text-center bg-[var(--accent)] text-white">
          <tr>
            {headerInfo.map((header) => (
              <th key={header.objectName} className="p-1">
                {header.headerName}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-center">
          {rows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-[var(--bg)]" : "bg-[var(--code-bg)]"}>
              {headerInfo.map((header) => {
                const value = row[header.objectName];
                const vType = header.type;

                if (header.cellException) {
                  return (
                    <th
                      key={`${index}_${header.objectName}`}
                      className={header.innerStyle ?? ""}
                    >
                      {header.cellException(row, value)}
                    </th>
                  );
                }

                if (vType === BucketTableTypeOptions.DICE) {
                  const dieValue = Number(value);
                  const imageSrc = dieImageMap[dieValue] ?? d4;
                  const textClass = dieTextClassMap[dieValue] ?? "";

                  return (
                    <th
                      key={`${index}_${header.objectName}`}
                      className={header.innerStyle ?? ""}
                    >
                      <span className="inline-flex items-center gap-[2px] leading-none">
                        <span className={`${textClass}`}>{`d${dieValue}`}</span>
                        <img
                          src={imageSrc}
                          alt={`d${dieValue}`}
                          className="inline-block object-contain"
                          style={{ width: "15px", height: "15px" }}
                        />
                      </span>
                    </th>
                  );
                }

                if (vType === BucketTableTypeOptions.CURRENCY) {

                  return (
                    <th
                      key={`${index}_${header.objectName}`}
                      className={header.innerStyle ?? ""}
                    >
                      {value} <span className="text-xs text-[val(--muted)]">k credits</span>
                    </th>
                  );
                }

                return (
                  <th
                    key={`${index}_${header.objectName}`}
                    className={header.innerStyle ?? ""}
                  >
                    {value}
                  </th>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
}