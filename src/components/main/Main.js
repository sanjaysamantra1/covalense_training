import React from 'react'
import ConditionalDemo1 from '../Conditional/ConditionalDemo1'
import ConditionalDemo2 from '../Conditional/ConditionalDemo2'
import ListDemo1 from '../ListItem/ListDemo1'
import UserList from '../ListItem/UserList'
import GreetDemo1 from '../props/GreetDemo1'
import MyModal from '../props/MyModal'
import ModalDemo1 from '../props/ModalDemo1'
import SweetAlertDemo from '../props/SweetAlertDemo'

export default function Main({ msg }) {
    return <>
        <div className='main' style={{ minHeight: '300px' }}>
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
            <SweetAlertDemo />
        </div>
    </>
}
