import './../../styles/filter.scss'

export function FormFilter( ) {

    return (
        <>
            <form className="form">
                <h4 className="title">Filter</h4>

                <label htmlFor="people">
                    <input type="checkbox" id="people"/> People
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="premium">
                    <input type="checkbox" id="premium"/> Premium
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="pets">
                    <input type="checkbox" id="pets"/> Pets
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="food">
                    <input type="checkbox" id="food"/> Food
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="landmarks">
                    <input type="checkbox" id="landmarks"/> Landmarks
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="cities">
                    <input type="checkbox" id="cities"/> Cities
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="nature">
                    <input type="checkbox" id="nature"/> Nature
                    <span className="checkmark"></span>
                </label>

                <h4 className="title">Price range</h4>

                <label htmlFor="until-20">
                    <input type="checkbox" id="until-20"/> Lower than $20
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="until-100">
                    <input type="checkbox" id="until-100"/> $20 - $100
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="until-200">
                    <input type="checkbox" id="until-200"/> $100 - $200
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="more-200">
                    <input type="checkbox" id="more-200"/> More than $200
                    <span className="checkmark"></span>
                </label>
            </form>
        </>
    )
}