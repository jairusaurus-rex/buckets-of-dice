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
                const vType = header.type
                return (
                  <th
                    key={`${index}_${header.objectName}`}
                    className={header.innerStyle ?? ""}
                  >
                    {
                      header.cellException
                        ? header.cellException(row, value)
                        : vType
                          ? vType === BucketTableTypeOptions.DICE
                            ? <span >
                              {`d${value}`}
                              <img role="button"
                                src={d4}
                                alt={`d4`}
                                className="h-5 w-5 inline-block"
                            />
                            </span>
                            : value
                          : value
                    }
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