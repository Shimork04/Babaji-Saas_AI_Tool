import { Button } from "@/components/ui/button";
import Link from "next/link";

console.log("babaji is working");
const LandingPage = () => {
    return (
        <div>
            Landing Page (unprotected)
            <Link href="/sign-in">
            <Button>
                Login
            </Button>
            </Link>

            <Link href="/sign-up">
            <Button>
                Register
            </Button>
            </Link>
            
        </div>
    );
}

export default LandingPage;