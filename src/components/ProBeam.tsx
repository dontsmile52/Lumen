import { useReducedMotion } from 'motion/react';
import { BorderBeam } from '@/components/ui/border-beam';

/** A slow orange beam around the Pro card; gone when the system asks for less motion. */
export default function ProBeam() {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return <BorderBeam size={120} duration={9} colorFrom="#FF8A1F" colorTo="#FFD3A1" borderWidth={1.5} />;
}
