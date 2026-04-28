"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightFromSquare, Gear } from "@gravity-ui/icons";
import { Dropdown, Label } from "@heroui/react";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/Logout";

const Navbar = () => {
  const router = useRouter();

  const userData = useSession();
  const user = userData.data?.user;

  const handelLogout = async () => {
    await logout();
    // await authClient.signOut();
    // router.refresh();
    // router.push("/auth/loging");

    // await authClient.revokeSession({ token: "session-token" });

    // await authClient.signOut({
    //   fetchOptions: {
    //     onSuccess: () => {
    //       router.push("/");
    //     },
    //   },
    // });
  };

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 container mx-auto px-2 w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user && (
            <ul className="flex items-center text-sm gap-5">
              <li>
                <Link href={"/auth/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/auth/loging"}>SignIn</Link>
              </li>
            </ul>
          )}

          {user && (
            <Dropdown>
              <Dropdown.Trigger className="rounded-full">
                <Avatar>
                  <Avatar.Image
                    alt={user?.image}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback delayMs={600}>
                    {user.name.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
              </Dropdown.Trigger>
              <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <Avatar.Image
                        alt={user.naem}
                        src={user?.image}
                        referrerPolicy="no-referrer"
                      />
                      <Avatar.Fallback delayMs={600}>
                        {user?.image}
                      </Avatar.Fallback>
                    </Avatar>
                    <div className="flex flex-col gap-0">
                      <p className="text-sm leading-5 font-medium">
                        {user?.name}
                      </p>
                      <p className="text-xs leading-none text-muted">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
                <Dropdown.Menu>
                  <Dropdown.Item id="dashboard" textValue="Dashboard">
                    <Label>Dashboard</Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="profile" textValue="Profile">
                    <Label>Profile</Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="settings" textValue="Settings">
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Settings</Label>
                      <Gear className="size-3.5 text-muted" />
                    </div>
                  </Dropdown.Item>

                  <Dropdown.Item
                    id="logout"
                    textValue="Logout"
                    variant="danger"
                    onClick={handelLogout}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Log Out</Label>
                      <ArrowRightFromSquare className="size-3.5 text-danger" />
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
