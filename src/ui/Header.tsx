//This is a thin strip header for the application it shows what page the user is on and 

import { UserButton } from "@clerk/nextjs";

//nessesary for typescript

interface HeaderProps {
    pageTitle: string;
}

//shows page title of the page
const Header = ({ pageTitle }: HeaderProps) => {
    return (
        <div className='flex justify-between items-center h-20 w-full'>
            <h1 className="text-3x1 font-bold">{pageTitle}</h1>
            <UserButton />
        </div>
    );
};

export default Header;
