import { redirect } from 'next/navigation';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Redirect to login page if the user is not authenticated
  if (!user) {
    redirect('/api/auth/login');
  }

  // If user exists, render the profile page
  return (
    <div>
      <h1>Welcome to your profile, {user.given_name || 'User'}!</h1>
    </div>
  );
}

// Ensure this page is not statically generated
export const dynamic = 'force-dynamic';
