import { useEffect, useState } from "react";
import type { RefObject } from "react";

// Given that I added a sticky header this number helps avoid a laggy or broken update when navigating.
const ACTIVATION_GAP = 48;

//Intead of checking if the user is near to bottom of the viewport we ask if we are within...
const BOTTOM_TOLERANCE = 4;

const useActiveSection = (
  headerRef: RefObject<HTMLElement | null>,
  sectionIds: readonly string[],
): string => {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  // Any new render arrays are rercreated as a completely new ref in memory, this  code converts the array into  a single, primitive string.
  const idsKey = sectionIds.join(" ");

  // the following useEffect attaches a scroll listener on every scroll event so optimisations are needed for browsers to not freeze.
  useEffect(() => {
    const ids = idsKey ? idsKey.split(" ") : [];
    let frame = 0; // semantically saying that there's no anymation at this point.

    const update = () => {
      // Querying the DOM inside a scroll handler might not be a React best approached but this trade off
      // comes with benefit of a 100% accuracy  for dynamic layouts, which is not my portafolio
      // but nevertheless a good practice I'd like to implement.
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (sections.length === 0) return;

      const headerHeight =
        headerRef.current?.getBoundingClientRect().height ?? 0;
      const line = headerHeight + ACTIVATION_GAP;

      // this let us know which section are we exactly at, section as the portafolio
      // scrollable sections
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) {
          current = section.id;
        }
      }

      //Overriding what the loop above provided becasue we are at the bottom!
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - BOTTOM_TOLERANCE;

      if (atBottom) {
        current = sections[sections.length - 1].id;
      }

      // We tell React to only change state if the new value is different from the old one.
      setActive(current);
    };

    // no matter how many scroll events are trigger only one run per frame. e.g.
    //
    //     scroll event 1 -> frame is 0, so queue a callback, frame = 17
    // scroll event 2 -> frame is 17, return early (already queued)
    // scroll event 3 -> frame is 17, return early
    // scroll event 4 -> frame is 17, return early
    // --- browser is about to paint ---
    // callback runs: frame = 0, update() runs once
    // scroll event 5 -> frame is 0, so queue a new callback
    // In the above example we only call update() once.
    const schedule = () => {
      if (frame !== 0) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    // Run once on mount
    update();

    window.addEventListener("scroll", schedule, { passive: true });
    // Anything that moves the measurements of the header should trigger a resize...
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, [headerRef, idsKey]);

  return active;
};

export { useActiveSection };
