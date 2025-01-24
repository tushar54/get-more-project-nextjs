import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession(); // Get the session
  const user = await getUser(); // Retrieve the authenticated user details

  // If no user exists, redirect to login (on server-side)
  if (!user) {
    return {
      redirect: {
        destination: '/api/auth/login', // Redirect to login page
        permanent: false,
      },
    };
  }

  // Render the profile page for authenticated users
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Hi {user.given_name}, Welcome to your Profile!</h1>
    </div>
  );
}
