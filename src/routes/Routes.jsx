import React from 'react';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../pages/errorpage/ErrorPage';
import Root from '../pages/root/Root';
import Home from '../pages/home/Home';
import AdvocatesPage from '../pages/advocates/Advocatepage';
import Legalinfo from '../pages/legalinfo/Legalinfo';
import Branches from '../pages/Branchs/Branches';


 export const router = createBrowserRouter([
  {
    path: "/",
    Component :  Root ,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
     
        {
            index:true,
            loader :()=>fetch('advocate.json'),
            path:"/",
            Component: Home
        },
         {
            path: "/advocates",
            loader: () => fetch('advocate.json'), 
            Component: AdvocatesPage
        },
        {
          path :"/legal insigts",
          loader: () => fetch('legalinfo.json'), 
          Component: Legalinfo
        },
        {
          
          path : "/branch",
          loader: () => fetch('division.json'), 
          Component: Branches
        },
        
         
    ]
    
  },
]);




