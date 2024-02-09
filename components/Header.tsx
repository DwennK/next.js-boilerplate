import Logo from "@/components/Logo";
import DarkModeToggle from "@/components/DarkModeToggle";
import UserButton from "@/components/UserButton";

function Header() {
  return (
    <header className="sticky top-0 -z50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />
        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* Language Select*/}

          {/* Session && */}

          <DarkModeToggle />

          <UserButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;
