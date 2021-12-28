
import Link from "next/link"
import { useState, useEffect } from "react"
import { getCategories } from "../services"

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => {
            setCategories(newCategories);
        });
    }, []);

    return (
        <div className="Categories-main shadow-lg">
            <h3 className="Categories-heading">Categories</h3>
            {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}>
                    <div className="Categories-content">
                        <span className="Category-slug-main">
                            {category.name}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Categories

/* const Categories = () => {
    const [categories, setcategories] = useState([])

    useEffect(() => {
        return () => {
            getCategories().then((newCategories) => setcategories(newCategories)
            )
        }
    }, [])
    console.log(categories)

    return (
        <div className="Categories-main shadow-lg">
            <p className="Categories-heading">Categories</p>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <div className="Categories-content">
                        <div className="Category-slug-main">
                            {category.name}
                        </div>
                    </div>
                </Link>


            ))}
        </div>
    )
}

export default Categories */