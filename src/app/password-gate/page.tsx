import { Suspense } from "react";
import PasswordGateScreen from "@/components/PasswordGateScreen";

export default function PasswordGatePage() {
  return (
    <Suspense fallback={<main className="password-gate-page" />}>
      <PasswordGateScreen />
    </Suspense>
  );
}
