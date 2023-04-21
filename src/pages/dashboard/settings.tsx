import React from 'react';
import DashboardLayout from '~/components/DashboardLayout';
import {
    RedirectToSignIn,
    SignedIn,
    SignedOut,
    UserProfile
  } from "@clerk/nextjs";

export default function Settings() {
  return (
    <DashboardLayout>
        <SignedIn>
        {/* Signed in users will see their user profile */}
        <UserProfile 
            appearance={{
                elements: {
                    card: 'shadow-none',
                    navbar: 'hidden'
                }
                }}
        />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </DashboardLayout>
  );
}