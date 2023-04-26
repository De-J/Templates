import newRequest from '@/utils/newRequest'
import React, { useEffect } from 'react'
import { useTable, usePagination } from 'react-table'

// Let's add a fetchData method to our Table component that will be used to fetch
// new data when pagination state changes
// We can also add a loading state to let our table know it's loading new data
function Table({
    columns,
    data,
    fetchData,
    loading,
    pageCount: controlledPageCount,
}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        nextPage,
        previousPage,
        // Get the state from the instance
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 }, // Pass our hoisted table state
            manualPagination: true,
            // Tell the usePagination
            // hook that we'll handle our own data fetching
            // This means we'll also have to provide our own
            // pageCount.
            pageCount: controlledPageCount,
        },
        usePagination
    )

    // Listen for changes in pagination and use the state to fetch our new data
    React.useEffect(() => {
        fetchData({ pageIndex, pageSize })
    }, [fetchData, pageIndex, pageSize])

    // Render the UI for your table
    return (
        <>
            <pre>
                <code>
                    {JSON.stringify(
                        {
                            pageIndex,
                            pageSize,
                            pageCount,
                            canNextPage,
                            canPreviousPage,
                        },
                        null,
                        2
                    )}
                </code>
            </pre>
            <table className='border border-black boder-spacing-0' {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                    <tr>
                        {loading ? (
                            // Use our custom loading state to show a loading indicator
                            <td colSpan="10">Loading...</td>
                        ) : (
                            <td colSpan="10">
                                Showing {page.length} of ~{controlledPageCount * pageSize}{' '}
                                results
                            </td>
                        )}
                    </tr>
                </tbody>
            </table>
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
            <div className="pagination">
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
            </div>
        </>
    )
}

// Let's simulate a large dataset on the server (outside of our component)
// const serverData = makeData(10000)

export default function DynamicTable(props) {
    const columns = React.useMemo(() => [
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

    // We'll start our table without any data
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [pageCount, setPageCount] = React.useState(0)
    const fetchIdRef = React.useRef(0)

    
    if (props.flag) {
        setData(props.data)
    }
    
    React.useEffect(() => {
        const getQueryResult = async () => {
            // let size = Object.keys(props).length;
            let size = 2, empty = 0;
            const { id, ...otherProps } = props;
            for (let key in otherProps) {
                if (props[key].length > 0) empty++;
            }
            console.log(empty)
            if (empty >= size) {
                let query = "?"
                for (let key in props) {
                    query += key + '=' + props[key] + '&'
                }
                
                const res = await newRequest.get(`/query${query}`);
                console.log(res)
                if (res.data.length === 0) setData([])
                else setData(res.data)
            }
        }
        getQueryResult();
    }, [props])

    const fetchData = React.useCallback(async ({ pageSize, pageIndex }) => {

        // This will get called when the table needs new data
        // You could fetch your data from literally anywhere,
        // even a server. But for this example, we'll just fake it.

        // Give this fetch an ID
        const fetchId = ++fetchIdRef.current

        // Set the loading state
        setLoading(true)

        // Only update the data if this is the latest fetch
        if (fetchId === fetchIdRef.current) {
            const startRow = pageSize * pageIndex
            const endRow = startRow + pageSize

            const res = await newRequest.get(`/page?start=${startRow}&end=${endRow}`)
            console.log(res.data)
            setData(res.data)
            // Your server could send back total page count.
            setPageCount(pageSize)

            setLoading(false)
        }

    }, [])

    return (
        // <Styles>
        <Table
            columns={columns}
            data={data}
            fetchData={fetchData}
            loading={loading}
            pageCount={pageCount}
        />
        // </Styles>
    )
}