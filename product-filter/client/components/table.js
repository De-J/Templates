import newRequest from "@/utils/newRequest";
import { useEffect, useMemo } from "react";
import { useTable, usePagination } from "react-table";
import fakedata from "../sample_data.json";

export default function Table(props) {

    // const query = useQuery({
    //     queryKey: ["Users"]
    // })


    const data = useMemo(() => fakedata, []);

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

    // function Table({
    //     columns,
    //     data,
    //     fetchData,
    //     loading,
    //     pageCount: controlledPageCount
    // }) {
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

        useEffect(() => {
            console.log(pageIndex, pageSize);
            newRequest.get(`/query?idx=${pageIndex}&size=${pageSize}`)
        }, [])

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
// }