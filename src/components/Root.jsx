import { Outlet, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";


function Root() {
    
    return (
        <div>
            <Nav/>
            <main>
            <Outlet />
            </main>
        </div>
      );
}

export default Root;