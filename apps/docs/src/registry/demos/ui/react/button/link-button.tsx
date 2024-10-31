import { Button } from "@/registry/ui/react/button";
import { SignIn } from "@/lib/icons";

export default function ButtonDemo(): JSX.Element {
  return (
    <Button href="/login" prefix={<SignIn />} target="_blank">
      Login
    </Button>
  );
}
