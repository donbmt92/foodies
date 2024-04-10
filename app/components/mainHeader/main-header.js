import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackGround from './main-header-background';
import { usePathname } from 'next/navigation';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackGround />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src={logoImg}
            className={classes.logo}
            alt="A plate with food on it"
            priority
          />
          Foodies Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={'/meals'}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={'/community'}>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
