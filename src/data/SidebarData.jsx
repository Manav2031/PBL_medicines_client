import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    
    {
        title: 'Med Dashboard',
        path: '/meddashboard',
        icon: <MdIcons.MdLogin />,
        cName: 'nav-text'
    },
    {
        title: 'Status',
        path: '/status',
        icon: <MdIcons.MdLogin />,
        cName: 'nav-text'
    },
    {
        title: 'Add Med',
        path: '/addmed',
        icon: <MdIcons.MdLogin />,
        cName: 'nav-text'
    },
    
]

export const loggedInData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'New Chat',
        path: '/newchat',
        icon: <BsIcons.BsFillChatDotsFill />,
        cName: 'nav-text'
    },
    {
        title: 'Chat History',
        path: '/chathistory',
        icon: <BsIcons.BsFillChatDotsFill />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <MdIcons.MdLogin />,
        cName: 'nav-text'
    },
]