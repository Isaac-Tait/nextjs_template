import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      {/* Mobile Footer */}
      <div className="flex md:hidden text-xs justify-center my-1">
        <p className="">
          ©&nbsp;{new Date().getFullYear()} - Another&nbsp;
          <Link
            href="https://mountaintopcoding.dev"
            className="text-indigo-500 hover:text-fuchsia-400"
            target="_blank"
          >
            mountainTopCoding(
            <span role="img" aria-label="mountain with snow-cap">
              &#127956;
            </span>
            );
          </Link>{' '}
          project
        </p>
      </div>
      {/* Desktop Footer */}
      <div className="hidden md:flex items-center justify-between text-xs mx-1">
        <div className="text-slate-500 w-1/3">
          <p className="">
            ©{new Date().getFullYear()} - Built with&nbsp;
            <Link
              href="https://nextjs.org/"
              className="text-indigo-500 hover:text-amber-400"
              target="_blank"
            >
              Next.js
            </Link>
            ,{' '}
            <Link
              href="https://tailwindcss.com"
              className="text-indigo-500 hover:text-lime-400"
              target="_blank"
            >
              TailwindCSS
            </Link>
          </p>
        </div>
        <div className="my-2 flex justify-center w-1/3">
          <Link href="https://github.com/Isaac-Tait/" target="_blank">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1653865755/GitHub/GitHub-Mark-64px_c6czf5.png"
              height={20}
              width={20}
              alt={'GitHub'}
            />
          </Link>
        </div>
        <div className="text-slate-500 w-1/3 flex justify-end">
          <p className="">
            Another&nbsp;
            <Link
              href="https://mountaintopcoding.dev"
              className="text-indigo-500 hover:text-fuchsia-400"
              target="_blank"
            >
              mountainTopCoding(
              <span role="img" aria-label="mountain with snow-cap">
                &#127956;
              </span>
              );
            </Link>{' '}
            project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
