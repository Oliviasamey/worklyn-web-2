// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home/Home'
// import Splash from './Pages/Splash/Splash'
// import Form from './Components/form';
// import { ThemeProvider } from "@material-tailwind/react";

// export default function App() {
//     return (
//         <div className='w-screen justify-center'>
//             <h1 className="text-5xl">
//                 Hello World
//             </h1>
//             <Form></Form>
//             <Splash></Splash>

//         </div>

//     )
// }

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import Home from './Pages/Home/Home';
import Splash from './Pages/Splash/Splash';
import Form from './Components/form';

export default function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/splash" element={<Splash />} />
                        <Route path="/form" element={<Form />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}