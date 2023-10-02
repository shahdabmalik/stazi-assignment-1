
import { useNavigate } from "react-router-dom"
import { usePagination, DOTS } from "../../customHook/usePagination"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"

const Pagination = ({ page }) => {

    const navigate = useNavigate()
    const siblingCount = 1
    const paginationRange = usePagination(siblingCount, page)

    // If there are less than 2 times in pagination range we shall not render the component
    if (page === 0 || paginationRange.length < 2) return null

    const onNext = () => {
        navigate(`/page/${page + 1}`)
    };

    const onPrevious = () => {
        navigate(`/page/${page - 1}`)
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    const handlePageClick = (number) => {
        navigate(`/page/${number}`)
    }

    return (
        <ul className="flex gap-3 items-center justify-center py-5 rounded-2xl mt-5 border-white border bg-slate-100" >
            <li className=" cursor-pointer bg-white flex items-center hover:bg-blue-200 transition-all justify-center  rounded-lg text-sm font-bold" ><button className="w-8 h-8 flex items-center justify-center" type="button" disabled={page === 1 ? true : false} onClick={onPrevious} ><BiLeftArrowAlt size={20} /></button></li>
            {paginationRange.map((number, index) => {
                if (number === DOTS) return <li className="bg-white flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold" key={index} >&#8230;</li>
                return (
                    <li className={"cursor-pointer flex items-center hover:bg-blue-200 transition-all justify-center w-8 h-8 rounded-lg text-sm font-bold " + (page === number ? " bg-blue-300 " : 'bg-white')} key={index} onClick={() => handlePageClick(number)} >{number}</li>
                )
            })}
            <li className=" cursor-pointer bg-white flex items-center hover:bg-blue-200 transition-all justify-center  rounded-lg text-sm font-bold" ><button className="w-8 h-8 flex items-center justify-center" type="button" disabled={page === lastPage ? true : false} onClick={onNext} ><BiRightArrowAlt size={20} /></button></li>
        </ul>
    )
}

export default Pagination