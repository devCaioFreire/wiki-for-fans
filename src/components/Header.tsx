
interface HeaderProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabClick }) => {
  const handleTabClick = (tab: string) => {
    onTabClick(tab);
  };

  return (
    <header className="flex px-4 gap-6 pt-8 items-start w-full h-40 
    sm:flex-col 
    md:flex-row md:justify-between md:items-center">
      <h1 className="text-3xl font-bold">Suits Wiki</h1>
      <nav>
        <ul className="flex transition-all flex-row gap-4">
          <li className={`py-1 px-4 rounded-full ${activeTab === "all" ? "bg-base" : "bg-transparent"
            }`}
            onClick={() => handleTabClick("all")}>
            All
          </li>
          <li className={`py-1 px-4 rounded-full ${activeTab === "main" ? "bg-base" : "bg-transparent"
            }`}
            onClick={() => handleTabClick("main")}>
            Main
          </li>
          <li className={`py-1 px-4 rounded-full ${activeTab === "secundary" ? "bg-base" : "bg-transparent"
            }`}
            onClick={() => handleTabClick("secundary")}>
            Secundary
          </li>
        </ul>
      </nav>
    </header>
  )
}