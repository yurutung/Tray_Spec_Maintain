import { Link } from "react-router-dom"
import ReactShortcut from 'react-shortcut'

const Home = () => {

    return (
        <>
            <div className="container h-100">
                <div className="row main-body">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div className="row">
                            {/* TODO: define tray_spec, tray_msl */}
                            <Link to={`/search/tray_spec`} id='tray_spec' className="btn btn-outline-info">F1 Customer Spec.</Link>
                            <Link to={`/search/tray_msl`} id='tray_msl' className="mt-1 btn btn-outline-info">F2 MSL</Link>
                        </div>
                    </div>
                </div>
                <div className="gap-2 p-2 row">
                    <button className="btn btn-outline-secondary col-2">離開</button>
                </div>
            </div>
            <ReactShortcut
                keys={'f1'}
                onKeysPressed={() => { document.getElementById('tray_spec').click() }}
            />
            <ReactShortcut
                keys={'f2'}
                onKeysPressed={() => { document.getElementById('tray_msl').click() }}
            />
        </>

    )
}

export default Home