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
import { useAuth } from "../provider/auth-provider";

export default function User_header() {
  const { user ,isAuthenticated } = useAuth();
  return (
    <Sheet>
      <SheetTrigger>
        {
          isAuthenticated ? (user?.avatar? <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" /> : <User size={24} />) 
          :
          <User size={24} />
        }
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
