'use client'

import React, {useState} from 'react'
import {
    AudioOutlined,
    BarsOutlined,
    GoogleOutlined,
    GithubOutlined,
    TwitterOutlined,
} from '@ant-design/icons'
import {Button, Input, Space, Modal} from 'antd'

type PropsType = {
    showSidebar: boolean
    setShowSidebar: any
}

const {Search} = Input

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
)

const onSearch = (value: string) => console.log(value)

const Navbar = ({showSidebar, setShowSidebar}: PropsType) => {
    const [focus, setFocus] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [passwordVisible, setPasswordVisible] = React.useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <div className='flex items-center justify-between pt-3'>
                <div className='h-[100%]'>
                    <Button
                        icon={<BarsOutlined style={{fontSize: '150%', display: 'flex', alignItems: 'center'}}/>}
                        size={'large'}
                        className='bg-blue-600'
                        onClick={() => setShowSidebar(!showSidebar)}
                        style={{color: 'white', width: '40px', height: '40px'}}
                    />
                </div>
                <Space direction='vertical'>
                    <Search
                        placeholder='input search text'
                        allowClear
                        onSearch={onSearch}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        style={focus ? {width: 400} : {width: 200}}
                    />
                </Space>
                <Button type='primary' className='bg-blue-700' onClick={showModal}>
                    Login
                </Button>
                <Modal
                    title='Login Modal'
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <div className='flex-cols mx-20'>
                        <p className=''>Please log in in order to fully use this app</p>

                        <Space direction='vertical'>
                            <Input placeholder='Login' style={{width: '250px'}}/>
                            <Input.Password
                                placeholder='input password'
                                visibilityToggle={{
                                    visible: passwordVisible,
                                    onVisibleChange: setPasswordVisible,
                                }}
                            />
                        </Space>
                        <div className='mx-16'>
                            <p className='text-lg'>Or log in with...</p>
                            <div className='flex gap-2'>
                                <Button size={'large'} icon={<GoogleOutlined/>}/>
                                <Button size={'large'} icon={<GithubOutlined/>}/>
                                <Button size={'large'} icon={<TwitterOutlined/>}/>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Navbar
