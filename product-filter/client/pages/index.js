import newRequest from "@/utils/newRequest"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import Field from "../components/form-field"

const fields = [
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
        name: "car",
        label: "Car",
    },
    {
        id: "4",
        type: "text",
        name: "city",
        label: "City",
    }
]


export default function Home() {
    const [filters, setFilters] = useState({
        first_name: "",
        last_name: "",
        email: "",
        city: "",
    })

    const onChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value })
    }

    const query = useQuery({
        queryKey: ["userRecords"],
        queryFn: () => newRequest.get("/get")
            .then(res => res.data),
        // select: (data) => data.filter(record => record) 
    })



    return (
    <>
        <div className="flex flex-col justify-center m-4">
            {fields.map(field =>
                <Field
                    value={filters[field.name]}
                    {...field}
                    onChange={onChange} />
            )}
        </div>
        <div>
            {/* {query.data.map(record => <></>)} */}
        </div>
    </>
    )
}