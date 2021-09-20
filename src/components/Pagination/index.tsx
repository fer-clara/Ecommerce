import './../../styles/pagination.scss'

export function Pagination({ totalPages, handleClick }:any) {
    const pages = [...Array(totalPages).keys()].map(num => num+1)

    return (
        <div className="pagination">
            {pages.map(num => (
                <button 
                    key={num}
                    onClick={() => handleClick(num)}
                >
                    {num}
                </button>
            ))}
        </div>
    )
}