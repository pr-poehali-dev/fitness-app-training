import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl text-primary">ФитЗдрав</div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="font-medium hover:text-primary transition-colors">О тренажере</a>
          <a href="#benefits" className="font-medium hover:text-primary transition-colors">Преимущества</a>
          <a href="#programs" className="font-medium hover:text-primary transition-colors">Программы</a>
          <a href="#pricing" className="font-medium hover:text-primary transition-colors">Цены</a>
          <a href="#reviews" className="font-medium hover:text-primary transition-colors">Отзывы</a>
        </nav>
        
        <Button className="hidden md:block">Заказать</Button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden py-4 bg-white/95 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              О тренажере
            </a>
            <a 
              href="#benefits" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Преимущества
            </a>
            <a 
              href="#programs" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Программы
            </a>
            <a 
              href="#pricing" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Цены
            </a>
            <a 
              href="#reviews" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Отзывы
            </a>
            <Button 
              className="w-full mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Заказать
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
