import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/Components/ui/navigation-menu"
import Link from "next/link"
import { FaHome } from "react-icons/fa";


export default function NavBar() {
    return (
        <nav className="bg-blue-950 shadow px-4 py-4 flex justify-start overflow-x-auto">

            <NavigationMenu >
                <NavigationMenuList className="flex flex-wrap gap-x-6 items-center min-w-max">

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className="flex flex-row gap-2">
                            <Link href="/"
                                className="flex items-center gap-6 text-white hover:text-yellow-300 font-semibold"
                            ><FaHome /> Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                     <NavigationMenuItem>
                          <NavigationMenuLink asChild>
                            <Link href="/contants"
                                className="flex items-center gap-1 text-white hover:text-yellow-300 font-semibold">Contants
                                </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/prog"
                                className="flex items-center gap-1 text-white hover:text-yellow-300 font-semibold">Progress
                                </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                   

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/community" className="flex items-center gap-1 text-white hover:text-yellow-300 font-semibold">Community</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/challenges" className="flex items-center gap-1 text-white hover:text-yellow-300 font-semibold">Challenges</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/profile" className="flex items-center gap-1 text-white hover:text-yellow-300 font-semibold">Profile</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}