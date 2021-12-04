import { Routes, Route } from 'react-router'
import MyWords from '../my-words/MyWords'
import Payments from '../payment/Payments'

function RouteList() {
    return (
        <Routes>
            <Route path="/" element={<MyWords />} />
            <Route path="/my-words" element={<MyWords />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="*" element={<MyWords />} />
        </Routes>
    )
}

export default RouteList
