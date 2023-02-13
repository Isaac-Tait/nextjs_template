import Link from 'next/link';

import Logo from '../components/Logo';

const Header = () => {
  return (
    <div className="lg:grid grid-cols-2">
      <div>
        <Logo />
      </div>
      <div className="flex justify-end mr-2 space-x-4 text-xs italic">
        <Link href="https://mountaintopcoding.dev">Login</Link>
        <Link href="https://mountaintopcoding.dev">Register</Link>
      </div>
    </div>
  );
};

export default Header;
