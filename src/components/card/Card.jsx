import { BsPeople, BsSpeedometer } from "react-icons/bs"
import { LuFuel } from "react-icons/lu"
import { RiSteering2Line } from "react-icons/ri"
import {AiOutlineHeart} from "react-icons/ai"

const Card = ({ car }) => {
    return (
        <div className="shadow-md rounded-2xl p-3 bg-slate-100 text-slate-500 border border-white" >
            <img className="aspect-4.5/3 object-cover rounded-2xl" src={car.imageUrl} />
            <div className="pt-4 px-2" >
                <div className="flex justify-between text-slate-700" >
                    <h3 className="text-2xl  font-bold" >{car.carName}</h3>
                    <p className="border-dashed border-2 text-sm px-2.5 py-1 font-bold rounded-xl border-blue-300" >{car.year}</p>
                </div>
                <div className="grid grid-cols-2 pt-5 pb-5 gap-5 border-slate-300 border-b" >
                    <div className="flex gap-2 items-center" >
                        <div className="text-blue-500" ><BsPeople size={18} /></div>
                        <p className="text-sm font-bold" >People</p>
                    </div>
                    <div className="flex gap-2 items-center" >
                        <div className="text-blue-500" ><LuFuel size={18} /></div>
                        <p className="text-sm font-bold" >{car.fuelType}</p>
                    </div>
                    <div className="flex gap-2 items-center" >
                        <div className="text-blue-500" ><BsSpeedometer size={18} /></div>
                        <p className="text-sm font-bold" >{car.mileage} / 1-litre </p>
                    </div>
                    <div className="flex gap-2 items-center" >
                        <div className="text-blue-500" ><RiSteering2Line size={18} /></div>
                        <p className="text-sm font-bold" >{car.transmission}</p>
                    </div>
                </div>
                <div className="pt-5 pb-1 flex justify-between" >
                    <p className="text-2xl font-bold text-slate-700" >${car.rentPerMonth} <span className="text-sm " >/ month</span></p>
                    <div className="flex gap-3 items-center" >
                       <div className="p-2 bg-blue-100 text-blue-400 rounded-xl cursor-pointer" ><AiOutlineHeart size={20} /></div>
                        <button type="button" className="bg-blue-400 text-white px-3 py-2 rounded-xl font-bold text-sm" >Rent Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card