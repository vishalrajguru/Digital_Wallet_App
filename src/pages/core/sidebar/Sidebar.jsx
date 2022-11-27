import React from 'react'
import './styles.css'

const Sidebar = () => {
    const toggleSidebar = () => document.body.classNameList.toggle("open");
    return (
        <>

            <button type="button" class="burger" onclick="toggleSidebar()">
                <img class="burger-avatar" src="./assets/avatar.png" />
                <span class="burger-icon"></span>
            </button>
            <div class="overlay"></div>
            <aside class="sidebar">
                <img class="sidebar-avatar" src="./assets/avatar.png" />
                <div class="sidebar-username">User</div>
                <nav class="sidebar-menu">
                    <button type="button">
                        <img src="./assets/icon-home.svg" />
                        <span>Home</span>
                    </button>
                    <button type="button">
                        <img src="./assets/icon-settings.svg" />
                        <span>Settings</span>
                    </button>
                    <button type="button">
                        <img src="./assets/icon-accounts.svg" />
                        <span>Profile</span>
                    </button>
                </nav>
                <nav class="sidebar-menu bottom">
                    <button type="button">
                        <img src="./assets/icon-lock.svg" />
                        <span>Login</span>
                    </button>
                    <button type="button">
                        <img src="./assets/icon-lock.svg" />
                        <span>Register</span>
                    </button>
                </nav>
               
            </aside>

            <h2>Dashboard</h2>
        </>


    )
}

export default Sidebar