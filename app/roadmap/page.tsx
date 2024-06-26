import { title } from "@/components/primitives";
import { Spacer } from "@nextui-org/react";

export default function RoadMapPage() {
  return (
    <div>
      <h1 className={title()}>Roadmap - Coming soon</h1>
      <Spacer y={2} />
      <ol>
        <li>1 - Create a basic text to story model with voice added - this will be my Toy Model</li>
        <li> 1.5 - Dubbing & Animations using your fav characters</li>
        <li>2. Fetch Videos from AWS to show in "Your videos"</li>
        <li>3. SignUp/Login</li>
        <li>4. Free account credits for university teachers</li>
        <li></li>
      </ol>

    </div>
  );
}
