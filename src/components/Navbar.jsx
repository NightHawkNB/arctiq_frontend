import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const navigation = useNavigate();

    return (
        <div className='w-[100%] sticky z-[1000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
            <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
                <h1 className='flex cursor-pointer text-[25px] text-white font-bold'>
                    TASK
                </h1>
                <div className="nav-link" onClick={() => navigation("/create-supplier")}>CREATE SUPPLIER</div>
                <div className="nav-link" onClick={() => navigation("/view-suppliers")}>SUPPLIER LIST</div>
                <div className="nav-link" onClick={() => navigation("/view-products")}>PRODUCTS LIST</div>
                <div className="nav-link" onClick={() => navigation("/search-supplier")}>SEARCH</div>
            </div>
        </div>
    )
}

export default Navbar