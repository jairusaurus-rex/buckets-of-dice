import { DiceText } from "./DiceText";


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



export const BucketTable = ({
  title,
  headerInfo,
  rows
}: BucketTableProps) => {
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
                  return (
                    <th
                      key={`${index}_${header.objectName}`}
                      className={header.innerStyle ?? ""}
                    >
                      <DiceText>{value}</DiceText>
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