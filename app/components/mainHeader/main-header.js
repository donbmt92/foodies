import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackGround from './main-header-background';

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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foody Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
