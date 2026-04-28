"use client";

import ProfileUpdate from "@/Components/ProfileUpdate/ProfileUpdate";
import { useSession } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
  const userData = useSession();
  const user = userData.data?.user;

  return (
    <section>
      <div>
        <Card className="max-w-2xl mx-auto mt-10 flex items-center justify-center space-y-4">
          <Avatar className="w-30 h-30">
            <Avatar.Image
              alt={user?.image}
              src={user?.image}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback delayMs={600}>{user?.image}</Avatar.Fallback>
          </Avatar>
          <div className="space-y-1 text-center">
            <h2 className="text-3xl font-semibold">{user?.name}</h2>
            <p className="font-semibold">{user?.email}</p>
          </div>
          <ProfileUpdate />
        </Card>
      </div>
    </section>
  );
};

export default ProfilePage;
