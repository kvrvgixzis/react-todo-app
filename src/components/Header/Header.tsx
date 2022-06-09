import './Header.css';

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <h1 className="header__title" data-testid="header__title">
        Get random item
      </h1>
    </header>
  );
};