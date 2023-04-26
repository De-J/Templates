import newRequest from "@/utils/newRequest"
import { useState } from "react"

export default function Query1() {
    const [data, setData] = useState([])
    const [query, setQuery] = useState(1);


    const fetchData = async () => {
        const url = "/test?"
        switch (url) {
            case 1: {
                url += "car=BMW,Mercedes&max=5"
                break;
            }
            case 2: {
                url += "car=BMW,Mercedes&max=5"
                break;
            }
            case 3: {
                url += ""
                break;
            }
            case 4: {
                url += ""
                break;
            }
            case 5: {
                url += ""
                break;
            }
        }
        const res = await newRequest.get(url);
        if (res.data.length !== 0)
            setData(res.data)
        else setData([])
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        pageOptions,
        nextPage,
        canNextPage,
        previousPage,
        canPreviousPage,
        prepareRow,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            // initialState: { pageIndex: 0 },
            // manualPagination: true,
            // pageCount: controlledPageCount
        },
        usePagination
    )

    return (
        <div>
            <table {...getTableBodyProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            </div>
        </div>
    )
}
