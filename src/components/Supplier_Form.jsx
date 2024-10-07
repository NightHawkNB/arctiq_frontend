import {useState} from 'react'

import {Input, Button} from "@nextui-org/react";
import { MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
import ProductForm from "./subcomponents/ProductForm.jsx";

function Supplier_Form () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contact, setContact] = useState('');
    const [mobile, setMobile] = useState('');
    const [products, setProducts] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            let formData = new FormData()
            formData.append("name", name)
            formData.append("email", email)

            if(password !== confirmPassword) {
                alert("Passwords do not match")
                throw new Error("Passwords do not match")
            } else {
                formData.append("password", password)
            }

            formData.append("contact", contact)
            formData.append("mobile", mobile)
            formData.append("products", JSON.stringify(products))


            //? Send formData to the server
            await axios.post('http://127.0.0.1:8000/api/suppliers/create', formData)
                .then(response => {
                    if(response.status === 201) {
                        alert("Supplier Created Successfully")
                    } else {
                        alert("An error occurred. Please try again")
                        console.error(response.data.content)
                    }
                })


            console.log(name, email, password, contact, mobile)
            console.log(formData)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="bg-blue-300 flex justify-center items-center">
            <form className="max-w-[80%] mb-6 md:mb-0 gap-4 grid grid-cols-2 py-10" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="James Bond"
                        labelPlacement="outside"
                        required
                        startContent={
                            <FaRegUser/>
                        }
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        labelPlacement="outside"
                        required
                        startContent={
                            <MdOutlineMail size={20}/>
                        }
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter a password"
                        labelPlacement="outside"
                        required
                        startContent={
                            <RiLockPasswordLine size={20}/>
                        }
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Reenter your password"
                        labelPlacement="outside"
                        required
                        startContent={
                            <RiLockPasswordLine size={20}/>
                        }
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="contact">Contact Person</label>
                    <Input
                        id="contact"
                        type="text"
                        placeholder="Person's Name"
                        labelPlacement="outside"
                        required
                        startContent={
                            <LuUsers size={20}/>
                        }
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="mobile">Mobile Number</label>
                    <Input
                        id="mobile"
                        type="text"
                        placeholder="07XXXXXXXX"
                        labelPlacement="outside"
                        startContent={
                            <MdOutlineLocalPhone size={20}/>
                        }
                        value={mobile}
                        required
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>

                <hr className="col-span-2" />

                <ProductForm products={products} setProducts={setProducts} />

                <div className="col-span-2 flex justify-center pt-4">
                    <Button color="primary" variant="shadow" type="submit">
                        Create Supplier <IoMdAdd size={20} />
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Supplier_Form;