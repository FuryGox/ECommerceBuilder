import { User } from "@phosphor-icons/react/dist/ssr";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import LoginByGoogleComponent from "../provider/google-login";

export default function User_header() {
  return (
    <Sheet>
      <SheetTrigger>
        <User size={24} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Login?</SheetTitle>

          <LoginByGoogleComponent />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
