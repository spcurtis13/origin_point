import { UserButton } from "@clerk/nextjs";

interface HeaderProps {
    pageTitle: string;
}

const Header = ({ pageTitle }: HeaderProps) => {
    return (
        <div className='flex justify-between items-center h-20 w-full'>
            <h1 className="text-3x1 font-bold">{pageTitle}</h1>
            <UserButton />
        </div>
    );
};

export default Header;
