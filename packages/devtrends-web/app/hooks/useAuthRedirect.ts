import { useEffect } from "react";
import { useActionData, useNavigate, useSearchParams } from "@remix-run/react";
import { type AuthResult } from "~/lib/api/auth";

export function useAuthRedirect() {
  const authResult = useActionData<AuthResult>();
  const [searchParams] = useSearchParams();
  const next = searchParams.get("next") || "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (!authResult) return;
    navigate(next);
  }, [authResult, navigate, next]);
}