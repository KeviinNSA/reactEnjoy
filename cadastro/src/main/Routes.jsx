import React from "react"
import { Routes, Route } from "react-router-dom"
import Content from "../compoment/Content"
import Painel from '../compoment/Painel'


export default props => 
    <Routes>
        <Route path='/' exact  element= {<Content />} />
        <Route path='/painel'  element= {<Painel />} />
    </Routes>
