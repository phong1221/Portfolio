import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#050505]">
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
