import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "This is the Metadata in About Us page",
  description: "We are Love next js",
  openGraph: {
    images:
      "https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.15752-9/431517045_373589898878374_7394543353196021325_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7L6iFacbQCuHCart0xzhnsH_aE9ZoynCwf9oT1mjKcEvQNEK8gsAKNWx-vIIlM_ot8JGXzKGKibezJiyqeQ1d&_nc_ohc=0bAiwZxUH3oAX_5FEpM&_nc_oc=AdgnzzEXoih6XKntnuQTE1IyK_BAijv78IFp15fGxuHf0HLJCUdxM9EQnJWaRACmhHs&_nc_ht=scontent.fpnh10-1.fna&oh=03_AdS_yTeCO0cLYZXfxwJwcgwKD6-uHG4o2Trp62kcwusqDg&oe=662DAF45",
  },
};

export default function page() {
  return (
    <div className="grid place-content-center text-green-300 text-6xl">
      About Page
    </div>
  );
}
