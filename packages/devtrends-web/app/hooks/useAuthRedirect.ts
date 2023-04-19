import { useEffect } from "react";
import { useActionData, useNavigate, useSearchParams } from "@remix-run/react";
import { type AuthResult } from "~/lib/api/auth";
import { type CatchValue } from "@remix-run/react/dist/transition";

export function useAuthRedirect() {
  const authResult = useActionData<AuthResult | CatchValue>();
  const [searchParams] = useSearchParams();
  const next = searchParams.get("next") ?? "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (!authResult) return;
    if ("status" in authResult) return;
    navigate(next);
  }, [authResult, navigate, next]);
}
