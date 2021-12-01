import React from 'react'
import AppsIcon from '@material-ui/icons/Apps'
import "./home.css"
import { Avatar, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Search from '../components/Search'


const Home = () => {
    return (
        <div className="home">
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to="/about">Sobre Google</Link>
                    <Link to="/store">Tienda</Link>
                </div>
                <div className="home_headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Imagenes</Link>
                    <IconButton>
                    <AppsIcon/>
                    </IconButton>
                    <Avatar/>
                </div>
            </div>
            <div className="home_body">                
                <img src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png"/>
                <Search/>
            </div>            
        </div>
    )
}

export default Home

