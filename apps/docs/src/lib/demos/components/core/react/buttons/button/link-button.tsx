import { Button } from "@/lib/components/core/default/react/buttons/button";
import { LogInIcon } from "@/lib/icons";

export default function ButtonDemo() {
  return (
    <Button href="/login" prefix={<LogInIcon />} target="_blank">
      Login
    </Button>
  );
}
