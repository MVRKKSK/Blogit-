import React, { useContext } from "react"
import Link from "next/link"

const categories = [{ name: "react", slug: "web development" }, { name: "react-practise", slug: "web-dev" }]

const Navbar = () => {
    return (
        <div className="container nav-cont">
            <div className="Navbar_content d-flex">
                <div className="Main-icon-navbar">
                    <Link href="/">
                        <span className="ifont-main">Blogit</span>
                    </Link>
                </div>
                <div className="d-none d-lg-flex nav-side-comp ">
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`} >
                            <div className="nav-side-comp">
                                {category.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Navbar
