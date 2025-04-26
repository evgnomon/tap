import ThemeToggle from "@shared/components/ThemeToggle";

function Header() {
  return (
    <header className="bg-primary p-1 px-4 text-center sticky top-0 z-10 flex flex-direction-row items-center justify-between">
      <h1 className="text-1xl font-bold">Zygote .Run</h1>
      <ThemeToggle />
    </header>
  );
}

export default Header;
