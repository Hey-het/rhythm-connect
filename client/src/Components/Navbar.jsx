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
        <nav className="bg-blue-950 shadow px-8 py-4 flex justify-center flex-row rounded-t-md ">
            <NavigationMenu >
                <NavigationMenuList className="flex flex-row gap-x-8 items-center">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className="flex flex-row gap-2">
                            <Link href="/"
                                className="flex items-center gap-6 text-white hover:text-yellow-300 font-semibold"
                            ><FaHome /> Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/prog" 
                            className="flex items-center gap-1 text-white hover:text-yellow-300 font-semibold">Progress</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/content" className="flex items-center gap-1 text-white hover:text-yellow-300 font-semibold">Content</Link>
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