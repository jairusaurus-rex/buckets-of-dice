export type HeaderInfoType = {
  objectName: string;
  headerName: string;
  innerStyle?: string;
  type?: string
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
              {headerInfo.map((header) => (
                <th key={`${index}_${header.objectName}`} className={header.innerStyle ?? ""}>
                  {row[header.objectName]}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
}