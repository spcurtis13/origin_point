// ui/Navbar.js
import { SignInButton, SignOutButton,SignIn,UserButton, useUser} from "@clerk/nextjs";

export default function Navbar() {
    const { isSignedIn } = useUser();

  return (
        <nav className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
            <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                <span className="font-bold ">Origin Point Career Strategy</span>
                </div>
                <div className="flex space-x-4 items-center">
                    <a href="#" className="ml-8 px-1 py-2 rounded-md text-sm font-medium">Home</a>
                    <a href="#" className="px-1 py-2 rounded-md text-sm font-medium">Mentorship</a>
                    <a href="#" className="px-1 py-2 rounded-md text-sm font-medium">Technical</a>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex-shrink-0">
                {isSignedIn ? (
                    <SignOutButton>
                        <button className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                            Sign out
                        </button>
                    </SignOutButton>
                ) : (
                    <SignInButton redirectUrl="/app">
                        <button className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                            Sign in
                        </button>
                    </SignInButton>
                )}
                </div>
            </div>
            </div>
        </div>
        </nav>
  );
}
