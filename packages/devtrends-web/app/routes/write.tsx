import { useState } from "react";
import { type LoaderFunction, redirect } from "@remix-run/node";
import BasicLayout from "~/components/layouts/BasicLayout";
import { checkIsLoggedIn } from "~/lib/protectRoute";
import WriteLinkForm from "~/components/write/WriteLinkForm";
import WriteIntroForm from "~/components/write/WriteIntroForm";

export const loader: LoaderFunction = async ({ request }) => {
  const isLoggedIn = await checkIsLoggedIn(request);
  if (!isLoggedIn) return redirect("/login?next=/write");
  return null;
};

type Step = "link" | "intro";

function Write() {
  const [step, setStep] = useState<Step>("link");

  const stepRenderers = {
    link: () => <WriteLinkForm onProceed={() => setStep("intro")} />,
    intro: () => <WriteIntroForm />,
  };

  return stepRenderers[step]();
}

export default Write;
