import { Button } from "@/lib/components/core/default/react/buttons/button";
import { SignIn } from "@/lib/icons";

export default function ButtonDemo() {
  return (
    <Button href="/login" prefix={<SignIn />} target="_blank">
      Login
    </Button>
  );
}
