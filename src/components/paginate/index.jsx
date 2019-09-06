import React from "react"
import { Link } from "gatsby";

const PaginateComponent = ({ pages, cur, className }) => {
    const prevPage = cur === 2 ? '/projects' : `/projects/${cur-1}`;
    const nextPage = `/projects/${cur + 1}`;
    
    return (
        <div className={"paginate " + (className || '')}>
    {(cur === 1)
        ? (<span className="paginate__placeholder">&lt;</span>)
        : (<Link className="paginate__arrow" to={prevPage}>&lt;</Link>)
    }
                {Array.from({length: pages}).map((_, n) => (
                    <Link
                        key={n}
                        to={'/projects/'+(n === 0 ? '': n + 1)}
                        className={"paginate__num" + ((n + 1) === cur ? " paginate__num--cur" : "")}
                    >{n + 1}</Link>
                ))}
            {cur === pages
                ? <span className="paginate__placeholder">&gt;</span>
                : <Link className="paginate__arrow" to={nextPage}>&gt;</Link>
            }
        </div>
    )
}

export default PaginateComponent
