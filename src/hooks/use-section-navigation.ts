import type { IntersectionOptions } from "react-intersection-observer";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";

export type SectionNavigationOptions = IntersectionOptions & {
  id: string;
};
export default function useSectionNavigation(
  options: SectionNavigationOptions,
) {
  const { id } = options;
  const router = useRouter();
  const { ref, inView } = useInView(options);

  useEffect(() => {
    if (inView && window.location.hash !== id && !window.isNavigationPressed) {
      router.push(`/#${id}`, { scroll: false });
    }
  }, [router, inView, id]);

  return { ref };
}
