import React, { Suspense, useState } from 'react'
import ConditionalDemo1 from '../Conditional/ConditionalDemo1'
import ConditionalDemo2 from '../Conditional/ConditionalDemo2'
import ListDemo1 from '../ListItem/ListDemo1'
// import UserList from '../ListItem/UserList'
import GreetDemo1 from '../props/GreetDemo1'
import MyModal from '../props/MyModal'
import ModalDemo1 from '../props/ModalDemo1'
import SweetAlertDemo from '../props/SweetAlertDemo'
import Counter from '../Counter/Counter'
import UseEffectDemo1 from '../Hooks/UseEffectDemo1'
import ShowHidePassword from '../State/ShowHidePassword'
import AdditionExample1 from '../State/AdditionExample1'
import EmployeeCRUD from '../employeeCRUD/EmployeeCRUD'
import EventDemo1 from '../events/EventDemo1'
import Parent from '../Hooks/Parent'
import AdditionExample2 from '../State/AdditionExample2'
import FormDemo1 from '../form/FormDemo1'
import HttpDemo1 from '../http/HttpDemo1'
import HttpDemo2 from '../http/HttpDemo2'
import HttpDemo3 from '../http/HttpDemo3'
import HttpDemo4 from '../http/HttpDemo4'
import HttpDemo5 from '../http/HttpDemo5'
import ClickCounter from '../Counter/ClickCounter'
import HoverCounter from '../Counter/HoverCounter'
import Home from '../routing/Home'
import Aboutus from '../routing/Aboutus'
import Careers from '../routing/Careers'
import NotFound from '../routing/NotFound'
import { Route, Routes } from 'react-router-dom'
import UserDetails from '../routing/UserDetails'
import PermanentJobs from '../routing/PermanentJobs'
import ContractJobs from '../routing/ContractJobs'
import ProtectedRoute from '../routing/ProtectedRoute'
const UserList = React.lazy(() => import('../ListItem/UserList'));


export default function Main({ msg }) {
    const [flag, setFlag] = useState(true);

    return <>
        <div className='main container' style={{ minHeight: '300px' }}>
            {/* <ConditionalDemo1 /> */}
            {/* <ConditionalDemo2 /> */}
            {/* <ListDemo1 /> */}
            {/* <UserList /> */}
            {/* <GreetDemo1 name="sanjay" msg='Good Morning'>
                <div>COntent FROm parent component</div>
            </GreetDemo1>
            <GreetDemo1 name="Amit" msg='Good Evening' />
            <GreetDemo1 name="Deepak" msg='Good night' /> */}
            {/* <MyModal msg={msg}>
                <h1>Some content from parent</h1>
            </MyModal> */}
            {/* <ModalDemo1 /> */}
            {/* <SweetAlertDemo /> */}
            {/* {flag ? <Counter /> : null} */}
            {/* <button onClick={() => { setFlag(!flag) }}>Toggle flag</button> */}
            {/* <UseEffectDemo1 /> */}
            {/* <ShowHidePassword /> */}
            {/* <AdditionExample1 /> */}
            {/* <EmployeeCRUD /> */}
            {/* <EventDemo1 /> */}
            {/* <Parent /> */}
            {/* <AdditionExample2 /> */}
            {/* <FormDemo1 /> */}
            {/* <HttpDemo1 /> */}
            {/* <HttpDemo2 /> */}
            {/* <HttpDemo3 /> */}
            {/*  <HttpDemo4 />
            <hr></hr>
            <HttpDemo5 /> */}
            {/* <ClickCounter />
            <hr />
            <HoverCounter /> */}

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/aboutus" element={<Aboutus />} />
                <Route exact path="/careers" element={<Careers />} >
                    <Route path="permanent" element={<PermanentJobs />} />
                    <Route path="contract" element={<ContractJobs />} />
                </Route>
                <Route exact path="/users" element={
                    <ProtectedRoute>
                        <Suspense fallback={<div>Loading...</div>}>
                            <UserList />
                        </Suspense>
                    </ProtectedRoute>
                } />
                <Route exact path="/userdetails/:id" element={<UserDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </>
}
