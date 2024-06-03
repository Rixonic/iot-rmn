import {
  Navbar as NextUINavbar,
  NavbarContent,
  Image,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/react";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
      <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-4" href="/">
            <p className=" font-serif font-bold text-inherit">A.C.S.A.</p>
            <p className=" sm:flex hidden font-bold text-inherit">Areas Controladas S.A.</p>
          </NextLink>
        </NavbarBrand>
        {/* 
      <ul className="hidden lg:flex gap-4 justify-start ml-2">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </ul>
      */}
      </NavbarContent>

      {/* 		
    <NavbarContent	
      className="hidden sm:flex basis-1/5 sm:basis-full"
      justify="end"
    >
      <NavbarItem className="hidden md:flex">
        <p className="font-bold text-inherit">Logo Institucion</p>
      </NavbarItem>
      
      
      <NavbarItem className="hidden sm:flex gap-2">
        <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
          <TwitterIcon className="text-default-500" />
        </Link>
        <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
          <DiscordIcon className="text-default-500" />
        </Link>
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarItem>
      <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      <NavbarItem className="hidden md:flex">
        <Button
                isExternal
          as={Link}
          className="text-sm font-normal text-default-600 bg-default-100"
          href={siteConfig.links.sponsor}
          startContent={<HeartFilledIcon className="text-danger" />}
          variant="flat"
        >
          Sponsor
        </Button>
      </NavbarItem>
      
    </NavbarContent>*/}



      <NavbarContent className=" basis-1 pl-4" justify="end">
        
          <Image
            width={48}
            alt="NextUI hero Image"
            src="./logoInstitucion.png"
          />
       
        <NavbarItem className="hidden sm:flex">{siteConfig.institution}</NavbarItem>
        <ThemeSwitch />
        {/* <NavbarMenuToggle /> */}
      </NavbarContent>

    </NextUINavbar>
  );
};
