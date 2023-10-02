import { useParams } from "react-router-dom";
import CarsContainer from "../../components/carsContainer/CarsContainer";
import Navbar from "../../components/navbar/Navbar"
import Pagination from "../../components/pagination/Pagination";

const HomePage = () => {

    // get page from params
    const { pageNumber } = useParams()
    const pageNo = parseInt(pageNumber) || 1

    return (
        <div className=" max-w-screen-xl w-full mx-auto p-5 min-h-screen" >
            <Navbar />
            <CarsContainer page={pageNo} />
            <Pagination page={pageNo} />
        </div>
    )
}

export default HomePage