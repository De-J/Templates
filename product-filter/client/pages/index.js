// import newRequest from "@/utils/newRequest"
import { useEffect, useState } from "react"
import Field from "../components/form-field"
import Table from "@/components/table"
import DynamicTable from "@/components/table-2"
import newRequest from "@/utils/newRequest"

const fields = [
    {
        id: "0",
        type: "text",
        name: "id",
        label: "ID",
    },
    {
        id: "1",
        type: "text",
        name: "first_name",
        label: "First Name",
    },
    {
        id: "2",
        type: "text",
        name: "last_name",
        label: "Last Name",
    },
    {
        id: "3",
        type: "text",
        name: "email",
        label: "Email",
    },
    {
        id: "4",
        type: "text",
        name: "city",
        label: "City",
    },
    {
        id: "5",
        type: "text",
        name: "car",
        label: "Car",
    },
    {
        id: "6",
        type: "text",
        name: "quote",
        label: "Quote",
    },
    {
        id: "7",
        type: "text",
        name: "phone_price",
        label: "Phone Price",
    },
    {
        id: "8",
        type: "text",
        name: "gender",
        label: "Gender",
    }
]

export default function Home() {
    const [filters, setFilters] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        city: "",
        car: "",
        quote: "",
        phone_price: "",
        gender: "",
        min: "",
        max: ""
    })

    // const [data, setData] = useState([]);
    // const [isTrue, setIsTrue] = useState(false);

    const onChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value })
    }

    // const handleSubmit = async () => {
    //     let query = "?"
    //     for (let key in filters) {
    //         if (filters[key] !== '')
    //             query += key + '=' + filters[key] + '&'
    //     }
    //     console.log(query)
    //     const res = await newRequest.get(`/query${query}`)
    //     if (res.data.length === 0) setData([])
    //     else setData(res.data)
    // }


    return (
        <>
            <div className="flex flex-wrap justify-center m-4">
                {fields.map(field =>
                    <Field
                        value={filters[field.name]}
                        {...field}
                        onChange={onChange} />
                )}
                <Field
                    name="min"
                    label="Income (min)"
                    value={filters.min}
                    onChange={onChange}
                />
                <Field
                    name="max"
                    label="Income (max)"
                    value={filters.max}
                    onChange={onChange}
                />
            </div>
            <div>
                <DynamicTable {...filters}/>
            </div>
        </>
    )
}