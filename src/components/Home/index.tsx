import { Link } from "react-router-dom"

export function Home() {

    return (
        <div className="container h-100">
            <div className="row h-75">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <div className="row">
                        {/* TODO: define tray_spec, tray_msl */}
                        <Link to={`/search/tray_spec`} className="btn btn-outline-info">Customer Spec.</Link>
                        <Link to={`/search/tray_msl`} className="mt-1 btn btn-outline-info">MSL</Link>
                    </div>
                </div>
            </div>
            <div className="h-25 g-0 px-5">
                <button className="btn btn-outline-secondary">Back</button>
            </div>
        </div>
    )
}

export default Home