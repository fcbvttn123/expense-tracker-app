import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div>
            <div className="flex items-center justify-center gap-6 mb-4">
                <NavLink to="/" className={({isActive})=>isActive ? "underline" : ""}>Home</NavLink>
                <NavLink to="/create" className={({isActive})=>isActive ? "underline" : ""}>Add Transaction</NavLink>
            </div>
            <Outlet />
        </div>
    )
}