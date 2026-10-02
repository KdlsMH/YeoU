import { Hero } from "@/components/invitation/Hero";
import { DinnerTableIllustration } from "@/components/invitation/DinnerTableIllustration";
import { Introduction } from "@/components/invitation/Introduction";
import { EventDetails } from "@/components/invitation/EventDetails";
import { InvitationMessage } from "@/components/invitation/InvitationMessage";
import { Schedule } from "@/components/invitation/Schedule";
import { ParticipationInfo } from "@/components/invitation/ParticipationInfo";
import { Location } from "@/components/invitation/Location";
import { RSVP } from "@/components/invitation/RSVP";
import { Footer } from "@/components/invitation/Footer";
import { Reveal } from "@/components/ui/Reveal";
export default function Home() {
  return <><a className="skip-link" href="#event-information">행사 정보로 바로 가기</a><main className="invitation"><Hero /><Reveal><DinnerTableIllustration /></Reveal><div className="invitation-body" id="event-information"><Reveal><Introduction /><EventDetails /></Reveal><Reveal><InvitationMessage /></Reveal><Reveal><Schedule /><ParticipationInfo /></Reveal><Reveal><Location /></Reveal><Reveal><RSVP /></Reveal><Footer /></div></main></>;
}
