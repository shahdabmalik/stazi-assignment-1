import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { SET_SEARCH_CARS } from "../../redux/features/searchSlice"
import Card from "../../components/card/Card"
import Navbar from "../../components/navbar/Navbar"

const SearchPage = () => {

    const { search } = useParams()
    const dispatch = useDispatch()

    const { searchCars } = useSelector(state => state.search)

    useEffect(() => {
        dispatch(SET_SEARCH_CARS(search))
    }, [search, dispatch])

    return (
        <div className="max-w-screen-xl mx-auto p-5 min-h-screen" >
            <Navbar />
            <h2 className="text-xl my-5 font-bold" >Search result for &quot; {search} &quot;</h2>
            <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" >
                {searchCars.map(car => <Card key={car.id} car={car} />)}
            </div>
        </div>
    )
}

export default SearchPage