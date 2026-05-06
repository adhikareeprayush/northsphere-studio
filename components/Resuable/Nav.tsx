import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-stroke bg-surface-card/95 backdrop-blur-sm">
      <div className="page-shell flex items-center justify-between py-3 sm:py-4">
        <div className="flex items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
        <Link className="flex items-center gap-2" href={"/"}>
          <Image
            src="/logo.svg"
            alt=""
            width={44}
            height={44}
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11"
          />
          <h3 className="hidden font-manrope text-lg font-bold text-text-heading sm:block sm:text-xl md:text-2xl">
            Northsphere Studio
          </h3>
        </Link>
        <ul className="hidden items-center gap-6 font-jakarta text-sm font-semibold text-text-heading lg:flex xl:gap-8">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-primary transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-primary transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <Link href="/contact">
          <Button
            type="button"
            label="Get Started"
            variant="secondary"
            icon={null}
            iconPosition="left"
            className="hidden py-2 font-manrope text-xs transition-colors hover:bg-primary hover:text-white sm:flex sm:px-4 sm:text-sm md:px-6 [&_img]:transition-[filter] hover:[&_img]:brightness-0 hover:[&_img]:invert"
          />
        </Link>
        {/* <Button
          type="button"
          className="hidden sm:flex h-8 w-8 sm:h-10 sm:w-10 rounded-full px-0 py-0 items-center justify-center"
          icon={
            <Image
              src={bell}
              alt="Notification Bell"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          }
          variant="primary"
          iconPosition="left"
        /> */}
        <MobileMenu />
      </div>
      </div>
    </header>
  );
};

export default Nav;
