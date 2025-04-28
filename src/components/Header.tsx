
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Ось Жизни</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-sm hover:text-primary transition-colors">Преимущества</a>
          <a href="#method" className="text-sm hover:text-primary transition-colors">Метод</a>
          <a href="#programs" className="text-sm hover:text-primary transition-colors">Программы</a>
          <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
          <a href="#pricing" className="text-sm hover:text-primary transition-colors">Цены</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm"
            className="hidden md:inline-flex"
          >
            О методике
          </Button>
          <Button 
            size="sm"
            className="hover-scale"
          >
            Записаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
