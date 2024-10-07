import SupplierDetails from "./subcomponents/SupplierDetails.jsx";
import axios from 'axios'
import {useEffect, useState} from "react";
import {Button} from "@nextui-org/react";

function SupplierList() {

    const [page,  setPage] = useState(1);
    const [suppliers, setSuppliers] = useState([]);
    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);

    function handlePrev() {
        setPage(page - 1)
    }

    function handleNext() {
        setPage(page + 1)
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/suppliers/getAll?page=${page}`)
            .then(response => {
                if(response.status === 200) {
                    setSuppliers(response.data.content.data)
                    setPrevDisabled(response.data.content.prev_page_url === null)
                    setNextDisabled(response.data.content.next_page_url === null)
                } else {
                    console.error(response.data.content)
                    alert("An error occurred. Please try again")
                }
            })
    }, [page]);

    return (
        <div className="bg-blue-300 flex flex-col justify-center">
            <h1 className="heading">Supplier List</h1>

            <div className="flex justify-between items-center px-6 py-2">
                <Button color="primary" disabled={prevDisabled} onClick={handlePrev}>
                    Previous
                </Button>
                <Button color="primary" disabled={nextDisabled} onClick={handleNext}>
                    Next
                </Button>
            </div>

            <div className="flex flex-col gap-2 px-4 py-2">
                {suppliers && suppliers.map((supplier, index) => (
                    <SupplierDetails key={index} supplier={supplier}/>
                ))}

                {!suppliers && <h1>No suppliers found</h1>}
            </div>

        </div>
    );
}

export default SupplierList;