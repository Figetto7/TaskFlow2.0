import { useAuth } from "../Hooks/useAuth";

export default function Dashboard() {
  const { user, signOutUser } = useAuth();

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button className="rounded border px-3 py-1" onClick={() => signOutUser()}> Esci </button>
        </header>

        <div className="rounded border p-4">
          <p><strong>UID:</strong> {user?.uid}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Verificata:</strong> {user?.emailVerified ? "sì" : "no"}</p>
        </div>
      </div>
    </div>
  );
}
