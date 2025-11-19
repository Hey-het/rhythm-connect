'use client';
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from '@clerk/nextjs';

export default function ProfilePage() {
  const { user } = useUser();

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>Profile</h2>
      <SignedIn>
        <div style={{ marginBottom: "1rem" }}>
          <UserButton />
        </div>
        <div>
          <img
            src={user?.imageUrl}
            alt="Profile"
            style={{ width: 100, height: 100, borderRadius: "50%", marginBottom: "1rem" }}
          />
          <p><strong>Name:</strong> {user?.fullName}</p>
          <p><strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress}</p>
        </div>
      </SignedIn>
      <SignedOut>
        {/* Add routing prop to fix Clerk error */}
        <SignIn routing="hash" />
      </SignedOut>
    </div>
  );
}
