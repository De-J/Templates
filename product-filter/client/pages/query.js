import { useTable, usePagination } from "react-table";
import { useState, useMemo, useEffect } from "react";
import newRequest from "@/utils/newRequest"

const query = [
    {
        id: 1,
        name: "Query1"
    },
    {
        id: 2,
        name: "Query2"
    },
    {
        id: 3,
        name: "Query3"
    },
    {
        id: 4,
        name: "Query4"
    },
    {
        id: 5,
        name: "Query5"
    }
]


export default function Query1() {
    const [data, setData] = useState([])
    const [queryNo, setQueryNo] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            let url = `/query${queryNo}?`
            switch (queryNo) {
                case 1: {
                    url += "car=BMW Mercedes&i_max=5"
                    break;
                }
                case 2: {
                    url += "gender=Male&p_max=10000"
                    break;
                }
                case 3: {
                    url += "last_name="
                    break;
                }
                case 4: {
                    url += "car=BMW,Mercedes,Audi&email=/^[^0-9]%2b$/"
                    break;
                }
                case 5: {
                    url += ""
                    break;
                }
            }
            const res = await newRequest.get(url)
            if (res.data.length !== 0)
                setData(res.data)
            else setData([])
        }
        fetchData();
    }, [queryNo])


    const columns = useMemo(() => [
        {
            Header: 'ID',
            accessor: 'id'
        },
        {
            Header: 'First Name',
            accessor: 'first_name'
        },
        {
            Header: 'Last Name',
            accessor: 'last_name',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Gender',
            accessor: 'gender',
        },
        {
            Header: 'Income',
            accessor: 'income',
        },
        {
            Header: 'City',
            accessor: 'city',
        },
        {
            Header: 'Car',
            accessor: 'car',
        },
        {
            Header: 'Quote',
            accessor: 'quote',
        },
        {
            Header: 'Phone Price',
            accessor: 'phone_price',
        }
    ], []
    )

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
        <>
            <div className="flex justify-center">
                {query.map(ele =>
                    <button
                        id={ele.id}
                        className="border border-black rounded-md p-1 mx-1 my-6"
                        onClick={() => setQueryNo(ele.id)}>
                        {ele.name}
                    </button>
                )}
            </div>
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
        </>
    )
}