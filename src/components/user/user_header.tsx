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
import { Button } from "../ui/button";
import { getProducts } from "@/lib/api/product";

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
          <Button onClick={() => {getProducts(4)}}>
            test api
          </Button>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
