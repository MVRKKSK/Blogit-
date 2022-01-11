
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
