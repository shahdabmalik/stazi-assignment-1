
import { useEffect } from "react"
import data from "../../data/data.json"
import { useDispatch, useSelector } from "react-redux"
import { SET_CARS } from "../../redux/features/carSlice"
import Card from "../card/Card"

const CarsContainer = ({ page }) => {

    const dispatch = useDispatch()

    let itemsPerPage = 6
    const { cars } = useSelector((state) => state.car)

    useEffect(() => {
        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage

        const pageData = data.cars.slice(startIndex, endIndex)
        dispatch(SET_CARS(pageData))

    }, [page, itemsPerPage, dispatch])

    return (
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" >
            {cars.map(car => <Card key={car.id} car={car} />)}
        </div>
    )
}

export default CarsContainer