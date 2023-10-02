import { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

const SearchBox = () => {

    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const handleSearch = () => {
        if (search === "") return
        navigate(`/search/${search}`)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    return (
        <div className=" inline-flex items-center max-w-sm w-full gap-3 px-2.5 py-1.5 rounded-2xl bg-white" >
            <input type="text" className=" focus:outline-none flex-grow placeholder:text-sm" onKeyDown={handleKeyDown} placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className="cursor-pointer" ><BiSearch onClick={handleSearch} size={22} /></div>
        </div>
    )
}

export default SearchBox