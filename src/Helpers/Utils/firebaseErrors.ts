import { FirebaseError } from "firebase/app";

export function parseFirebaseError(err: unknown): string {
  if (err instanceof FirebaseError) {
    switch (err.code) {
      case "auth/invalid-credential":
      case "auth/invalid-email":
        return "Credenziali non valide.";
      case "auth/user-not-found":
        return "Utente non trovato.";
      case "auth/wrong-password":
        return "Password errata.";
      case "auth/email-already-in-use":
        return "Email già registrata.";
      case "auth/weak-password":
        return "Password troppo debole (minimo 6 caratteri).";
      case "auth/too-many-requests":
        return "Troppi tentativi: riprova più tardi.";
      case "auth/popup-closed-by-user":
        return "Login annullato dall'utente.";
      default:
        return err.message || "Errore sconosciuto.";
    }
  }
  return "Errore sconosciuto.";
}
