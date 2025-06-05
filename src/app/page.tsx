import TopNavSocialLink from "@/ui/landing-page/header/TopNavSocilaLink";
import TopOffer from "@/ui/landing-page/header/TopOffer";
import TopUsersActions from "@/ui/landing-page/header/TopUsersActions";
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (<>
    <TopOffer />
    <TopNavSocialLink />
    <Separator className="bg-gray-400"/>
    <TopUsersActions />
  </>);
}
