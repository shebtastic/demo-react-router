import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"

function Layout({children}) {
    const navigate = useNavigate()

    return (
        <>
            <NavBar />
            <main>
                <Outlet />
                {children}
            </main>
            <button onClick={() => {navigate("/")}}>Send me home!</button>
        </>
    )
}

export default Layout