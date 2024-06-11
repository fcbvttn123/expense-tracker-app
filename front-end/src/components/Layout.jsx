import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div>
            <div className="flex items-center justify-center gap-6 mb-4">
                <button>Home</button>
                <button>Add Transaction</button>
            </div>
            <Outlet />
        </div>
    )
}