

import { useState , useEffect } from "react"
import { getCategories } from "../services"

const Categories = () => {
    const [categories, setcategories] = useState([])
    useEffect(() => {
       
        return () => {
            getCategories().then((newCategories => setcategories(newCategories)))
        }
    }, [])
    return (
        <div>
            {categories.map((post) => (
                <div>{post.name}</div>
            ))}
        </div>
    )
}

export default Categories